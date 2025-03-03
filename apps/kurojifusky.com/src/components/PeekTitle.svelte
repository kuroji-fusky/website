<script lang="ts">
  import { observeDOM } from "$lib/utils"
  import { isTitleShown, navTitle } from "$stores/index"
  import { onMount } from "svelte"

  export let title: string

  let titleRef: HTMLHeadingElement

  onMount(() => {
    observeDOM(isTitleShown, titleRef, { rootMargin: "-4% 0% 0% 0%" })

    navTitle.set(title)
  })
</script>

<h1 {...$$props} bind:this={titleRef}>
  {title}
</h1>
