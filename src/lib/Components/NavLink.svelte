<script>
  import { page } from '$app/stores'
  let classes = ''
  export { classes as class }
  export let logo = false
  export let href
</script>

{#if logo}
  <a
    {href}
    class="text-bold text-red flex-auto p-1 text-center text-xl hover:text-zinc-200 {classes}">
    <slot />
  </a>
{:else}
  <a
    {href}
    class="group flex-auto p-1 text-center text-xl font-bold transition-all duration-300 ease-in-out hover:text-zinc-200 {classes}">
    <span
      class="bg-gradient-to-r from-green-500 to-green-500 bg-[length:0%_3px] bg-left-bottom bg-no-repeat transition-all duration-500 ease-out group-hover:bg-[length:100%_3px]"
      class:active={$page.url.protocol + '//' + $page.url.host + href == $page.url}>
      <slot />
    </span>
  </a>
{/if}

<style lang="postcss">
  .active {
    @apply text-secondary;
  }
</style>
