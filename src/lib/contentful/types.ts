import type { EntryFieldTypes } from "contentful"

export interface ContentEntries {
  limit?: number
  category?: string
}

export interface CTFImg {
  img?: {
    quality?: number
    width?: number
    height?: number
  }
}

export interface CustomInlineEntry {
  sys: {
    contentType: {
      sys: {
        id: string
      }
    }
  }
  fields: {
    url?: string
  }
}

type EntryFieldEmbed = EntryFieldTypes.Object<{
  fields: {
    file: {
      url: string
    }
  }
}>

export interface BlogPostContent {
  contentTypeId: "blogPost"
  fields: {
    title: EntryFieldTypes.Text
    description: EntryFieldTypes.Text
    category: EntryFieldTypes.Array<EntryFieldTypes.Symbol>
    content: EntryFieldTypes.RichText
    overridePublishDate: EntryFieldTypes.Date
    slug: EntryFieldTypes.Text
    isFeatured: EntryFieldTypes.Boolean
    banner: EntryFieldEmbed
  }
}

export interface TheVaultContent {
  contentTypeId: "theVault"
  fields: {
    title: EntryFieldTypes.Text
    excerpt: EntryFieldTypes.Text
    content: EntryFieldTypes.RichText
  }
}
