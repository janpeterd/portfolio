<script>
  /** @type {string} */
  export let title = ''
  /** @type {string} */
  export let id = ''
  /** @type {string} */
  export let className = ''
</script>

<h2 {id} class={`w-full py-4 text-4xl font-bold sm:text-4xl ${className}`}>
  {title}
</h2>
