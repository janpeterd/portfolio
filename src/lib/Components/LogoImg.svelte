<script>
  import Logo from '$lib/assets/logo.svg'
  let classes = ''
  export { classes as class }
</script>

<img
  src={Logo}
  alt="logo"
  class="transition-transform duration-300 hover:-rotate-12 hover:scale-105 {classes}"
/>
