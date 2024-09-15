<script lang="ts">
  import { isSearchActive } from "$stores/index"
  import { onMount } from "svelte"
  import { navItems } from "./Navbar.constants"
  import { KuroDispatchMulti } from "../../lib/clientUtils"

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

  let navItemRef: HTMLDivElement

  let isMobileNavExpanded = false

  let isNavItemRootHover = false
  let currentItemIndex = 0

  onMount(() => {
    const navItemsRoot = Array.from(navItemRef.children)

    navItemsRoot.forEach((navItem, i) => {
      const addMouseMoveListener = () => (currentItemIndex = i)

      navItem.addEventListener("mouseenter", addMouseMoveListener)
      return () => {
        navItem.removeEventListener("mouseenter", addMouseMoveListener)
      }
    })

    const navHoverTrue = () => (isNavItemRootHover = true)
    const navHoverFalse = () => (isNavItemRootHover = false)

    const handleLeaveEvents = new KuroDispatchMulti(navItemRef, [
      "mouseleave",
      "blur"
    ])

    navItemRef.addEventListener("mouseenter", navHoverTrue)
    handleLeaveEvents.fire(navHoverFalse)

    return () => {
      navItemRef.removeEventListener("mouseenter", navHoverTrue)
      handleLeaveEvents.clean(navHoverFalse)
    }
  })
</script>

<div bind:this={navItemRef} class="lg:flex hidden mr-1">
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
      {:else}
        <div class="flex items-center gap-x-1.5">
          <span class="cursor-default select-none">{root.text}</span>
          {#if root.subitems}
            <div class="chevron">
              {@html ChevronDownIcon}
            </div>
          {/if}
        </div>
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
