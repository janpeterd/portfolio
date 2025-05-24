<script>
  import ProjectThumb from '$lib/Components/ProjectThumb.svelte'
  import Icon from '@iconify/svelte'
  import { onMount } from 'svelte'

  import { storageCleared } from '../../stores'
  import Tooltip from '$lib/Components/Tooltip.svelte'
  let { data } = $props()
  const { posts } = data
  const sort = 'date'

  let hasReadAnything = $state(false)
  onMount(() => (hasReadAnything = localStorage.getItem('PostReadStatus') != null))

  async function reset_read() {
    localStorage.removeItem('PostReadStatus')
    storageCleared.set(true)
    await Promise.resolve()
    storageCleared.set(false)
    hasReadAnything = localStorage.getItem('PostReadStatus') != null
  }
</script>

<svelte:head>
  <title>Projecten - Portfolio Jan-Peter</title>
  <meta
    name="description"
    content="Projecten van Jan-Peter Dhallé, student toegepaste informatica" />
  <meta
    property="og:description"
    content="Projecten van Jan-Peter Dhallé, student toegepaste informatica" />
  <meta property="og:title" content="Projecten - Portfolio Jan-Peter" />
</svelte:head>

<div class="my-24 w-full lg:min-h-[68.6vh]">
  <div class="mx-auto w-full max-w-lg lg:max-w-7xl">
    <div class="border-b border-b-gray-200 pb-6">
      <h2 class="text-3xl font-semibold uppercase tracking-tight text-secondary sm:text-4xl">
        Projecten
      </h2>
    </div>
    <div class="flex w-full justify-end">
      {#if hasReadAnything}
        <Tooltip>
          {#snippet tooltipContent()}
            <div class="rounded-2xl bg-primary p-3 text-sm font-medium">
              Markeer alle artikels als ongelezen.
            </div>
          {/snippet}
          <button
            onclick={reset_read}
            class="m-4 flex items-center justify-center gap-2 rounded-lg border border-white/30 bg-primary p-3 text-center font-elec font-bold text-slate-400 transition-all hover:scale-105 hover:text-secondary">
            <Icon icon="mdi:eye" width="1.5rem" class="shrink-0" />
            Reset gelezen
          </button>
        </Tooltip>
      {/if}
      <select class="bg-black text-white" id="sort">
        <option value="date">Datum</option>
      </select>
    </div>
    <ul class="my-12 grid w-full gap-16 overflow-y-auto lg:grid-cols-3 lg:gap-x-0 lg:gap-y-5">
      {#each posts as entry}
        <ProjectThumb {entry} />
      {/each}
    </ul>
  </div>
</div>

<div class="bottom-gradient fixed top-0 h-full w-screen"></div>

<style lang="postcss">
  .bottom-gradient {
    z-index: -10;
    mask-image: radial-gradient(100vw 50vh at 50% 80%, rgba(0, 0, 0, 1) 80%, transparent);
    background:
      url('/img/grain.webp'),
      radial-gradient(100vw 50vh at 50% 80%, theme(colors.green.500 / 18%), transparent);
  }
</style>
