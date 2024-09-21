<script lang="ts">
  import { fade } from "svelte/transition"
  import type { MouseEventHandler } from "svelte/elements"

  import cn from "$lib/cn"

  import Portal from "./Portal.svelte"

  export let state: boolean
  export let onClick: MouseEventHandler<EventTarget> = () => {}
  let className: string = ""
  export { className as class }
</script>

{#if state}
  <Portal>
    <div
      transition:fade={{ duration: 150 }}
      aria-hidden
      class={cn(
        "fixed inset-0 bg-kuro-dark2/80 backdrop-blur-sm z-[15]",
        className
      )}
      on:click={onClick}
    />
  </Portal>
{/if}
