import * as contentful from "contentful"
import type { ctf } from "./types"

const CTF_DOMAIN = ".contentful.com"
const DELIVERY = "cdn"
const PREVIEW = "preview"

const isDevelopment = import.meta.env.DEV

const client = contentful.createClient({
  space: import.meta.env.CONTENTFUL_SPACE_ID,
  accessToken: isDevelopment
    ? import.meta.env.CONTENTFUL_PREVIEW_TOKEN
    : import.meta.env.CONTENTFUL_DELIVERY_TOKEN,
  host: isDevelopment ? `${PREVIEW}${CTF_DOMAIN}` : `${DELIVERY}${CTF_DOMAIN}`,
  insecure: false
})

export const fetchContentEntries = async <E extends ctf.Skeleton>(
  id: E["contentTypeId"],
  query?: ctf.Queries<E>
) => await client.getEntries<E>({ content_type: id, ...query })
