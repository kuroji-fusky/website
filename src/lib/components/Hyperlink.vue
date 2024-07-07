<script setup lang="ts">
defineProps<{
  href: string
  displayIcon: boolean
}>()
</script>

<template>
  <a :href="href" class="inline-flex">
    <slot />
  </a>
</template>
