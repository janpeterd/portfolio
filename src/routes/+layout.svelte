<script>
  import { afterNavigate, beforeNavigate } from '$app/navigation'
  import '../app.css'

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
<link href="https://fonts.googleapis.com/css2?family=Electrolize&display=swap" rel="stylesheet" />

<div class="relative py-1">
  <slot />
</div>
