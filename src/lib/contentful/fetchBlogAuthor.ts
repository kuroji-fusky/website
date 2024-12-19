import { fetchContentEntries } from "./client"
import { parseMediaType } from "./parsers"
import type { ctf } from "./types"

export type BlogAuthorContent = ctf.DefineModel<
  "blogAuthor",
  {
    name: ctf.Fields.Text
    slug: ctf.Fields.Text
    avatar: ctf.Fields.Embed
  }
>

export const fetchBlogAuthor = async () => {
  const entries = await fetchContentEntries<BlogAuthorContent>("blogAuthor")

  return entries.items.map((item) => ({
    name: item.fields.name,
    slug: item.fields.slug,
    avatar: parseMediaType(item.fields.avatar)
  }))
}
