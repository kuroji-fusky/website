import { writable } from "svelte/store"

const togglerStore = (state: boolean) => {
  const { subscribe, update } = writable(state)

  const toggleState = () => update((prevState) => (prevState = !prevState))

  return { subscribe, toggleState }
}

// TODO add a modal state to track with from other states too
export const isSearchActive = togglerStore(false)
