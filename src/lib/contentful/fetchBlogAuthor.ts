import { fetchContentEntries } from "./client"
import { parseMediaType } from "./parsers/utils"
import type {
  AwaitedReturnType,
  ContentEntries,
  ContentfulFieldConstructor,
  EntryFieldEmbed,
  EntryFieldTypes
} from "./types"

export type BlogAuthorContent = ContentfulFieldConstructor<
  "blogAuthor",
  {
    name: EntryFieldTypes.Text
    displayName: EntryFieldTypes.Text
    slug: EntryFieldTypes.Text
    bio: EntryFieldTypes.RichText
    avatar: EntryFieldEmbed
  }
>

export const fetchBlogAuthor = async (pwops: ContentEntries) => {
  const { limit, category } = pwops

  const entries = await fetchContentEntries<BlogAuthorContent>("blogAuthor", {
    limit,
    category
  })

  const posts = entries.items.map((item) => {
    const { bio, displayName, slug, name, avatar } = item.fields

    return {
      name,
      displayName,
      bio,
      slug,
      avatar: parseMediaType(avatar)
    }
  })

  return posts
}

export type BlogAuthorReturnType = AwaitedReturnType<typeof fetchBlogAuthor>
