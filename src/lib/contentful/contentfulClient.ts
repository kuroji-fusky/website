import contentful from "contentful"
import type { EntrySkeletonType } from "contentful"
import type { ContentEntries } from "./types"

const isDevelopment = import.meta.env.DEV

const client = contentful.createClient({
  space: import.meta.env.CONTENTFUL_SPACE_ID,
  accessToken: isDevelopment
    ? import.meta.env.CONTENTFUL_PREVIEW_TOKEN
    : import.meta.env.CONTENTFUL_DELIVERY_TOKEN,
  host: isDevelopment ? "preview.contentful.com" : "cdn.contentful.com"
})

export const fetchContentEntries = async <Entry extends EntrySkeletonType>({
  limit,
  category
}: ContentEntries) => {
  return await client.getEntries<Entry>({
    content_type: "blogPost",
    limit,
    "fields.category": category
  } as unknown as Entry)
}
