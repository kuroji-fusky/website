<script cript lang="ts">
  import { onMount } from "svelte"

  export let interactiveMode = false

  onMount(() => {})
</script>

<div class="sticky top-[4.25rem] bg-kuro-dark2 z-[2] pt-2 pb-4 mb-4 flex justify-between">
  {#if interactiveMode}
    <div
      class="flex gap-x-2 [&_button]:rounded-md items-center [&_button]:border [&_button]:px-3.5 [&_button]:py-1 [&_button]:text-sm"
    >
      <span class="opacity-50 font-normal mr-1">Filter by</span>
      <button>Category</button>
      <button>Tag</button>
      <button>Chronological</button>
    </div>
  {/if}
  <slot />
</div>
