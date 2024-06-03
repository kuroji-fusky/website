<script lang="ts">
  import { parseDateStr } from "../../parseDateStr"

  export let title: string
  export let description: string = ""
  export let date: string
  export let slug: string

  const { readableDate, isoDate } = parseDateStr(date)

  const _parsedSlug = `/blog/${slug}`
</script>

<div id="post-item" class="flex flex-col gap-y-2">
  <a href={_parsedSlug}>
    <slot />
  </a>
  <h2 class="text-[1.75rem] leading-tight font-bold pt-2">
    <a href={_parsedSlug}>{title}</a>
  </h2>
  {#if description}
    <p class="overflow-hidden line-clamp-3 opacity-75 leading-relaxed">{description}</p>
  {/if}
  <time datetime={isoDate} class="text-sm">{readableDate}</time>
</div>
