<script>
  import ProjectThumb from '$lib/Components/ProjectThumb.svelte'
  import Icon from '@iconify/svelte'
  import { onMount } from 'svelte'
  import { page } from '$app/stores'
  import { goto } from '$app/navigation'
  import MultiSelect from 'svelte-multiselect'
  import { storageCleared } from '../../stores'
  import Tooltip from '$lib/Components/Tooltip.svelte'
  import HomeTitle from '$lib/Components/HomeTitle.svelte'
  import SectionDivider from '$lib/Components/SectionDivider.svelte'

  let { data } = $props()
  const posts = data?.posts || []
  const technologies = data?.technologies || []

  const sortOptions = [
    { label: 'Datum', value: 'date' },
    { label: 'Suggestie', value: 'favorite' }
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

  const getTechnologyIconByName = (name) => {
    const tech = technologies.find((t) => t.name.toLowerCase() === name.toLowerCase())
    if (!tech || !tech.image) {
      return 'default-icon.svg'
    }
    return tech.image
  }

  const toggleDirection = () => {
    sort.direction = sort.direction.value === 'descending' ? sortDirections[1] : sortDirections[0]
  }

  const initialTechParam = initialUrlParams.get('technology')
  const initialTechLabelsFromUrl = initialTechParam
    ? initialTechParam.split(',').map((tech) => tech.trim().toLowerCase())
    : []

  const allUsedTechs = (() => {
    const techMap = new Map()
    if (posts && posts.length > 0) {
      posts.forEach((post) => {
        if (post?.technologies?.length) {
          post.technologies.forEach((tech) => {
            if (typeof tech === 'string') {
              const techNameLower = tech.trim().toLowerCase()
              if (!techMap.has(techNameLower)) {
                techMap.set(techNameLower, {
                  label: techNameLower,
                  value: techNameLower,
                  preselected: initialTechLabelsFromUrl.includes(techNameLower)
                })
              }
            }
          })
        }
      })
    }
    return Array.from(techMap.values()).sort((a, b) => a.label.localeCompare(b.label))
  })()

  let selectedTechnologies = $state(allUsedTechs.filter((techObject) => techObject.preselected))

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

  let displayPosts = $state([])

  $effect(() => {
    let processedPosts = [...posts]

    if (selectedTechnologies.length > 0) {
      const selectedTechLabels = selectedTechnologies.map((techObj) => techObj.label)
      processedPosts = processedPosts.filter((post) => {
        if (!post?.technologies || post.technologies.length === 0) {
          return false
        }
        const postTechsLower = post.technologies.map((t) => String(t).toLowerCase())
        return selectedTechLabels.every((selectedLabel) => postTechsLower.includes(selectedLabel))
      })
    }

    const sortOpt = sort.option.value
    const sortDir = sort.direction.value

    if (sortOpt === 'date') {
      processedPosts.sort((a, b) => {
        const dateA = new Date(a.date)
        const dateB = new Date(b.date)
        return sortDir === 'ascending'
          ? dateA.getTime() - dateB.getTime()
          : dateB.getTime() - dateA.getTime()
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

  $effect(() => {
    const newParams = new URLSearchParams()
    newParams.set('sort', sort.option.value)
    newParams.set('direction', sort.direction.value)

    if (selectedTechnologies.length > 0) {
      const selectedTechLabels = selectedTechnologies.map((techObj) => techObj.label)
      newParams.set('technology', selectedTechLabels.join(','))
    } else {
      newParams.delete('technology')
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
    content="Projecten door Jan-Peter Dhallé, student toegepaste informatica" />
  <meta
    property="og:description"
    content="Projecten door Jan-Peter Dhallé, student toegepaste informatica" />
  <meta property="og:title" content="Projecten - Portfolio Jan-Peter" />
</svelte:head>

<div class="w-full py-16 sm:py-24">
  <SectionDivider class="text-transparent dark:text-primary" />
  <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
    <div
      class="flex flex-col items-start gap-8 border-b border-border pb-6 md:flex-row md:items-center md:justify-between">
      <HomeTitle title="Projecten" id="projects" className="!py-0 !max-w-40" />

      <div class="flex w-full flex-col items-stretch gap-4 sm:flex-row sm:items-end sm:justify-end">
        <div>
          <label for="techFilter" class="block text-sm font-medium text-foreground">
            Technologie
          </label>
          <div class="mt-1 w-full">
            <MultiSelect
              id="techFilter"
              options={allUsedTechs}
              placeholder="Filter op technologie..."
              bind:selected={selectedTechnologies}
              outerDivClass="!py-[0.30rem] !rounded-md !border-border dark:!bg-background shadow-sm !text-sm focus-within:!border-primary focus-within:!ring-1 focus-within:!ring-primary"
              ulOptionsClass="!border-border !mt-1 dark:!bg-background-alt"
              liOptionClass="hover:!bg-muted hover:!text-foreground"
              liActiveOptionClass="!bg-primary !text-primary-foreground"
              inputClass="!text-foreground">
              {#snippet children({ option })}
                <div class="flex items-center gap-2.5">
                  <img
                    src={`/img/technologies/${getTechnologyIconByName(option.label)}`}
                    class="h-5 w-5 object-contain"
                    alt={option.label} />
                  <span class="capitalize">{option.label}</span>
                </div>
              {/snippet}
            </MultiSelect>
          </div>
        </div>

        <div>
          <label for="sort" class="block text-sm font-medium text-foreground">Sorteer</label>
          <div class="mt-1 flex rounded-md shadow-sm">
            <select
              id="sort"
              bind:value={sort.option.value}
              class="block w-full rounded-l-md border-border bg-background py-2 pl-3 pr-10 text-base text-foreground focus:border-primary focus:outline-none focus:ring-primary sm:text-sm">
              {#each sortOptions as option (option.value)}
                <option value={option.value}>{option.label}</option>
              {/each}
            </select>
            <button
              onclick={toggleDirection}
              aria-label={`Sort direction: ${sort.direction.label}`}
              class="relative -ml-px inline-flex items-center space-x-2 rounded-r-md border border-border bg-muted px-4 py-2 text-sm font-medium text-muted-foreground hover:bg-primary focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary">
              <Icon icon={sort.direction.icon} width="1.25rem" class="shrink-0" />
            </button>
          </div>
        </div>

        {#if hasReadAnything}
          <div class="flex items-end pb-0.5">
            <Tooltip className="flex">
              {#snippet tooltipContent()}
                <div
                  class="rounded-md bg-popover p-2 text-xs font-medium text-popover-foreground shadow-lg">
                  Maak alle projecten ongelezen
                </div>
              {/snippet}
              {#snippet children()}
                <button
                  onclick={reset_read}
                  class="flex items-center justify-center gap-2 rounded-md border border-border bg-background px-3 py-2 text-sm font-medium text-foreground transition-colors hover:bg-primary hover:text-primary-foreground">
                  <span>Reset Gelezen</span>
                  <Icon icon="mdi:eye-refresh-outline" width="1.25rem" class="shrink-0" />
                </button>
              {/snippet}
            </Tooltip>
          </div>
        {/if}
      </div>
    </div>

    {#if displayPosts.length > 0}
      <ul class="mt-12 grid grid-cols-1 gap-x-8 gap-y-16 sm:grid-cols-2 lg:grid-cols-3">
        {#each displayPosts as entry (entry.slug)}
          <li>
            <ProjectThumb {entry} />
          </li>
        {/each}
      </ul>
    {:else}
      <div class="py-16 text-center">
        <Icon icon="mdi:folder-search-outline" class="mx-auto h-12 w-12 text-muted-foreground" />
        <h3 class="mt-2 text-lg font-medium text-foreground">Geen projecten gevonden</h3>
        <p class="mt-1 text-sm text-muted-foreground">
          Geen projecten voldeden aan uw filtercriteria. Probeer andere opties te selecteren.
        </p>
      </div>
    {/if}
  </div>
</div>
