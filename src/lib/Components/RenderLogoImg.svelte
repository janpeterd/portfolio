<script>
  import Logo from '$lib/assets/render.png?enhanced'
  let classes = ''
  let width, height
  export { classes as class }
</script>

<enhanced:img
  rel="preload"
  fetchpriority="high"
  as="image"
  src={Logo}
  alt="logo"
  class="transition-transform duration-300 hover:-rotate-12 hover:scale-105 {classes}" />
