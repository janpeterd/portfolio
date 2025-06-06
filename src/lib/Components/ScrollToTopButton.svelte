<script>
  import Icon from '@iconify/svelte'
  import { onMount } from 'svelte'
  import { browser } from '$app/environment'
  import { fade } from 'svelte/transition'

  let showButton = $state(false)

  onMount(() => {
    if (!browser) return

    const handleScroll = () => {
      showButton = window.scrollY > 400
    }

    window.addEventListener('scroll', handleScroll, { passive: true })

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  })

  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }
</script>

{#if showButton}
  <button
    transition:fade={{ duration: 200 }}
    onclick={scrollToTop}
    aria-label="Scroll naar boven"
    title="Scroll naar boven"
    class="fixed bottom-20 right-5 z-50 flex h-12 w-12 items-center justify-center rounded-full bg-gray-200 text-gray-700 shadow-lg transition-all duration-300 ease-in-out hover:bg-gray-300 dark:bg-gray-700 dark:text-gray-200 dark:hover:bg-gray-600 print:hidden">
    <Icon icon="mdi:arrow-up" class="h-6 w-6" />
  </button>
{/if}
