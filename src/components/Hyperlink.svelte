<script lang="ts">
  export let href: string;
  export let displayIcon: boolean = false;
</script>

<a {href} class="inline-flex">
  <slot />
</a>
