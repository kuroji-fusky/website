import { writable } from "svelte/store"

export const navTitle = writable<string>("")
export const isTitleShown = writable<boolean>(false)
