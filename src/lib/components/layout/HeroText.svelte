<script lang="ts">
  export let title: string
  export let description = ""
</script>

<div class="px-8 py-6">
  <div
    class="h-32 px-12 flex items-center max-w-screen-2xl mx-auto border-b-kuro-violet-700 bg-gradient-to-tr from-kuro-violet-700 to-kuro-lavender-900 rounded-md py-20"
  >
    <!-- TODO: add hoverable fancy grids  -->
    <h1 class="text-5xl font-bold text-white">{title}</h1>
    {#if description}
      <p>{description}</p>
    {/if}
  </div>
</div>
