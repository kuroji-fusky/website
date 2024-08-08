<script cript lang="ts">
  import { onMount } from "svelte"

  export let interactiveMode = false

  const filterOptions = ["Category", "Tag", "Chronological"] as const

  type LiteralFilterOpts = (typeof filterOptions)[number] | ""

  let activeItem: LiteralFilterOpts = ""

  onMount(() => {})
</script>

<div
  class="sticky top-[3.75rem] lg:top-[4.25rem] bg-kuro-dark2 z-[2] pt-2 pb-4 mb-4 flex justify-between"
>
  {#if interactiveMode}
    <div
      class="flex gap-x-2 items-center [&_button]:rounded-md [&_button]:px-3.5 [&_button]:py-1 [&_button]:text-sm"
    >
      <span class="opacity-50 font-normal mr-1">Filter by</span>
      {#each filterOptions as filterItem}
        <button class="bg-kuro-lavender-900 hover:bg-kuro-lavender-800">{filterItem}</button>
      {/each}
    </div>
  {/if}
  <slot />
</div>
