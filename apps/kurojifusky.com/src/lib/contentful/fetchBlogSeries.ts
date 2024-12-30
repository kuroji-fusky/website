import { fetchContentEntries } from "./client"
import type { ctf, ReturnTypeFromAwaited } from "./types"

export type BlogSeriesContent = ctf.DefineModel<
  "blogSeries",
  {
    title: ctf.Fields.Text
    slug: ctf.Fields.Text
    description: ctf.Fields.RichText
  }
>

export const fetchBlogSeries = async () => {
  const entries = await fetchContentEntries<BlogSeriesContent>("blogSeries")

  const items = entries.items.map((item) => ({
    title: item.fields.title,
    slug: item.fields.slug,
    description: item.fields.description
  }))

  return items
}

export type BlogSeriesReturnType = ReturnTypeFromAwaited<typeof fetchBlogSeries>
