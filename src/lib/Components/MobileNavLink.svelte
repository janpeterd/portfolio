<script>
  import { page } from '$app/stores'

  /**
   * @typedef {Object} Props
   * @property {string} [class]
   * @property {any} href
   * @property {any} onclick
   * @property {import('svelte').Snippet} [children]
   */

  /** @type {Props} */
  let { class: classes = '', href, onclick, children } = $props()
</script>

<a {href} {onclick} class="block p-5 text-center text-3xl font-bold">
  <span
    class="bg-gradient-to-r from-green-500 to-green-500 bg-[length:0%_3px] bg-left-bottom bg-no-repeat transition-all duration-500 ease-out group-hover:bg-[length:100%_3px]"
    class:active={$page.url.protocol + '//' + $page.url.host + href == $page.url}>
    {@render children?.()}
  </span>
</a>

<style lang="postcss">
  .active {
    @apply text-secondary;
  }
</style>
