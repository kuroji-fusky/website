<script lang="ts">
  import { parseDateStr } from "../../utils"

  export let title: string
  export let description: string = ""
  export let date: string
  export let image: string

  const { readableDate, isoDate } = parseDateStr(date)
</script>

<div id="blog-post">
  <img class="rounded-md overflow-hidden aspect-video" src={image} alt={`Banner for ${title}`} />
  <h2 class="text-3xl font-bold py-1.5">{title}</h2>
  {#if description}
    <p>{description}</p>
  {/if}
  <time datetime={isoDate}>{readableDate}</time>
</div>
