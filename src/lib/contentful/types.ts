import type { EntryFieldTypes } from "contentful"

export interface CTFImg {
  img?: {
    quality?: number
    width?: number
    height?: number
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
    banner: EntryFieldEmbed
  }
}

export interface DreamJournalContent {
  contentTypeId: "dreamJournal"
  fields: {
    title: EntryFieldTypes.Text
    excerpt: EntryFieldTypes.Text
    location: EntryFieldTypes.Text
    category: EntryFieldTypes.Array<EntryFieldTypes.Symbol>
    content: EntryFieldTypes.RichText
    slug: EntryFieldTypes.Text
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
