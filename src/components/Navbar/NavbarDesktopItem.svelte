<script lang="ts">
  import ChevronDownIcon from "~icons/lucide/chevron-down?raw"
  import type { navItems } from "./Navbar.constants"

  export let link: string = ""
  export let subitems: (typeof navItems)[number]["subitems"]
  export let text: string
</script>

{#if link}
  <a href={link} class="hidden lg:inline-flex items-center gap-x-1.5">
    <span class="select-none">{text}</span>
    {#if subitems}
      <div class="transform-gpu transition-transform opacity-60">
        {@html ChevronDownIcon}
      </div>
    {/if}
  </a>
{:else}
  <span class="hidden lg:inline-flex items-center gap-x-1.5">
    <span class="cursor-default select-none">{text}</span>
    {#if subitems}
      <div class="transform-gpu transition-transform opacity-60">
        {@html ChevronDownIcon}
      </div>
    {/if}
  </span>
{/if}
