import { writable } from "svelte/store"

export const togglerStore = (state: boolean) => {
  const { subscribe, update } = writable(state)

  const toggleState = () => update((prevState) => (prevState = !prevState))

  return { subscribe, toggleState }
}
