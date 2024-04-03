<script>
  import Logo from '$lib/assets/logo.svg'
  let classes = ''
  let width, height
  export { classes as class }
</script>

<img
  rel="preload"
  fetchpriority="high"
  as="image"
  src={Logo}
  alt="logo"
  {width}
  {height}
  class="transition-transform duration-300 hover:-rotate-12 hover:scale-105 {classes}" />
