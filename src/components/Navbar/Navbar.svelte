<script lang="ts">
  import MenuIcon from "~icons/lucide/menu?raw"
  import SearchIcon from "~icons/lucide/search?raw"
  import LogoBrand from "~icons/kuro/logo-brand?raw"

  import { isSearchActive } from "./Navbar.store"
  import NavbarTitle from "./NavbarTitle.svelte"
  import NavbarItems from "./NavbarItems.svelte"
  import NavbarSearch from "./NavbarSearch.svelte"

  const focusOnSearchbox = () => {
    isSearchActive.toggleState()

    if ($isSearchActive) {
      setTimeout(() => {
        document.getElementById("global-search")!.focus()
      }, 200)
    }
  }
</script>

<div class="z-20 sticky top-0">
  <nav class="py-1.5 bg-kuro-dark2">
    <div
      class="padding-width-responsive mx-auto flex items-center max-w-screen-2xl"
    >
      <div class="flex flex-1 items-center gap-x-2 min-w-0">
        <a href="/" title="Home page" class="py-2 pr-1 flex-shrink-0">
          <div style="height: 1.675rem">
            {@html LogoBrand}
          </div>
        </a>
        <NavbarTitle />
      </div>
      <div class="flex relative flex-shrink-0">
        <NavbarItems />
        <button class="px-3 py-3.5" on:click={focusOnSearchbox}>
          {@html SearchIcon}
        </button>
        <button class="lg:hidden block px-3.5 py-3.5">
          {@html MenuIcon}
        </button>
      </div>
    </div>
  </nav>
  <NavbarSearch />
</div>
