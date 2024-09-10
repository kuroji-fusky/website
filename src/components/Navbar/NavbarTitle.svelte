<script lang="ts">
  import { globalNavShow, globalNavTitle } from "$stores/index"
  import { fly } from "svelte/transition"
</script>

{#if $globalNavTitle && $globalNavShow}
  <span
    transition:fly={{ duration: 200, y: 10 }}
    class="font-semibold text-xl select-none truncate text-white"
  >
    {$globalNavTitle}
  </span>
{/if}
