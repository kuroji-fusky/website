import { fetchContentEntries } from "./client"
import type {
  AwaitedReturnType,
  ContentEntries,
  ContentfulFieldConstructor,
  EntryFieldTypes
} from "./types"

export type BlogSeriesContent = ContentfulFieldConstructor<
  "blogSeries",
  {
    title: EntryFieldTypes.Text
    slug: EntryFieldTypes.Text
    description: EntryFieldTypes.RichText
  }
>

export const fetchBlogSeries = async (pwops: ContentEntries) => {
  const { limit, category } = pwops

  const entries = await fetchContentEntries<BlogSeriesContent>({
    limit,
    category
  })

  return entries
}

export type BlogSeriesReturnType = AwaitedReturnType<typeof fetchBlogSeries>
