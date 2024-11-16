import { fetchContentEntries } from "./client"
import { parseMediaType } from "./parsers"
import type { ctf } from "./types"

export type BlogAuthorContent = ctf.DefineModel<
  "blogAuthor",
  {
    name: ctf.Fields.Text
    displayName: ctf.Fields.Text
    slug: ctf.Fields.Text
    bio: ctf.Fields.RichText
    avatar: ctf.Fields.Embed
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
