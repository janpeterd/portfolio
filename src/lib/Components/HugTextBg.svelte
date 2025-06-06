<script>
  /**
   * @typedef {Object} Props
   * @property {string} [string] - this string contains a special, non breaking hyphen
   */

  /** @type {Props} */
  let { string = 'Jan‑Peter Dhallé' } = $props()
</script>

<p
  id="hugetext"
  class="relative z-0 mt-12 translate-y-20 select-none overflow-hidden text-center font-tight text-7xl font-bold uppercase opacity-15">
  {string}
</p>
