<script>
  /**
   * @typedef {Object} Props
   * @property {string} [string] - this string contains a special, non breaking hyphen
   */

  /** @type {Props} */
  let { string = 'Jan‑Peter Dhallé' } = $props()

  let scroll = $state()
</script>

<svelte:window bind:scrollY={scroll} />
<div
  id="hugetext_scroll"
  class="relative z-0 hidden select-none overflow-hidden text-center font-tight font-bold md:block"
  style="transform: translateY({scroll * 0.085 + 7}rem);">
  <span class="text-7xl uppercase opacity-15">{string}</span>
</div>
<p
  id="hugetext"
  class="relative z-0 translate-y-20 select-none overflow-hidden text-center font-tight text-7xl font-bold uppercase opacity-15 md:hidden">
  {string}
</p>
