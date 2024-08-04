<script lang="ts">
  import { fly } from "svelte/transition"
  import { globalNavTitle, globalNavShow } from "$lib/stores"
</script>

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
