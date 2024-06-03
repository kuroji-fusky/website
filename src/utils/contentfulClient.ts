import contentful from "contentful"

const isDevelopment = process.env.NODE_ENV === "development"

const client = contentful.createClient({
  space: process.env.CONTENTFUL_SPACE_ID!,
  accessToken: isDevelopment
    ? process.env.CONTENTFUL_PREVIEW_TOKEN!
    : process.env.CONTENTFUL_DELIVERY_TOKEN!,
  host: isDevelopment ? "preview.contentful.com" : "cdn.contentful.com"
})

export default client
