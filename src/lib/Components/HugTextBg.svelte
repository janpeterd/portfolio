<script>
  /**
   * @typedef {Object} Props
   * @property {string} [string] - this string contains a special, non breaking hyphen
   */

  /** @type {Props} */
  let { string = 'Jan‑Peter Dhallé' } = $props();

  let scroll = $state()
</script>

<svelte:window bind:scrollY={scroll} />
<p
  id="hugetext_scroll"
  class="z-0 hidden select-none overflow-hidden text-center font-tight text-7xl font-bold uppercase opacity-10 md:block md:text-9xl"
  style="transform: translateY({scroll * 0.085 + 7}rem);">
  {string}
</p>

<p
  id="hugetext"
  class="z-0 translate-y-20 select-none overflow-hidden text-center font-tight text-7xl font-bold uppercase opacity-10 md:hidden md:text-9xl">
  {string}
</p>
