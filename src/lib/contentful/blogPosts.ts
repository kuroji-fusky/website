import { client } from "./contentfulClient"
import type { BlogPostContent } from "./types"

interface FetchBlogContent {
  limit?: number
  category?: string
}

interface CTFImg {
  quality?: number
  width?: number
  height?: number
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

export const latestBlogPosts = async ({
  limit,
  width,
  height,
  quality
}: FetchBlogContent & CTFImg) => {
  const c = await fetchBlogContents({ limit })

  const posts = c.items.map((item) => {
    const { banner, category, content, description, overridePublishDate, slug, title } = item.fields
    const image = banner
      ? `https:${banner.fields.file.url}?fm=webp&q=${quality || 75}&w=${width || 854}&h=${height || 480}`
      : ""

    const datePublished = overridePublishDate ? overridePublishDate : item.sys.createdAt

    return {
      title,
      slug,
      description,
      category,
      content,
      banner: image,
      date: datePublished,
      _tags: item.metadata.tags
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
