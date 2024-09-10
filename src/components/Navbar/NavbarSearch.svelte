<script lang="ts">
  import SearchIcon from "~icons/lucide/search?raw"

  import { isSearchActive } from "./Navbar.store"
  import { fly } from "svelte/transition"
</script>

{#if $isSearchActive}
  <div
    transition:fly={{ duration: 200, y: -3 }}
    class="absolute inset-x-0 mx-auto max-w-screen-lg w-full"
  >
    <div class="mt-4 py-5 px-8 w-full">
      <div class="relative">
        <span
          class="absolute h-full left-0 inset-y-0 [&_svg]:size-5 flex items-center pointer-events-none"
        >
          {@html SearchIcon}
        </span>
        <input
          id="global-search"
          type="text"
          placeholder="Search"
          class="pl-8 bg-transparent focus:outline-none text-2xl w-full"
          on:keydown={(e) => {
            if (e.key === "Escape") isSearchActive.toggleState()
          }}
        />
      </div>
    </div>
    <div></div>
  </div>
{/if}
