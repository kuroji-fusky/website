<script lang="ts">
  import MenuIcon from "~icons/lucide/menu?raw"
  import LogoBrand from "~icons/kuro/logo-brand?raw"
  import SearchIcon from "~icons/lucide/search?raw"

  import NavbarTitle from "./NavbarTitle.svelte"
  import NavbarItemsDesktop from "./NavbarItemsDesktop.svelte"
</script>

<nav class="z-10 py-1.5 sticky top-0 bg-kuro-dark2">
  <div
    class="padding-width-responsive mx-auto flex items-center max-w-screen-2xl"
  >
    <div class="flex flex-1 items-center w-min gap-x-2 min-w-0">
      <a href="/" title="Home page" class="py-2 pr-1 flex-shrink-0">
        <div style="height: 1.625rem">
          {@html LogoBrand}
        </div>
      </a>
      <NavbarTitle />
    </div>
    <div class="flex relative flex-shrink-0">
      <button class="lg:hidden block px-3.5 py-3.5">
        {@html MenuIcon}
      </button>
      <NavbarItemsDesktop />
      <button class="px-3 py-3.5">
        {@html SearchIcon}
      </button>
    </div>
  </div>
</nav>
