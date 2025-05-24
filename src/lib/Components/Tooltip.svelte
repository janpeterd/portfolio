<script>
  import { onMount, onDestroy } from 'svelte'
  import { computePosition, offset, flip, shift, autoUpdate } from '@floating-ui/dom'

  // Props
  /** @type {import('svelte').Snippet | undefined} */
  export let tooltipContent = undefined
  /** @type {import('svelte').Snippet | undefined} */
  export let children = undefined
  export let className = ''

  /** @type {string} */
  export let placement = 'top'

  /** @type {number} */
  export let padding = 6

  // State
  let triggerEl
  let tooltipEl
  //let showTooltip = false
  let showTooltip = false
  let cleanupAutoUpdate = null

  // Position the tooltip
  async function updatePosition() {
    if (!triggerEl || !tooltipEl) return

    const { x, y } = await computePosition(triggerEl, tooltipEl, {
      placement,
      middleware: [offset(1), flip(), shift({ padding })]
    })

    Object.assign(tooltipEl.style, {
      left: `${x}px`,
      top: `${y}px`
    })
  }

  // Event handlers
  function handleMouseEnter() {
    showTooltip = true
  }

  function handleMouseLeave() {
    showTooltip = false
  }

  // Setup auto-updating position
  onMount(() => {
    if (triggerEl && tooltipEl) {
      cleanupAutoUpdate = autoUpdate(triggerEl, tooltipEl, updatePosition)
    }
  })

  // Cleanup
  onDestroy(() => {
    if (cleanupAutoUpdate) cleanupAutoUpdate()
  })
</script>

<!-- Trigger element with event handlers -->
<span
  bind:this={triggerEl}
  on:mouseenter={handleMouseEnter}
  on:mouseleave={handleMouseLeave}
  on:focus={handleMouseEnter}
  on:blur={handleMouseLeave}
  tabindex="0"
  class={`trigger inline-block max-w-full cursor-pointer ${className}`}>
  {@render children()}
</span>

<!-- Tooltip -->
<div
  bind:this={tooltipEl}
  role="tooltip"
  class={`pointer-events-auto absolute left-0 top-0 z-50 w-max p-2 font-bold ${!showTooltip && 'hidden'}`}
  on:mouseenter={handleMouseEnter}
  on:mouseleave={handleMouseLeave}>
  <div class="max-w-max rounded-lg bg-black/80 p-2 backdrop-blur-lg">
    {@render tooltipContent()}
  </div>
</div>
