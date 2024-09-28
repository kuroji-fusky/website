import type { EntryFieldTypes } from "contentful"
import { fetchContentEntries } from "./client"
import type { DefineContentModel, ReturnTypeFromAwaited } from "./types"

export type BlogSeriesContent = DefineContentModel<
  "blogSeries",
  {
    title: EntryFieldTypes.Text
    slug: EntryFieldTypes.Text
    description: EntryFieldTypes.RichText
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
