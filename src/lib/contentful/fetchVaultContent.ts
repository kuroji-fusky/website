import { fetchContentEntries } from "./client"
import type { ctf, ReturnTypeFromAwaited } from "./types"

type TheVaultContent = ctf.DefineModel<
  "theVault",
  {
    title: ctf.Fields.Text
    excerpt: ctf.Fields.Text
    content: ctf.Fields.RichText
  }
>

export const fetchVaultEntries = async () => {
  const entries = await fetchContentEntries<TheVaultContent>("theVault")

  return entries
}

export type VaultContentReturnType = ReturnTypeFromAwaited<typeof fetchContentEntries>
