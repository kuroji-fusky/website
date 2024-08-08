<script lang="ts">
  import { parseDateStr } from "$lib/parseDateStr"

  export let title: string
  export let description: string
  export let date: string
  export let slug: string
  export let category: string[] = [""]
  export let referrer: string = ""
  export let size: "small" | "normal" | "heading" = "normal"

  const { readableDate, isoDate } = parseDateStr(date)
  const parsedSlug = `/blog/${slug}?from=${referrer}`
</script>

<div id="bi-root" class="flex {size}">
  <a
    id="bi-banner"
    href={parsedSlug}
    class="overflow-hidden aspect-video rounded-md hover:*:scale-[1.025] [&_img]:h-full [&_img]:object-cover [&_img]:transition-transform [&_img]:duration-300 {size}"
  >
    <slot />
  </a>
  <div id="bi-details" class={size}>
    {#if size === "heading"}
      <h2 id="bi-heading" class="font-bold {size}">
        <a href={parsedSlug} class="hover:underline hover:text-kuro-lavender-300">{title}</a>
      </h2>
    {:else}
      <h3 id="bi-heading" class="font-bold {size}">
        <a href={parsedSlug} class="hover:underline hover:text-kuro-lavender-300">{title}</a>
      </h3>
    {/if}
    <p class="overflow-hidden opacity-75 leading-relaxed">
      {description}
    </p>
    <time datetime={isoDate} class="text-sm">{readableDate}</time>
  </div>
</div>

<style lang="postcss" global>
  #bi-root.small {
    @apply flex-row gap-x-5;
  }
  #bi-root.normal,
  #bi-root.heading {
    @apply flex-col gap-y-3;
  }

  #bi-banner.small {
    @apply size-36 flex-shrink-0;
  }
  #bi-banner.normal,
  #bi-banner.heading {
    @apply w-full;
  }

  #bi-details.small {
    @apply flex flex-col gap-y-2;
  }
  #bi-details.normal,
  #bi-details.heading {
    @apply flex flex-col gap-y-3;
  }

  #bi-heading.small {
    @apply text-2xl leading-8;
  }
  #bi-heading.normal {
    @apply pt-2 text-2xl;
  }
  #bi-heading.heading {
    @apply pt-2 text-3xl font-extrabold;
  }
</style>
