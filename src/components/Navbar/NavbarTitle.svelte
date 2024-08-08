<script lang="ts">
  import { globalNavShow, globalNavTitle } from "$stores/index"
  import { fly } from "svelte/transition"
</script>

{#if $globalNavTitle}
  <div class="truncate">
    {#if $globalNavTitle && $globalNavShow}
      <div
        transition:fly={{ duration: 200, y: 6 }}
        class="font-semibold text-xl truncate min-w-1 transition-all"
      >
        {$globalNavTitle}
      </div>
    {/if}
  </div>
{/if}
