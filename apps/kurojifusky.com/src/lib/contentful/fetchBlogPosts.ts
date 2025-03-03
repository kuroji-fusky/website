/* eslint-disable @typescript-eslint/no-explicit-any */
import { fetchContentEntries } from "./client"
import { parseMediaType } from "./parsers/utils"

import type { BlogAuthorContent } from "./fetchBlogAuthor"
import type { BlogSeriesContent } from "./fetchBlogSeries"
import type { ctf, ReturnTypeFromAwaited } from "./types"

type BlogPostContent = ctf.DefineModel<
  "blogPost",
  {
    title: ctf.Fields.Text
    description: ctf.Fields.Text
    category: ctf.Fields.Array<ctf.Fields.Symbol>
    content: ctf.Fields.RichText
    overridePublishDate: ctf.Fields.Date
    slug: ctf.Fields.Text
    isFeatured: ctf.Fields.Boolean
    banner: ctf.Fields.Embed
    authors: ctf.Fields.Array<ctf.Fields.EntryLink<BlogAuthorContent>>
    fromSeries: ctf.Fields.EntryLink<BlogSeriesContent>
  }
>

const sortInAscendingOrder = <T extends object>(arr: T[]) => {
  return arr.sort(
    (a, b) =>
      Date.parse((b as unknown as any).date) -
      Date.parse((a as unknown as any).date)
  )
}

interface BlogPostProps {
  limit?: number
  category?: string
}

export const fetchBlogPosts = async (pwops: BlogPostProps) => {
  const { limit, category } = pwops

  const entries = await fetchContentEntries<BlogPostContent>("blogPost", {
    limit,
    "fields.category": category
  })

  const posts = entries.items.map((item) => {
    const {
      banner,
      category,
      content,
      description,
      overridePublishDate,
      slug,
      title,
      isFeatured,
      authors,
      fromSeries
    } = item.fields

    const image = `${parseMediaType(banner)}?fm=webp`

    const datePublished = overridePublishDate
      ? overridePublishDate
      : item.sys.createdAt

    if (!authors) {
      throw new Error(
        "Field for 'authors' is empty. Did you forget to fill it up?"
      )
    }

    const authorsArr = authors.map((author) => {
      const { avatar, name, slug } = (author as any)
        .fields as ctf.ResolveModelFields<BlogAuthorContent>

      return {
        avatar: parseMediaType(avatar),
        name,
        slug
      }
    })

    return {
      isFeatured,
      title,
      slug,
      description,
      category,
      content,
      authors: authorsArr,
      fromSeries,
      banner: image,
      date: datePublished
    } as const
  })

  return sortInAscendingOrder(posts)
}

export type BlogPostsReturnType = ReturnTypeFromAwaited<typeof fetchBlogPosts>
