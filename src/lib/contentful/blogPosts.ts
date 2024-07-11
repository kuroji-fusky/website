import { fetchContentEntries } from "./contentfulClient"
import type { BlogPostContent, ContentEntries, CTFImg } from "./types"

const sortInAscendingOrder = <T extends object>(arr: T[]) => {
  // @ts-ignore
  return arr.sort((a, b) => (new Date(b.date) as any) - (new Date(a.date) as any))
}

export const latestBlogPosts = async (pwops: ContentEntries & CTFImg) => {
  const { limit, img, category } = pwops

  const entries = await fetchContentEntries<BlogPostContent>({ limit, category })

  const posts = entries.items.map((item) => {
    const { banner, category, content, description, overridePublishDate, slug, title } = item.fields
    const image = banner ? `https:${banner.fields.file.url}?fm=webp` : ""

    const datePublished = overridePublishDate ? overridePublishDate : item.sys.createdAt

    return {
      title,
      slug,
      description,
      category,
      content,
      banner: image,
      date: datePublished
    }
  })

  return sortInAscendingOrder(posts) as typeof posts
}

export type BlogPostsReturnType = Awaited<ReturnType<typeof latestBlogPosts>>
