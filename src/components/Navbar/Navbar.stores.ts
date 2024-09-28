import { togglerStore } from "$stores/togglerStore"

export const isMobileNavOpen = togglerStore(false)

// TODO add a modal state to track with from other states too
export const isSearchActive = togglerStore(false)
