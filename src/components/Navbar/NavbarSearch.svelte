<script lang="ts">
  import SearchIcon from "~icons/lucide/search?raw"
  import XClearIcon from "~icons/lucide/x?raw"

  import { isSearchActive } from "./Navbar.store"
  import { fly, fade } from "svelte/transition"
  import { cubicOut } from "svelte/easing"

  let hasInputContent = false
  let currentFunnies: string

  const funnies = [
    "Search on Kuro's stash",
    "Search on Kuro's stash",
    "Search on Kuro's stash",
    "Search on Kuro's stash",
    "OwO",
    "Search on Kuro's stash",
    "Search on Kuro's stash",
    "Search on Kuro's stash",
    "Hey there, cutie~"
  ]

  $: $isSearchActive, updateFunnies()

  const updateFunnies = () => {
    if ($isSearchActive) {
      currentFunnies = funnies[Math.floor(Math.random() * funnies.length)]
      return
    }

    hasInputContent = false
    return
  }

  const toggleKeyboardState = (e: KeyboardEvent) => {
    if (e.key === "Escape") {
      isSearchActive.toggleState()
      return
    }
  }

  const handleHasInput = (e: Event) => {
    hasInputContent = Boolean((e.target as HTMLInputElement).value)
  }

  const clearInputValue = () => {
    const searchInput = document.getElementById(
      "global-search"
    ) as HTMLInputElement

    searchInput.value = ""
    hasInputContent = false

    searchInput.focus()
  }
</script>

{#if $isSearchActive}
  <div
    transition:fly={{ duration: 200, y: -8, easing: cubicOut }}
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
          placeholder={currentFunnies}
          class="pl-8 bg-transparent focus:outline-none text-2xl w-full"
          on:keydown={toggleKeyboardState}
          on:input={handleHasInput}
        />
        {#if hasInputContent}
          <button
            transition:fade={{ duration: 150 }}
            class="p-2 absolute h-full right-0 inset-y-0 [&_svg]:size-5 flex items-center"
            on:click={clearInputValue}
          >
            {@html XClearIcon}
          </button>
        {/if}
      </div>
    </div>
    <div></div>
  </div>
{/if}
