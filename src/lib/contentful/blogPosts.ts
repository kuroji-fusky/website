import { client } from "./contentfulClient"
import type { BlogPostContent } from "./types"

interface FetchBlogContent {
  limit?: number
  category?: string
}

const fetchBlogContents = async ({ limit, category }: FetchBlogContent) => {
  return await client.getEntries<BlogPostContent>({
    content_type: "blogPost",
    limit,
    "fields.category": category
  })
}

export const latestBlogPosts = async ({ limit }: FetchBlogContent) => {
  const c = await fetchBlogContents({ limit })

  return c.items.map((item) => {
    const { banner, category, content, description, overridePublishDate, slug, title } = item.fields
    const image = banner ? `https:${banner.fields.file.url}?fm=webp&q=75&w=854&h=480` : ""

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
}

export const blogpostsByCategory = async ({ limit, category }: FetchBlogContent) => {
  const c = await fetchBlogContents({ limit, category })
}

export const fetchCurrentPage = async ({}: any) => {
  const c = await fetchBlogContents({})
}
