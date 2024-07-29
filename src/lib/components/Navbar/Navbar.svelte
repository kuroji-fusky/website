<script lang="ts">
  import { onMount } from "svelte"
  import NavbarSubItem from "./NavbarSubItem.svelte"
  import { navItems } from "./Navbar.constants"

  import MenuIcon from "~icons/lucide/menu?raw"
  import ChevronDownIcon from "~icons/lucide/chevron-down?raw"
  import LogoBrand from "~icons/kuro/logo-brand?raw"

  let isNavExpanded = false

  const handleMobileThingy = () => {
    const isViewportMobile = window.matchMedia("(max-width: 768px)").matches

    if (isViewportMobile && !isNavExpanded) isNavExpanded = true
    if (!isViewportMobile && isNavExpanded) isNavExpanded = false
  }

  onMount(() => {
    handleMobileThingy()
    window.addEventListener("resize", handleMobileThingy)
  })
</script>

<nav class="z-10 py-2 sticky top-0 bg-kuro-dark2">
  <div class="mx-auto flex justify-between items-center px-8 max-w-screen-2xl">
    <div class="flex items-center gap-x-2">
      <a href="/" title="Home page">
        <div class="h-[1.825rem]">
          {@html LogoBrand}
        </div>
      </a>
    </div>
    <div class="flex">
      <button
        class="md:hidden block px-3.5 py-3.5 hover:text-kuro-lavender-400"
        on:click={() => (isNavExpanded = !isNavExpanded)}
      >
        {@html MenuIcon}
      </button>
      <div
        class="flex flex-col absolute top-14 inset-x-0 h-screen bg-kuro-dark2 md:relative md:contents *:px-3.5 *:py-3.5 *:inline-flex *:items-center *:gap-x-1.5 *:relative"
        style="visibility: {isNavExpanded ? 'hidden' : 'visible'};"
      >
        {#each navItems as root}
          <div class="group/items group/topnav flex flex-col !items-start">
            {#if root.link}
              <a href={root.link} class="inline-flex items-center gap-x-1.5">
                <span class="md:group-hover/topnav:text-kuro-lavender-300 select-none"
                  >{root.text}</span
                >
              </a>
              {#if root.subitems}
                <NavbarSubItem items={root.subitems} />
              {/if}
            {:else}
              <div class="flex items-center gap-x-1.5">
                <span
                  class="cursor-default md:group-hover/topnav:text-kuro-lavender-300 select-none"
                  >{root.text}</span
                >
                {#if root.subitems}
                  <span class="md:group-hover/topnav:rotate-180 transform-gpu transition-transform">
                    {@html ChevronDownIcon}
                  </span>
                {/if}
              </div>
              {#if root.subitems}
                <NavbarSubItem items={root.subitems} />
              {/if}
            {/if}
          </div>
        {/each}
      </div>
    </div>
  </div>
</nav>
