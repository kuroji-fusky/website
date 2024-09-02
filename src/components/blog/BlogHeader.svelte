<script lang="ts">
  import { onMount } from "svelte"
  import { kebabCase } from "lodash-es"
  import { globalNavTitle, globalNavShow } from "../../stores"
  import observeDOM from "../../lib/observe"
  import SparkleIcon from "~icons/lucide/sparkles?raw"
  import type { BlogPostsReturnType } from "../../lib/contentful/fetchBlogPosts"

  export let baseUrl: string
  export let categories: string[]
  export let title: string
  export let description: string
  export let fromSeries: BlogPostsReturnType[number]["fromSeries"]

  let headingTitleRef: HTMLHeadingElement

  onMount(() => {
    observeDOM(globalNavShow, headingTitleRef)

    globalNavTitle.set(title)
  })
</script>

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
<h1
  bind:this={headingTitleRef}
  class="text-3xl lg:text-[2.625rem] lg:leading-tight not-prose font-extrabold text-white"
>
  {title}
</h1>
<p class="text-base lg:text-lg opacity-65 py-2 lg:py-3.5">{description}</p>
<div class="z-[2] relative">
  <slot />
</div>
{#if fromSeries}
  <div
    class="flex items-center pt-5 pb-2 px-2.5 -mt-3 rounded-bl-lg rounded-br-lg bg-kuro-lavender-900"
  >
    <span class="[&_svg]:size-full h-5 mr-1.5 flex-shrink-0"
      >{@html SparkleIcon}</span
    >
    <span>
      From the series:
      <a href={`/blog/series/${fromSeries.fields.slug}`} class="font-semibold"
        >{fromSeries.fields.title}</a
      >
    </span>
  </div>
{/if}
