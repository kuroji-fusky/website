<script setup lang="ts">
defineProps<{
  heading: string
}>()
</script>

<template>
  <div class="flex flex-col gap-y-2">
    <span class="font-mono font-medium uppercase opacity-60 text-sm">{{ heading }}</span>
    <slot />
  </div>
</template>
