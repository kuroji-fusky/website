<script lang="ts">
  import { isSearchActive } from "$stores/index"
  import { navItems } from "./Navbar.constants"

  import ChevronDownIcon from "~icons/lucide/chevron-down?raw"
  import MenuIcon from "~icons/lucide/menu?raw"
  import SearchIcon from "~icons/lucide/search?raw"

  const focusOnSearchbox = () => {
    isSearchActive.toggleState()

    if ($isSearchActive) {
      setTimeout(() => {
        document.getElementById("global-search")!.focus()
      }, 200)
    }
  }
</script>

<div class="lg:flex hidden mr-1">
  {#each navItems as root}
    <div class="px-3.5 py-3 inline-flex items-center gap-x-1.5 flex-col">
      {#if root.link}
        <a href={root.link} class="inline-flex items-center gap-x-1.5">
          <span class="select-none">{root.text}</span>
          {#if root.subitems}
            <div class="chevron">
              {@html ChevronDownIcon}
            </div>
          {/if}
        </a>
        {#if root.subitems}
          <div data-dialog-portal-placeholder=""></div>
          <!-- <NavbarSubItem items={root.subitems} /> -->
        {/if}
      {:else}
        <div class="flex items-center gap-x-1.5">
          <span
            class="cursor-default md:group-hover/topnav:text-kuro-lavender-300 select-none"
            >{root.text}</span
          >
          {#if root.subitems}
            <div class="chevron">
              {@html ChevronDownIcon}
            </div>
          {/if}
        </div>
        {#if root.subitems}
          <div data-dialog-portal-placeholder=""></div>
          <!-- <NavbarSubItem items={root.subitems} /> -->
        {/if}
      {/if}
    </div>
  {/each}
</div>
<button class="px-3 py-3.5" on:click={focusOnSearchbox}>
  {@html SearchIcon}
</button>
<button class="lg:hidden block px-3.5 py-3.5">
  {@html MenuIcon}
</button>

<style lang="postcss">
  .chevron {
    @apply transform-gpu transition-transform opacity-60;
  }
</style>
