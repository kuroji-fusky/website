<script lang="ts">
  // import Boykisser from "./Boykisser.svelte";

  import { ExternalLinkIcon } from "lucide-svelte"

  const currentYear = new Date().getFullYear()
  const sourceRepoUrl = "https://github.com/kurojifusky/kurojifusky.com"
</script>

<div class="px-8 pt-4 pb-12 relative flex gap-y-2.5 max-w-screen-2xl mx-auto">
  <footer class="flex flex-col gap-y-8 text-sm flex-1">
    <div>lol</div>
    <div class="flex justify-between">
      <span class="font-normal opacity-50">
        {`© ${currentYear} Kerby Keith Aquino`}
      </span>
      <span class="flex gap-x-6">
        <span>Built with love with Astro</span>
        <span>COMMIT_HASH</span>
        <a href={sourceRepoUrl} target="_blank" class="inline-flex gap-x-1 items-center">
          <span>View source code</span>
          <ExternalLinkIcon size={16} />
        </a>
      </span>
    </div>
  </footer>
  <!-- <Boykisser /> -->
</div>
