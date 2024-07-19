<script setup lang="ts">
  import type { NavItem } from "./Navbar.types"

  export let items: NavItem[]
</script>

<div
  class="pt-4 contents md:block md:absolute md:left-1 md:top-10 pointer-events-none opacity-0 transition-opacity transform-gpu group-hover/items:opacity-100 group-hover/items:pointer-events-auto"
>
  <div
    class="flex flex-col gap-y-5 md:rounded-md bg-kuro-dark2 md:border md:border-kuro-violet-700 md:px-4 py-5 md:w-80"
  >
    {#each items as subItem}
      <a href={subItem.link} class="flex items-center gap-x-3.5 group">
        <div class="size-12 rounded-lg bg-kuro-violet-400 flex-shrink-0" />
        <div class="flex flex-col gap-y-0.5">
          <div class="group-hover:text-kuro-violet-200 text-nowrap font-semibold">
            {subItem.text}
          </div>
          <p class="text-sm opacity-60 leading-5">{subItem.excerpt}</p>
        </div>
      </a>
    {/each}
  </div>
</div>
