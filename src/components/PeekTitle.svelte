<script lang="ts">
  import observeDOM from "$lib/observe"
  import { isNavOpen, navTitle } from "$stores/index"
  import { onMount } from "svelte"

  export let title: string

  let titleRef: any

  onMount(() => {
    observeDOM(isNavOpen, titleRef, { rootMargin: "-4% 0% 0% 0%" })

    navTitle.set(title)
  })
</script>

<h1 {...$$props} bind:this={titleRef}>
  {title}
</h1>
