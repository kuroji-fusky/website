import contentful, {
  type EntriesQueries as Queries,
  type EntrySkeletonType
} from "contentful"

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

export const fetchContentEntries = async <E extends EntrySkeletonType>(
  id: E["contentTypeId"],
  query?: Queries<E, undefined>
) => await client.getEntries<E>({ content_type: id, ...query })
