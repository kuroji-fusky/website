<script lang="ts">
  // import Boykisser from "./Boykisser.svelte";

  import { ExternalLinkIcon } from "lucide-svelte"

  const currentYear = new Date().getFullYear()
  const sourceRepoUrl = "https://github.com/kurojifusky/kurojifusky.com"
</script>

<div class="px-8 pt-4 pb-12 relative flex gap-y-2.5 max-w-screen-2xl mx-auto">
  <footer class="flex flex-col gap-y-8 text-sm flex-1">
    <div>lol</div>
    <div
      class="flex justify-between hover:[&_a]:underline [&_a]:text-kuro-lavender-200 hover:[&_a]:text-kuro-lavender-300"
    >
      <span class="font-normal opacity-50">
        {`© ${currentYear} Fusky Labs, LLC`}
      </span>
      <span class="flex gap-x-6">
        <span>
          Built with
          <a href="https://astro.build/" target="_blank" rel="noopenner noreferer">Astro</a>
          {" & "}
          <a href="https://www.contentful.com/" target="_blank" rel="noopenner noreferer"
            >Contentful</a
          >
        </span>
        <a
          href={sourceRepoUrl}
          target="_blank"
          class="inline-flex gap-x-1 items-center"
          rel="noopenner noreferer"
        >
          <span>View source code</span>
          <ExternalLinkIcon size={16} />
        </a>
      </span>
    </div>
  </footer>
</div>
