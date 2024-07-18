import { fetchContentEntries } from "./client"
import type { AwaitedReturnType, ContentEntries, EntryFieldTypes } from "./types"

export interface TheVaultContent {
  contentTypeId: "theVault"
  fields: {
    title: EntryFieldTypes.Text
    excerpt: EntryFieldTypes.Text
    content: EntryFieldTypes.RichText
  }
}

export const fetchVaultEntries = async (pwops: ContentEntries) => {
  const { limit, category } = pwops

  const entries = await fetchContentEntries<TheVaultContent>({ limit, category })

  return entries
}

export type VaultContentReturnType = AwaitedReturnType<typeof fetchContentEntries>
