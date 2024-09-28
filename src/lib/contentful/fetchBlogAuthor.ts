import type { EntryFieldTypes } from "contentful"

import { fetchContentEntries } from "./client"
import { parseMediaType } from "./parsers"
import type { DefineContentModel, EntryFieldEmbed } from "./types"

export type BlogAuthorContent = DefineContentModel<
  "blogAuthor",
  {
    name: EntryFieldTypes.Text
    displayName: EntryFieldTypes.Text
    slug: EntryFieldTypes.Text
    bio: EntryFieldTypes.RichText
    avatar: EntryFieldEmbed
  }
>

export const fetchBlogAuthor = async () => {
  const entries = await fetchContentEntries<BlogAuthorContent>("blogAuthor")

  return entries.items.map((item) => ({
    name: item.fields.name,
    displayName: item.fields.displayName,
    bio: item.fields.bio,
    slug: item.fields.slug,
    avatar: parseMediaType(item.fields.avatar)
  }))
}
