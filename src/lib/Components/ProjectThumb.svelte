<script>
  import Icon from '@iconify/svelte'
  import Tooltip from '$lib/Components/Tooltip.svelte'
  import ProjectThumbLink from './ProjectThumbLink.svelte'
  import { onMount } from 'svelte'
  import { storageCleared } from '../../stores'

  let { entry, technologies = [] } = $props()

  const VISIBLE_TECH_LIMIT = 4

  const link = $derived(`/projects/${entry.slug}`)
  const visibleTechs = $derived(technologies.slice(0, VISIBLE_TECH_LIMIT))
  const hiddenTechCount = $derived(Math.max(0, technologies.length - VISIBLE_TECH_LIMIT))
  const hiddenTechNames = $derived(
    hiddenTechCount > 0
      ? technologies
          .slice(VISIBLE_TECH_LIMIT)
          .map((t) => t.name)
          .join(', ')
      : ''
  )

  // This handles all link types correctly now.
  const allActionLinks = $derived(
    !!(
      entry.link ||
      entry.repo ||
      entry.repos?.length > 0 ||
      entry.attachments?.length > 0 ||
      entry.video
    )
  )

  let hasRead = $state(false)

  onMount(() => {
    const readStatus = JSON.parse(localStorage.getItem('PostReadStatus'))
    hasRead = Boolean(readStatus ? readStatus[entry.slug] : false)
  })

  $effect(() => {
    if ($storageCleared) {
      const readStatus = JSON.parse(localStorage.getItem('PostReadStatus'))
      hasRead = Boolean(readStatus ? readStatus[entry.slug] : false)
    }
  })
</script>

<article
  class="group relative flex h-full flex-col overflow-visible rounded-lg border border-border bg-card text-card-foreground shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
  class:opacity-60={hasRead}
  class:hover:opacity-100={hasRead}>
  <a href={link} data-sveltekit-preload-data="hover" class="flex flex-1 flex-col">
    <div class="relative overflow-hidden">
      <img
        src={entry.thumbnail}
        alt="Thumbnail for {entry.title}"
        class="aspect-[16/9] w-full bg-muted object-cover transition-transform duration-300 group-hover:scale-105" />
      <div class="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
      {#if entry.highlight}
        <div
          class="absolute right-3 top-3 z-10 rounded-full bg-primary px-2.5 py-1 text-xs font-semibold text-primary-foreground">
          Suggestie
        </div>
      {/if}
    </div>

    <div class="flex flex-1 flex-col p-6">
      <div class="flex items-center justify-between text-sm text-muted-foreground">
        <p>
          {new Date(entry.date).toLocaleDateString('nl-NL', {
            year: 'numeric',
            month: '2-digit',
            day: '2-digit'
          })}
        </p>
        {#if hasRead}
          <Tooltip>
            {#snippet tooltipContent()}
              <div
                class="rounded-md bg-popover p-2 text-xs font-medium text-popover-foreground shadow-lg">
                Gelezen
              </div>
            {/snippet}
            {#snippet children()}
              <Icon icon="mdi:eye-check-outline" class="h-5 w-5" />
            {/snippet}
          </Tooltip>
        {/if}
      </div>

      <h2
        class="mt-2 line-clamp-2 text-lg font-semibold text-foreground transition-colors group-hover:text-primary">
        {entry.title}
      </h2>

      {#if technologies.length > 0}
        <div class="mt-4 flex items-center gap-3">
          {#each visibleTechs as technology (technology.name)}
            <Tooltip>
              {#snippet tooltipContent()}
                <div
                  class="rounded-md bg-popover px-2 py-1 text-xs font-medium capitalize text-popover-foreground shadow-lg">
                  {technology.name}
                </div>
              {/snippet}
              {#snippet children()}
                <img
                  src={`/img/technologies/${technology.image}`}
                  class="h-6 w-6 object-contain"
                  alt={technology.name} />
              {/snippet}
            </Tooltip>
          {/each}
          {#if hiddenTechCount > 0}
            <Tooltip>
              {#snippet tooltipContent()}
                <div
                  class="max-w-xs rounded-md bg-popover px-2 py-1 text-xs font-medium text-popover-foreground shadow-lg">
                  {hiddenTechNames}
                </div>
              {/snippet}
              {#snippet children()}
                <div
                  class="flex h-6 w-6 items-center justify-center rounded-full bg-muted text-xs font-semibold text-muted-foreground">
                  +{hiddenTechCount}
                </div>
              {/snippet}
            </Tooltip>
          {/if}
        </div>
      {/if}

      {#if entry.description}
        <p class="mt-4 flex-1 text-sm text-muted-foreground">
          {entry.description}
        </p>
      {/if}
    </div>
  </a>

  {#if allActionLinks}
    <div class="mt-auto flex items-center justify-end gap-3 border-t border-border px-4 py-3">
      {#if entry.attachments && entry.attachments.length > 0}
        {#each entry.attachments as attachment}
          <ProjectThumbLink destination={attachment} type={'attachment'} />
        {/each}
      {/if}
      {#if entry.video}
        <ProjectThumbLink destination={entry.video} type={'video'} />
      {/if}

      {#if entry.repo && !entry.repos}
        <ProjectThumbLink destination={entry.repo} type={'repo'} showText={true} />
      {/if}

      {#if entry.repos && entry.repos.length > 0}
        {#if entry.repos.length === 1}
          <ProjectThumbLink destination={entry.repos[0]} type={'repo'} showText={true} />
        {:else}
          <ProjectThumbLink destination={entry.repos} type={'repo'} />
        {/if}
      {/if}

      {#if entry.link}
        <ProjectThumbLink destination={entry.link} type={'link'} showText={true} />
      {/if}
    </div>
  {/if}
</article>
