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

export const latestPosts = async ({ limit }: FetchBlogContent) => {
  const c = await fetchBlogContents({ limit })
}

export const postsByCategory = async ({ limit, category }: FetchBlogContent) => {
  const c = await fetchBlogContents({ limit, category })
}

export const fetchCurrentPage = async ({}: any) => {
  const c = await fetchBlogContents({})
}
