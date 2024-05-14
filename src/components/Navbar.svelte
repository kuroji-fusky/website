<script lang="ts">
  export let pathCrumbs: String;
</script>

<nav class="py-2 sticky top-0 bg-kuro-dark2">
  <div class="mx-auto flex justify-between items-center px-8 max-w-screen-2xl">
    <div id="breadcrumbs">
      <a href="/">
        <span class="sr-only" translate="no">Kuro logo</span>
        <span aria-hidden="true">Logo</span>
      </a>
      <span>{pathCrumbs}</span>
    </div>
    <div class="flex gap-x-0.5 text-lg *:px-5 *:py-4">
      <span>Explore</span>
      <a href="/blog">Blog</a>
      <a href="/about">About</a>
    </div>
  </div>
</nav>
