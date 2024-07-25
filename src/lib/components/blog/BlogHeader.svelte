<script lang="ts">
  import { parseDateStr } from "$lib/parseDateStr"
  import { kebabCase } from "lodash-es"

  export let baseUrl: string
  export let categories: string[]
  export let title: string
  export let description: string
  export let date: string
</script>

<div>
  <span class="inline-flex mb-2.5 gap-x-6">
    {#each categories as cat}
      <a
        class="bg-clip-text text-transparent font-semibold bg-gradient-to-tr to-kuro-royalblue-200 from-kuro-lavender-400 hover:selection:text-white selection:text-white"
        href={`${baseUrl}/blog/category/${kebabCase(cat)}`}
      >
        {cat}
      </a>
    {/each}
  </span>
  <h1 class="text-3xl lg:text-[2.625rem] lg:leading-tight not-prose font-extrabold text-white">
    {title}
  </h1>
  <p class="text-base lg:text-lg opacity-65 py-2 lg:py-3.5">{description}</p>
  <slot />
  <div class="flex items-center py-5 gap-x-4">
    <div class="flex-1 flex flex-wrap gap-3">Tags placeholder</div>
    <div class="border-l-2 opacity-50 h-4" />
    <time datetime={date} itemprop="datePublished">{parseDateStr(date).readableDate}</time>
  </div>
</div>
