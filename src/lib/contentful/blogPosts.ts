import { fetchContentEntries } from "./contentfulClient"
import type { BlogPostContent, ContentEntries, CTFImg } from "./types"

const sortInAscendingOrder = <T extends object>(arr: T[]) => {
  // @ts-ignore
  return arr.sort((a, b) => Date.parse(b.date) - Date.parse(a.date))
}

export const blogPosts = async (pwops: ContentEntries & CTFImg) => {
  const { limit, category } = pwops

  const entries = await fetchContentEntries<BlogPostContent>({ limit, category })

  const posts = entries.items.map((item) => {
    const { banner, category, content, description, overridePublishDate, slug, title, isFeatured } =
      item.fields
    const image = banner ? `https:${banner.fields.file.url}?fm=webp` : ""

    const datePublished = overridePublishDate ? overridePublishDate : item.sys.createdAt

    return {
      isFeatured,
      title,
      slug,
      description,
      category,
      content,
      banner: image,
      date: datePublished
    }
  })

  return sortInAscendingOrder(posts)
}

export type BlogPostsReturnType = Awaited<ReturnType<typeof blogPosts>>
