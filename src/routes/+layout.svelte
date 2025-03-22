<script>
  import Footer from '$lib/Components/Footer.svelte'
  import Navbar from '$lib/Components/Navbar.svelte'
  import { inject } from '@vercel/analytics'
  import { afterNavigate, beforeNavigate } from '$app/navigation'
  import '../app.css'
  /**
   * @typedef {Object} Props
   * @property {import('svelte').Snippet} [children]
   */

  /** @type {Props} */
  let { children } = $props();

  // analytics
  inject()

  // see: https://github.com/sveltejs/kit/pull/8724#issuecomment-1424436745
  /** @type {string}*/
  let scroll_behaviour

  beforeNavigate(() => {
    scroll_behaviour = getComputedStyle(document.documentElement).scrollBehavior
    document.documentElement.style.scrollBehavior = 'auto'
  })

  afterNavigate(() => {
    if (scroll_behaviour) {
      document.documentElement.style.scrollBehavior = scroll_behaviour
    }
  })
</script>

<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link
  href="https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&family=Reddit+Sans+Condensed:wght@200..900&display=swap"
  rel="stylesheet" />

<div class="relative overflow-hidden py-1">
  <Navbar />
    {@render children?.()}
  <Footer />
</div>
