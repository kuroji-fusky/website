import contentful from "contentful"

const isDevelopment = import.meta.env.DEV

export const client = contentful.createClient({
  space: import.meta.env.CONTENTFUL_SPACE_ID,
  accessToken: isDevelopment
    ? import.meta.env.CONTENTFUL_PREVIEW_TOKEN
    : import.meta.env.CONTENTFUL_DELIVERY_TOKEN,
  host: isDevelopment ? "preview.contentful.com" : "cdn.contentful.com"
})
