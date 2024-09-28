<script lang="ts">
  import { onMount } from "svelte"
  import { fly } from "svelte/transition"
  import { navItems } from "./Navbar.constants"

  import { cn } from "$lib/utils"
  import { KuroEventDispatchMulti } from "$lib/utils"

  import SearchIcon from "~icons/lucide/search?raw"
  import MenuIcon from "~icons/lucide/menu?raw"

  import { isSearchActive, isMobileNavOpen } from "./Navbar.stores"
  import NavbarDesktopItem from "./NavbarDesktopItem.svelte"
  import NavbarMobileItem from "./NavbarMobileItem.svelte"
  import Backdrop from "$components/Backdrop.svelte"

  let navItemRef: HTMLDivElement

  // Desktop
  let isNavItemRootHover = false
  let navItemActiveIndex: number | null = null

  // Mobile
  let isLayoutMobile = false

  onMount(() => {
    document.body.style.overflowY = isNavItemRootHover ? "hidden" : "visible"

    // For handling desktop subitems
    const navItemsRoot = Array.from(navItemRef.children)

    navItemsRoot.forEach((navItem, i) => {
      const changeItemIndex = () => {
        if (!isLayoutMobile) {
          const currentNavItemIndex = navItems[i]

          console.log(currentNavItemIndex.subitems)
          return
        }
      }

      navItem.addEventListener("mouseenter", changeItemIndex)
      return () => {
        navItem.removeEventListener("mouseenter", changeItemIndex)
      }
    })

    // Handling hover states
    const navHoverTrue = () => {
      if (!isLayoutMobile) isNavItemRootHover = true
    }
    const navHoverFalse = () => {
      if (!isLayoutMobile) isNavItemRootHover = false
    }

    const handleLeaveEvents = new KuroEventDispatchMulti(navItemRef, [
      "mouseleave",
      "blur"
    ])

    navItemRef.addEventListener("mouseenter", navHoverTrue)

    handleLeaveEvents.fire(navHoverFalse)

    const handleMobileResize = () => {
      isLayoutMobile = !window.matchMedia("(min-width: 1024px)").matches

      if (!isLayoutMobile && $isMobileNavOpen) {
        isMobileNavOpen.toggleState()
        return
      }
    }

    const resizeMobileEvent = new KuroEventDispatchMulti(window, ["resize"])

    resizeMobileEvent.fire(handleMobileResize, true)

    return () => {
      navItemRef.removeEventListener("mouseenter", navHoverTrue)

      resizeMobileEvent.clean(handleMobileResize)
      handleLeaveEvents.clean(navHoverFalse)
    }
  })

  // For handling both mobile and desktop layouts
  const handleMobileMenu = () => {
    if (isLayoutMobile) isMobileNavOpen.toggleState()
    return
  }

  // Search button
  const focusOnSearchbox = () => {
    isSearchActive.toggleState()

    if ($isSearchActive) {
      setTimeout(() => {
        document.getElementById("global-search")!.focus()
      }, 300)
    }
  }
</script>

<div
  bind:this={navItemRef}
  class={cn(
    "z-10 bg-kuro-dark2 bottom-0 w-full top-14 left-0 absolute flex flex-col mr-0",
    "lg:transition-[opacity] lg:duration-200 lg:w-auto lg:top-0 lg:relative lg:flex-row lg:mr-1 lg:opacity-100 lg:pointer-events-auto",
    $isSearchActive ? "lg:!opacity-30 lg:!pointer-events-none" : ""
  )}
  inert={$isSearchActive ? true : null}
>
  {#each navItems as { link, text, subitems }, index}
    <div
      class="px-3.5 py-0 lg:py-3 lg:inline-flex items-center gap-x-1.5 flex-col"
    >
      <NavbarDesktopItem {link} {text} {subitems} />
      {#if $isMobileNavOpen}
        <div
          id="transition-wrapper"
          transition:fly={{ y: -15, delay: index * 50 }}
          class="hover:[&_:is(button,a)]:bg-kuro-lavender-100/25 [&_:is(button,a)]:rounded-md"
        >
          <NavbarMobileItem {link} {text} {subitems} />
        </div>
      {/if}
    </div>
  {/each}
  {#if isNavItemRootHover}
    <div class="absolute top-10">
      <div class="mt-2 p-2 rounded-md bg-purple-950">lmao</div>
    </div>
  {/if}
</div>
<button
  class={cn("px-3 py-3.5", $isMobileNavOpen && "hidden")}
  on:click={focusOnSearchbox}
>
  {@html SearchIcon}
</button>
<button class="lg:hidden block px-3.5 py-3.5" on:click={handleMobileMenu}>
  {@html MenuIcon}
</button>

<Backdrop
  state={$isMobileNavOpen}
  class="fixed z-10 inset-x-0 top-12 bottom-0 bg-kuro-dark2/80 h-full backdrop-blur-sm"
/>
