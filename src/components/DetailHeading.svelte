<script lang="ts">
  import { onMount } from "svelte"
  import observeDOM from "$lib/observe"
  import { globalNavShow, globalNavTitle } from "$stores/index"

  export let title: string
  export let description: string

  let headingTitleRef: HTMLHeadElement

  onMount(() => {
    observeDOM(globalNavShow, headingTitleRef, { rootMargin: "-4% 0% 0% 0%" })

    globalNavTitle.set(title)
  })
</script>

<header
  class="padding-width-responsive pt-2.5 pb-3.5 my-3 max-w-screen-2xl mx-auto"
>
  <div class="flex justify-between items-center">
    <div>
      <div class="empty:hidden">
        <slot name="breadcrumbs" />
      </div>
      <h1 class="text-4xl font-extrabold mb-2.5" bind:this={headingTitleRef}>
        {title}
      </h1>
      <p class="opacity-75">{description}</p>
    </div>
    <slot />
  </div>
</header>
