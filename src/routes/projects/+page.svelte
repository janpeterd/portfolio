<script>
  console.log('Svelte component script executing')

  import ProjectThumb from '$lib/Components/ProjectThumb.svelte'
  import Icon from '@iconify/svelte'
  import { onMount } from 'svelte'
  import { page } from '$app/stores'
  import { goto } from '$app/navigation'

  import { storageCleared } from '../../stores'
  import Tooltip from '$lib/Components/Tooltip.svelte'
  import HomeTitle from '$lib/Components/HomeTitle.svelte'

  let { data } = $props()
  const { posts = [] } = data

  console.log('Component loaded, data:', data)
  console.log('Posts from data:', posts)

  const sortOptions = [
    { label: 'Datum', value: 'date' },
    { label: 'Favoriet', value: 'favorite' }
  ]
  const sortDirections = [
    { label: 'Descending', value: 'descending', icon: 'mdi:arrow-down' },
    { label: 'Ascending', value: 'ascending', icon: 'mdi:arrow-up' }
  ]

  const initialUrlParams = $page.url.searchParams

  const initialSortOption =
    sortOptions.find((opt) => opt.value === initialUrlParams.get('sort')) || sortOptions[0]
  const initialSortDirection =
    sortDirections.find((dir) => dir.value === initialUrlParams.get('direction')) ||
    sortDirections[0]
  let sort = $state({ option: initialSortOption, direction: initialSortDirection })

  const toggleDirection = () => {
    sort.direction = sort.direction.value === 'descending' ? sortDirections[1] : sortDirections[0]
  }

  // Extract all unique technologies from posts
  const usedTechnologiesArray = $derived(() => {
    const techSet = new Set()
    // Access posts through data to maintain reactivity
    if (data.posts) {
      data.posts.forEach((post) => {
        if (post?.technologies?.length) {
          post.technologies.forEach((tech) => {
            if (typeof tech === 'string') {
              techSet.add(tech.trim())
            }
          })
        }
      })
    }
    return Array.from(techSet).sort((a, b) => a.localeCompare(b))
  })

  // Create technology options with "All" option
  const technologyOptions = $derived(() => {
    const baseOptions = [{ label: 'Alle Technologieën', value: 'all' }]
    const dynamicOptions = usedTechnologiesArray.map((techName) => ({
      label: techName,
      value: techName
    }))
    return [...baseOptions, ...dynamicOptions]
  })

  // Initialize technology filter - simplified approach
  const getInitialTechnologyFilter = () => {
    const techFromUrl = initialUrlParams.get('technology')
    if (!techFromUrl || techFromUrl === 'all') {
      return 'all'
    }

    // Check if the technology from URL exists in our posts
    const techExists = posts.some((post) =>
      post.technologies?.some((tech) => tech.toLowerCase() === techFromUrl.toLowerCase())
    )

    return techExists ? techFromUrl : 'all'
  }

  let technologyFilter = $state({ value: getInitialTechnologyFilter() })

  // Combined Filters Configuration for UI
  let filters = $derived([
    {
      id: 'sort',
      label: 'Sorteer',
      state: sort,
      options: sortOptions,
      withDirection: true
    },
    {
      id: 'technology',
      label: 'Technologie',
      state: technologyFilter,
      options: technologyOptions,
      withDirection: false
    }
  ])

  // Read Status
  let hasReadAnything = $state(false)
  onMount(() => {
    hasReadAnything = localStorage.getItem('PostReadStatus') != null
  })

  async function reset_read() {
    localStorage.removeItem('PostReadStatus')
    storageCleared.set(true)
    await Promise.resolve()
    storageCleared.set(false)
    hasReadAnything = localStorage.getItem('PostReadStatus') != null
  }

  // Filtered and Sorted Posts (Display Logic)
  let displayPosts = $state([])

  $effect(() => {
    let processedPosts = [...posts]

    // Apply technology filter
    const currentTechFilterValue = technologyFilter.value
    if (currentTechFilterValue && currentTechFilterValue !== 'all') {
      processedPosts = processedPosts.filter((post) => {
        return (
          post &&
          post.technologies?.some(
            (tech) => tech.toLowerCase() === currentTechFilterValue.toLowerCase()
          )
        )
      })
    }

    // Apply sorting
    const sortOpt = sort.option.value
    const sortDir = sort.direction.value

    if (sortOpt === 'date') {
      processedPosts.sort((a, b) => {
        const dateA = new Date(a.date)
        const dateB = new Date(b.date)
        return sortDir === 'ascending' ? dateA - dateB : dateB - dateA
      })
    } else if (sortOpt === 'favorite') {
      processedPosts.sort((a, b) => {
        const highlightA = a.highlight ? 1 : 0
        const highlightB = b.highlight ? 1 : 0
        return sortDir === 'ascending' ? highlightA - highlightB : highlightB - highlightA
      })
    }

    displayPosts = processedPosts
  })

  // URL Update Effect
  $effect(() => {
    const newParams = new URLSearchParams()
    newParams.set('sort', sort.option.value)
    newParams.set('direction', sort.direction.value)

    if (technologyFilter.value && technologyFilter.value !== 'all') {
      newParams.set('technology', technologyFilter.value.toLowerCase())
    }

    const query = newParams.toString()
    const targetPathAndQuery = query ? `${$page.url.pathname}?${query}` : $page.url.pathname
    const currentPathAndQuery = $page.url.pathname + $page.url.search

    if (targetPathAndQuery !== currentPathAndQuery) {
      goto(targetPathAndQuery, { keepFocus: true, replaceState: true, noScroll: true })
    }
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
      class="flex flex-col items-start justify-center gap-4 border-b border-b-gray-600/80 px-4 pb-6 sm:flex-row sm:items-end sm:justify-between sm:gap-0">
      <HomeTitle title="Projecten" id="projects" className="!py-0" />
      <div class="flex flex-wrap items-stretch justify-center gap-2 sm:flex-nowrap">
        {#if hasReadAnything}
          <Tooltip className="flex items-stretch pt-6">
            {#snippet tooltipContent()}
              <div class="rounded-2xl p-3 text-sm font-medium">
                Markeer alle artikels als ongelezen.
              </div>
            {/snippet}
            {#snippet children()}
              <button
                onclick={reset_read}
                class="font-elec my-0 flex items-center gap-2 rounded-lg bg-primary px-3 py-1 text-center font-semibold text-slate-400 transition-all hover:scale-105 hover:text-secondary">
                Reset gelezen
                <Icon icon="mdi:eye" width="1rem" class="shrink-0" />
              </button>
            {/snippet}
          </Tooltip>
        {/if}
        {#each filters as filter (filter.id)}
          <div class="font-elec flex flex-col justify-end gap-1 pt-6 sm:pt-0">
            <label for={filter.id} class="text-sm font-semibold text-neutral-300/80">
              {filter.label}
            </label>
            <div
              class="flex items-center justify-center rounded-lg bg-primary font-semibold text-neutral-300/80">
              {#if filter.withDirection}
                <select
                  class="rounded-l-lg border-b-0 border-l-0 border-r-2 border-t-0 border-r-white/20 bg-primary py-1 pl-3 pr-2 text-base focus:outline-none focus:ring-1 focus:ring-secondary"
                  id={filter.id}
                  bind:value={filter.state.option.value}>
                  {#each filter.options as option (option.value)}
                    <option value={option.value}>
                      {option.label}
                    </option>
                  {/each}
                </select>
                <button
                  onclick={toggleDirection}
                  class="rounded-r-lg px-2 py-1 hover:bg-slate-700/50">
                  <Icon icon={filter.state.direction.icon} width="1.5rem" class="shrink-0" />
                </button>
              {:else}
                <select
                  class="rounded-lg border-none bg-primary py-1 pl-3 pr-2 text-base focus:outline-none focus:ring-1 focus:ring-secondary"
                  id={filter.id}
                  bind:value={filter.state.value}>
                  {#each filter.options as option (option.value)}
                    <option value={option.value}>{option.label}</option>
                  {/each}
                </select>
              {/if}
            </div>
          </div>
        {/each}
      </div>
    </div>
    <!-- DEBUG: Force derived to run -->
    <div style="display: none;">
      Debug technologies: {JSON.stringify(usedTechnologiesArray)}
    </div>

    <ul class="my-12 grid w-full gap-16 overflow-y-auto lg:grid-cols-3 lg:gap-x-0 lg:gap-y-5">
      {#if displayPosts.length > 0}
        {#each displayPosts as entry (entry.slug)}
          <ProjectThumb {entry} />
        {/each}
      {:else}
        <p class="col-span-full text-center text-neutral-400">
          Geen projecten gevonden die voldoen aan de criteria.
        </p>
      {/if}
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
  select option {
    background-color: theme(colors.primary / 1);
    color: theme(colors.neutral.300 / 0.8);
  }
</style>
