<script>
  /** @type {string} */
  export let title = ''
  /** @type {string} */
  export let id = ''
  /** @type {string} */
  export let className = ''
</script>

<h2
  {id}
  class={`py-4 font-tight text-4xl font-extrabold uppercase tracking-tight text-secondary text-secondary/85 sm:text-4xl ${className}`}>
  {title}
</h2>
