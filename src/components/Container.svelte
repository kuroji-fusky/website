<script lang="ts">
  import { isSearchActive } from "./Navbar/Navbar.store"
  import Navbar from "./Navbar/Navbar.svelte"
</script>

<Navbar />
<div
  class={`transition-[filter,opacity] ${
    $isSearchActive ? "blur-sm opacity-25" : ""
  }`}
>
  {#if $isSearchActive}
    <div
      class="absolute inset-0 z-[3]"
      on:click={isSearchActive.toggleState}
      aria-hidden
    />
  {/if}
  <slot />
</div>
