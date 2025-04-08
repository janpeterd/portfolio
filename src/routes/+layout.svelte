<script>
  import Footer from '$lib/Components/Footer.svelte'
  import Navbar from '$lib/Components/Navbar.svelte'
  import { inject } from '@vercel/analytics'
  import { afterNavigate, beforeNavigate, onNavigate } from '$app/navigation'
  import '../app.css'
  /**
   * @typedef {Object} Props
   * @property {import('svelte').Snippet} [children]
   */

  /** @type {Props} */
  let { children } = $props()

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

  onNavigate((navigation) => {
    if (!document.startViewTransition) return

    return new Promise((resolve) => {
      document.startViewTransition(async () => {
        resolve()
        await navigation.complete
      })
    })
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

<style>
  @keyframes fade-in {
    from {
      opacity: 0;
    }
  }

  @keyframes fade-out {
    to {
      opacity: 0;
    }
  }

  @keyframes slide-from-right {
    from {
      transform: translateX(30px);
    }
  }

  @keyframes slide-to-left {
    to {
      transform: translateX(-30px);
    }
  }

  :root::view-transition-old(root) {
    animation:
      90ms cubic-bezier(0.4, 0, 1, 1) both fade-out,
      300ms cubic-bezier(0.4, 0, 0.2, 1) both slide-to-left;
  }

  :root::view-transition-new(root) {
    animation:
      210ms cubic-bezier(0, 0, 0.2, 1) 90ms both fade-in,
      300ms cubic-bezier(0.4, 0, 0.2, 1) both slide-from-right;
  }

  @keyframes title-move-out {
    from {
      transform: translateX(0);
    }
    to {
      transform: translateY(20px);
      opacity: 0;
    }
  }

  @keyframes title-move-in {
    from {
      transform: translateY(120px);
      opacity: 0.5;
    }
    to {
      transform: translateX(0);
      opacity: 1;
    }
  }

  :root::view-transition-old(title) {
    animation: title-move-out 100ms ease-out forwards;
  }

  :root::view-transition-new(title) {
    animation: title-move-in 200ms ease forwards;
  }
</style>
