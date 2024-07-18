<script setup lang="ts">
import { parseDateStr } from "../../parseDateStr"

const props = withDefaults(
  defineProps<{
    title: string
    description?: string
    date: string
    slug: string
    category: string[]
    style?: "compact" | "normal" | "big"
  }>(),
  {
    style: "normal"
  }
)

const { readableDate, isoDate } = parseDateStr(props.date)

const _parsedSlug = `/blog/${props.slug}?from=featured_shelf`

const isLayoutCompactOnly = props.style === "big" || props.style === "normal"
</script>

<template>
  <div :class="['flex', isLayoutCompactOnly ? 'flex-col gap-y-2' : 'flex-row gap-x-5']">
    <a
      :href="_parsedSlug"
      :class="[
        'overflow-hidden aspect-video rounded-md hover:*:scale-[1.025]',
        '[&_img]:object-cover [&_img]:transition-transform [&_img]:duration-300',
        isLayoutCompactOnly
          ? 'w-full [&_img]:aspect-video'
          : 'size-36 flex-shrink-0 [&_img]:aspect-square'
      ]"
    >
      <slot />
    </a>
    <div :class="[isLayoutCompactOnly ? 'contents' : 'flex flex-col gap-y-2.5']">
      <h3
        :class="[
          '!leading-snug font-bold',
          isLayoutCompactOnly ? 'pt-2 text-[1.75rem]' : 'text-2xl'
        ]"
      >
        <a :href="_parsedSlug" class="hover:underline hover:text-kuro-lavender-300">{{ title }}</a>
      </h3>
      <p class="overflow-hidden opacity-75 leading-relaxed">
        {{ description }}
      </p>
      <time :datetime="isoDate" class="text-sm">{{ readableDate }}</time>
    </div>
  </div>
</template>
