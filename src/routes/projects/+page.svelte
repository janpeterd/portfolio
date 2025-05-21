<script>
  import ProjectThumb from '$lib/Components/ProjectThumb.svelte'
  import Icon from '@iconify/svelte'

  import { storageCleared } from '../../stores'
  let { data } = $props()
  const { posts } = data

  async function reset_read() {
    localStorage.clear()
    storageCleared.set(true)
    await Promise.resolve()
    storageCleared.set(false)
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
      <button
        onclick={reset_read}
        class="m-4 flex items-center justify-center gap-2 rounded-xl bg-primary p-2 text-center font-elec font-bold text-slate-400 transition-all hover:scale-105 hover:text-secondary">
        <Icon icon="mdi:eye" width="1.5rem" class="shrink-0" />
        Reset gelezen
      </button>
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
