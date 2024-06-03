<script lang="ts">
  export let heading: string = "";
  export let slotsReversed: boolean = false;
</script>

<section class="px-8 py-5">
  {#if heading}
    <h1 class="font-hero-heading my-3 text-5xl font-semibold">
      {heading}
    </h1>
  {/if}
  <div class="flex gap-2.5 *:flex-shrink-0">
    <slot />
  </div>
</section>
