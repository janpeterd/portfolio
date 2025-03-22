<script>
  import { cn } from '$lib/utils'

  /**
   * @typedef {Object} Props
   * @property {any} [className]
   * @property {any} [containerClassName]
   * @property {boolean} [isMouseEntered]
   * @property {import('svelte').Snippet} [children]
   */

  /** @type {Props} */
  let {
    className = undefined,
    containerClassName = undefined,
    isMouseEntered = $bindable(false),
    children
  } = $props();

  let containerRef = $state()

  const handleMouseMove = (e) => {
    if (!containerRef) return
    const { left, top, width, height } = containerRef.getBoundingClientRect()
    const x = (e.clientX - left - width / 2) / 25
    const y = (e.clientY - top - height / 2) / 25
    containerRef.style.transform = `rotateY(${x}deg) rotateX(${y}deg)`
  }

  const handleMouseEnter = (e) => {
    isMouseEntered = true
    if (!containerRef) return
  }

  const handleMouseLeave = (e) => {
    if (!containerRef) return
    isMouseEntered = false
    containerRef.style.transform = `rotateY(0deg) rotateX(0deg)`
  }
</script>

<div
  class={cn('flex items-center justify-center py-20', containerClassName)}
  style="perspective: 1000px;">
  <div
    bind:this={containerRef}
    onmouseenter={handleMouseEnter}
    onmousemove={handleMouseMove}
    onmouseleave={handleMouseLeave}
    class={cn(
      'relative flex items-center justify-center transition-all duration-200 ease-linear',
      className
    )}
    style="transform-style: preserve-3d;">
    {@render children?.()}
  </div>
</div>
