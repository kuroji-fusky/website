import type { Writable } from "svelte/store"

/** Wrapper for `IntersectionObserver.isIntersecting` */
export const observeDOM = (
  store: Writable<boolean>,
  target: Element,
  options?: IntersectionObserverInit
) => {
  const sheesh = new IntersectionObserver(([entry]) => {
    store.set(!entry.isIntersecting)
  }, options)

  sheesh.observe(target)
}
