import type { EntryFieldTypes } from "contentful"
import { fetchContentEntries } from "./client"
import type { DefineContentModel, ReturnTypeFromAwaited } from "./types"

type TheVaultContent = DefineContentModel<
  "theVault",
  {
    title: EntryFieldTypes.Text
    excerpt: EntryFieldTypes.Text
    content: EntryFieldTypes.RichText
  }
>

export const fetchVaultEntries = async () => {
  const entries = await fetchContentEntries<TheVaultContent>("theVault")

  return entries
}

export type VaultContentReturnType = ReturnTypeFromAwaited<typeof fetchContentEntries>
