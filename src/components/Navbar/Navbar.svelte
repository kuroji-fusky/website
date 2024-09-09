<script lang="ts">
  import MenuIcon from "~icons/lucide/menu?raw"
  import SearchIcon from "~icons/lucide/search?raw"
  import LogoBrand from "~icons/kuro/logo-brand?raw"

  import NavbarTitle from "./NavbarTitle.svelte"
  import NavbarItemsDesktop from "./NavbarItemsDesktop.svelte"
</script>

<nav class="z-20 py-1.5 sticky top-0 bg-kuro-dark2">
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
      <NavbarItemsDesktop />
      <button class="px-3 py-3.5">
        {@html SearchIcon}
      </button>
      <button class="lg:hidden block px-3.5 py-3.5">
        {@html MenuIcon}
      </button>
    </div>
  </div>
</nav>
<div data-mobile-navigation=""></div>
