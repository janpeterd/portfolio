<script>
  import ProjectThumb from '$lib/Components/ProjectThumb.svelte'
  import Icon from '@iconify/svelte'
  import { onMount } from 'svelte'

  import { storageCleared } from '../../stores'
  import Tooltip from '$lib/Components/Tooltip.svelte'
  let { data } = $props()
  const { posts } = data
  let sortedPosts = $state(posts)

  const sortOptions = [
    {
      label: 'Datum',
      value: 'date'
    },
    {
      label: 'Favoriet',
      value: 'favorite'
    }
  ]
  const sortDirections = [
    { label: 'Descending', value: 'descending', icon: 'mdi:arrow-down' },
    { label: 'Ascending', value: 'ascending', icon: 'mdi:arrow-up' }
  ]
  let sort = $state({ option: sortOptions[0], direction: sortDirections[0] })
  const toggleDirection = () => {
    if (sort.direction.value === 'descending') {
      sort.direction = sortDirections[1]
    } else {
      sort.direction = sortDirections[0]
    }
  }

  let filters = [
    {
      id: 'sort',
      label: 'Sorteer',
      state: sort,
      options: sortOptions,
      withDirection: true
    }
  ]
  let hasReadAnything = $state(false)
  onMount(() => (hasReadAnything = localStorage.getItem('PostReadStatus') != null))

  async function reset_read() {
    localStorage.removeItem('PostReadStatus')
    storageCleared.set(true)
    await Promise.resolve()
    storageCleared.set(false)
    hasReadAnything = localStorage.getItem('PostReadStatus') != null
  }

  $effect(() => {
    const option = sort.option.value
    const direction = sort.direction.value
    let newSortedPosts = [...posts]

    if (option === 'date') {
      newSortedPosts.sort((a, b) => {
        const dateA = new Date(a.date)
        const dateB = new Date(b.date)
        return direction === 'ascending' ? dateA - dateB : dateB - dateA
      })
    } else if (option === 'favorite') {
      newSortedPosts.sort((a, b) => {
        const highlightA = a.highlight ? 1 : 0
        const highlightB = b.highlight ? 1 : 0
        return direction === 'ascending' ? highlightA - highlightB : highlightB - highlightA
      })
    }
    sortedPosts = newSortedPosts
  })
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
    <div
      class="flex flex-col items-start justify-center gap-4 border-b border-b-gray-600/80 px-4 pb-6 sm:flex-row sm:justify-between sm:gap-0">
      <h2 class="text-3xl font-semibold uppercase tracking-tight text-secondary sm:text-4xl">
        Projecten
      </h2>
      <div class="flex items-center justify-center gap-2">
        {#if hasReadAnything}
          <Tooltip className="h-full">
            {#snippet tooltipContent()}
              <div class="rounded-2xl bg-primary p-3 text-sm font-medium">
                Markeer alle artikels als ongelezen.
              </div>
            {/snippet}
            <button
              onclick={reset_read}
              class="flex h-full items-center justify-center gap-2 rounded-lg bg-primary px-1 text-center font-elec font-semibold text-slate-400 transition-all hover:scale-105 hover:text-secondary">
              <Icon icon="mdi:eye" width="1rem" class="shrink-0" />
              Reset gelezen
            </button>
          </Tooltip>
        {/if}
        {#each filters as filter}
          <div class="flex flex-col justify-center gap-1 font-elec">
            <label for={filter.id} class="text-sm font-semibold text-neutral-300/80">
              {filter.label}
            </label>
            <div
              class="flex items-center justify-center rounded-lg bg-primary font-semibold text-neutral-300/80">
              <select
                class={`bg-primary ${filter.withDirection ? 'rounded-l-lg border-b-0 border-l-0 border-r-2 border-t-0 border-r-white/20' : 'rounded-lg border-none'}`}
                id={filter.id}
                bind:value={filter.state.option.value}>
                {#each filter.options as option}
                  <option value={option.value}>{option.label}</option>
                {/each}
              </select>
              {#if filter.withDirection}
                <button onclick={toggleDirection} class="size-full rounded-lg px-2">
                  <Icon icon={filter.state.direction.icon} width="1.5rem" class="shrink-0" />
                </button>
              {/if}
            </div>
          </div>
        {/each}
      </div>
    </div>
    <ul class="my-12 grid w-full gap-16 overflow-y-auto lg:grid-cols-3 lg:gap-x-0 lg:gap-y-5">
      {#each sortedPosts as entry (entry.slug)}
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
