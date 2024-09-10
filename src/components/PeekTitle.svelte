<script lang="ts">
  import observeDOM from "$lib/observe"
  import { globalNavShow, globalNavTitle } from "$stores/index"
  import { onMount } from "svelte"

  export let title: string

  let titleRef: any

  onMount(() => {
    observeDOM(globalNavShow, titleRef, { rootMargin: "-4% 0% 0% 0%" })

    globalNavTitle.set(title)
  })
</script>

<h1 {...$$props} bind:this={titleRef}>
  {title}
</h1>
