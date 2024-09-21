<script lang="ts">
  import { navItems } from "./Navbar.constants"
  import NavbarSubitemMobileButton from "./NavbarSubitemMobileButton.svelte"

  export let link: string = ""
  export let text: string
  export let subitems: (typeof navItems)[number]["subitems"]
</script>

{#if subitems}
  <NavbarSubitemMobileButton {subitems} {text} />
{:else}
  <a
    href={link}
    class="px-3.5 flex items-center w-full lg:hidden py-2.5 text-lg font-semibold"
  >
    {text}
  </a>
{/if}
