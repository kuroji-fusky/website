/* eslint-disable @typescript-eslint/no-explicit-any */
import { fetchContentEntries } from "./client"
import type {
  AwaitedReturnType,
  ContentEntries,
  ContentfulFieldConstructor,
  EntryFieldEmbed,
  EntryFieldTypes
} from "./types"

type BlogPostContent = ContentfulFieldConstructor<
  "blogPost",
  {
    title: EntryFieldTypes.Text
    description: EntryFieldTypes.Text
    category: EntryFieldTypes.Array<EntryFieldTypes.Symbol>
    content: EntryFieldTypes.RichText
    overridePublishDate: EntryFieldTypes.Date
    slug: EntryFieldTypes.Text
    isFeatured: EntryFieldTypes.Boolean
    banner: EntryFieldEmbed
    authors: EntryFieldTypes.Array<EntryFieldTypes.Symbol>
    fromSeries: EntryFieldTypes.Object<{
      fields: {
        title: string
        slug: string
      }
    }>
  }
>

const sortInAscendingOrder = <T extends object>(arr: T[]) => {
  return arr.sort(
    (a, b) =>
      Date.parse((b as unknown as any).date) -
      Date.parse((a as unknown as any).date)
  )
}

export const fetchBlogPosts = async (pwops: ContentEntries) => {
  const { limit, category } = pwops

  const entries = await fetchContentEntries<BlogPostContent>({
    limit,
    category
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

    const image = banner ? `https:${banner.fields.file.url}?fm=webp` : ""
    const datePublished = overridePublishDate
      ? overridePublishDate
      : item.sys.createdAt

    return {
      isFeatured,
      title,
      slug,
      description,
      category,
      content,
      authors,
      fromSeries,
      banner: image,
      date: datePublished
    }
  })

  return sortInAscendingOrder(posts)
}

export type BlogPostsReturnType = AwaitedReturnType<typeof fetchBlogPosts>
