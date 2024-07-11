import { client } from "./contentfulClient"
import type { BlogPostContent, CTFImg } from "./types"

interface FetchBlogContent {
  limit?: number
  category?: string
}

const sortInAscendingOrder = <T extends object>(arr: T[]) => {
  // @ts-expect-error
  return arr.sort((a, b) => (new Date(b.date) as any) - (new Date(a.date) as any))
}

const fetchBlogContents = async ({ limit, category }: FetchBlogContent) => {
  return await client.getEntries<BlogPostContent>({
    content_type: "blogPost",
    limit,
    "fields.category": category
  })
}

export const latestBlogPosts = async (pwops: FetchBlogContent & CTFImg) => {
  const { limit, img } = pwops

  const c = await fetchBlogContents({ limit })

  const posts = c.items.map((item) => {
    const { banner, category, content, description, overridePublishDate, slug, title } = item.fields
    const image = banner
      ? `https:${banner.fields.file.url}?fm=webp&q=${img?.quality || 75}&w=${img?.width || 854}&h=${img?.height || 480}`
      : ""

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

export const blogPostsByCategory = async ({ limit, category }: FetchBlogContent) => {
  const c = await fetchBlogContents({ limit, category })
}

export type BlogPostsReturnType = Awaited<
  ReturnType<typeof latestBlogPosts | typeof blogPostsByCategory>
>
