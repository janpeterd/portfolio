<script>
  import Icon from '@iconify/svelte'
  import { onMount } from 'svelte'
  import { browser } from '$app/environment'
  import { darkMode } from '../../stores'

  const THEME_KEY = 'theme'

  onMount(() => {
    const isDark = document.documentElement.classList.contains('dark')
    darkMode.set(isDark)
  })

  $: if (browser && $darkMode !== undefined) {
    document.documentElement.classList.toggle('dark', $darkMode)
    localStorage.setItem(THEME_KEY, $darkMode ? 'dark' : 'light')
  }

  function toggleDarkMode() {
    darkMode.update((currentValue) => !currentValue)
  }
</script>

<button
  on:click={toggleDarkMode}
  aria-label={$darkMode ? 'Schakel lichte modus in' : 'Schakel donkere modus in'}
  class="fixed bottom-5 right-5 z-50 flex h-12 w-12 items-center justify-center rounded-full bg-gray-200 text-gray-700 shadow-lg transition-all duration-300 ease-in-out hover:bg-gray-300 dark:bg-gray-700 dark:text-gray-200 dark:hover:bg-gray-600 print:hidden"
  title={$darkMode ? 'Lichte modus' : 'Donkere modus'}>
  {#if $darkMode}
    <Icon icon="mdi:weather-sunny" class="h-6 w-6 text-yellow-400" />
  {:else}
    <Icon icon="mdi:weather-night" class="h-6 w-6 text-indigo-500" />
  {/if}
</button>
