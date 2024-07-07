<script setup lang="ts">
import { parseDateStr } from "../../parseDateStr"

const props = defineProps<{
  title: string
  description?: string
  date: string
  slug: string
}>()

const { readableDate, isoDate } = parseDateStr(props.date)

const _parsedSlug = `/blog/${props.slug}`
</script>

<template>
  <div class="flex flex-col gap-y-2">
    <a :href="_parsedSlug">
      <slot />
    </a>
    <h2 class="text-[1.75rem] leading-tight font-bold pt-2">
      <a :href="_parsedSlug">{{ title }}</a>
    </h2>
    <p v-show="description" class="overflow-hidden line-clamp-3 opacity-75 leading-relaxed">
      {{ description }}
    </p>
    <time :datetime="isoDate" class="text-sm">{{ readableDate }}</time>
  </div>
</template>
