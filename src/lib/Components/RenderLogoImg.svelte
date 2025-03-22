<script>
  import Logo from '$lib/assets/render.png?enhanced'
  /**
   * @typedef {Object} Props
   * @property {string} [class]
   */

  /** @type {Props} */
  let { class: classes = '' } = $props();
  let width, height
  
</script>

<enhanced:img
  rel="preload"
  fetchpriority="high"
  as="image"
  src={Logo}
  alt="logo"
  class="transition-transform duration-300 hover:-rotate-12 hover:scale-105 {classes}" />
