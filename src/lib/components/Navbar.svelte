<script lang="ts">
  import { navItems } from "./Navbar.constants"
  import NavbarSubItem from "./NavbarSubItem.svelte"
  import { ChevronDown, MenuIcon, RssIcon, SearchIcon } from "lucide-svelte"

  export let pathCrumbs = ""
</script>

<nav class="z-10 py-2 sticky top-0 bg-kuro-dark2">
  <div class="mx-auto flex justify-between items-center px-8 max-w-screen-2xl">
    <div id="breadcrumbs">
      <a href="/">
        <span class="sr-only" translate="no">Kuro logo</span>
        <span aria-hidden="true">Logo</span>
      </a>
      <span>{pathCrumbs}</span>
    </div>
    <div class="flex *:px-3.5 *:py-3.5 *:inline-flex *:items-center *:gap-x-1.5 *:relative">
      <button class="lg:hidden block">
        <MenuIcon size={19} />
      </button>
      {#each navItems as root}
        <div class="group/items group/topnav">
          {#if root.link}
            <a href={root.link} class="inline-flex items-center gap-x-1.5">
              <span class="group-hover/topnav:text-kuro-lavender-300">{root.text}</span>
              {#if root.subitems}
                <ChevronDown
                  size={19}
                  class="group-hover/topnav:rotate-180 transform-gpu transition-transform"
                />
              {/if}
            </a>
            {#if root.subitems}
              <NavbarSubItem items={root.subitems} />
            {/if}
          {:else}
            <span class="cursor-default group-hover/topnav:text-kuro-lavender-300">{root.text}</span
            >
            {#if root.subitems}
              <ChevronDown
                size={19}
                class="group-hover/topnav:rotate-180 transform-gpu transition-transform"
              />
            {/if}
            {#if root.subitems}
              <NavbarSubItem items={root.subitems} />
            {/if}
          {/if}
        </div>
      {/each}
      <button class="hover:text-kuro-lavender-400">
        <SearchIcon size={19} />
      </button>
      <a href="/rss.xml" class="lg:block hidden hover:text-kuro-lavender-400">
        <RssIcon size={19} class="translate-y-1" />
      </a>
    </div>
  </div>
</nav>
