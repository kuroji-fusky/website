import { fetchContentEntries } from "./client"
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
    slug: EntryFieldTypes.Text
    description: EntryFieldTypes.Text
    avatar: EntryFieldEmbed
  }
>

export const fetchBlogAuthor = async (pwops: ContentEntries) => {
  const { limit, category } = pwops

  const entries = await fetchContentEntries<BlogAuthorContent>({
    limit,
    category
  })

  const posts = entries.items.map((item) => {
    const { description, slug, name, avatar } = item.fields

    return {
      name,
      description,
      slug,
      avatar: `https:${avatar.fields.file.url}`
    }
  })

  return posts
}

export type BlogAuthorReturnType = AwaitedReturnType<typeof fetchBlogAuthor>
