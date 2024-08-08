import type { Writable } from "svelte/store"

/** Wrapper for `IntersectionObserver.isIntersecting` */
const observeDOM = (store: Writable<boolean>, target: Element) => {
  const sheesh = new IntersectionObserver(([entry]) => {
    store.set(!entry.isIntersecting)
  })

  sheesh.observe(target)
}

export default observeDOM
