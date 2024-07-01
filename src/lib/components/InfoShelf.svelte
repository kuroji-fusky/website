<script lang="ts">
  export let heading = ""
</script>

<div class="flex flex-col gap-y-2">
  <span class="font-mono font-medium uppercase opacity-60 text-sm">{heading}</span>
  <slot />
</div>
