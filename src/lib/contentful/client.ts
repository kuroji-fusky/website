import contentful from "contentful"
import type { EntrySkeletonType } from "contentful"
import type { ContentEntries } from "./types"

const CTF_DOMAIN = ".contentful.com"
const DELIVERY = "cdn"
const PREVIEW = "preview"

const isDevelopment = import.meta.env.DEV

const client = contentful.createClient({
  space: import.meta.env.CONTENTFUL_SPACE_ID,
  accessToken: isDevelopment
    ? import.meta.env.CONTENTFUL_PREVIEW_TOKEN
    : import.meta.env.CONTENTFUL_DELIVERY_TOKEN,
  host: isDevelopment ? `${PREVIEW}${CTF_DOMAIN}` : `${DELIVERY}${CTF_DOMAIN}`
})

export const fetchContentEntries = async <Entry extends EntrySkeletonType>({
  limit,
  category
}: Omit<ContentEntries, "img">) => {
  return await client.getEntries<Entry>({
    content_type: "blogPost",
    limit,
    "fields.category": category
  } as unknown as Entry)
}
