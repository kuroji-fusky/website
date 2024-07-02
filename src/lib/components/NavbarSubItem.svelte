<script lang="ts">
  import type { NavItem } from "./Navbar.types"

  export let items: NavItem[]
</script>

<div
  class="pt-4 absolute left-1 top-10 pointer-events-none opacity-0 transition-opacity transform-gpu group-hover/items:opacity-100 group-hover/items:pointer-events-auto"
>
  <div
    class="flex flex-col gap-y-5 rounded-md bg-kuro-dark2 border border-kuro-violet-700 px-4 py-5 w-80"
  >
    {#each items as si}
      <a href={si.link} class="flex items-center gap-x-3.5 group">
        <div class="size-12 rounded-lg bg-kuro-violet-400 flex-shrink-0" />
        <div class="flex flex-col gap-y-0.5">
          <div class="group-hover:text-kuro-violet-200 text-nowrap font-semibold">{si.text}</div>
          <p class="text-sm opacity-60 leading-5">{si.excerpt}</p>
        </div>
      </a>
    {/each}
  </div>
</div>
