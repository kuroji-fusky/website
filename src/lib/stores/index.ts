import { writable } from "svelte/store"

export const globalNavTitle = writable<string>("")
export const globalNavShow = writable<boolean>(false)
