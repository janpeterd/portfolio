<script>
  import { cn } from '$lib/utils'

  export let className = undefined
  export let translateX = 0
  export let translateY = 0
  export let translateZ = 0
  export let rotateX = 0
  export let rotateY = 0
  export let rotateZ = 0
  export let isMouseEntered = false

  let ref

  $: isMouseEntered, handleAnimations()

  const handleAnimations = () => {
    if (!ref) return
    if (isMouseEntered) {
      ref.style.transform = `translateX(${translateX}px) translateY(${translateY}px) translateZ(${translateZ}px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) rotateZ(${rotateZ}deg)`
    } else {
      ref.style.transform = `translateX(0px) translateY(0px) translateZ(0px) rotateX(0deg) rotateY(0deg) rotateZ(0deg)`
    }
  }
</script>

<div
  bind:this={ref}
  class={cn('w-fit transition duration-200 ease-linear', className)}
  {...$$props}>
  <slot />
</div>
