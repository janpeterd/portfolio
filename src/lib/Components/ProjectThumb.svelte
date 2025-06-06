<script>
  import Icon from '@iconify/svelte'
  import Tooltip from '$lib/Components/Tooltip.svelte'
  import ProjectThumbLink from './ProjectThumbLink.svelte'
  import { onMount } from 'svelte'
  import { storageCleared } from '../../stores'

  let { entry } = $props()
  const link = $derived(`/projects/${entry.slug}`)
  const hasExtras = $derived(
    !!(entry?.attachments?.length > 0 || entry?.repos?.length > 0 || entry?.video || entry?.link)
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
  class="group relative flex h-full flex-col overflow-hidden rounded-lg border border-border bg-card text-card-foreground shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
  class:opacity-60={hasRead}
  class:hover:opacity-100={hasRead}>
  {#if entry.highlight}
    <div
      class="absolute right-3 top-3 z-10 rounded-full bg-primary px-2.5 py-1 text-xs font-semibold text-primary-foreground">
      Suggestie
    </div>
  {/if}

  <a href={link} data-sveltekit-preload-data="hover" class="flex flex-1 flex-col">
    <div class="relative">
      <img
        src={entry.thumbnail}
        alt="Thumbnail for {entry.title}"
        class="aspect-[16/9] w-full object-cover" />
      <div class="absolute inset-0 bg-black/5 transition-colors group-hover:bg-black/0"></div>
    </div>

    <div class="flex flex-1 flex-col p-6">
      <div class="flex items-center justify-between text-sm text-muted-foreground">
        <p>
          {new Date(entry.date).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
          })}
        </p>
        {#if hasRead}
          <Tooltip>
            {#snippet tooltipContent()}
              <div
                class="rounded-md bg-popover p-2 text-xs font-medium text-popover-foreground shadow-lg">
                Je hebt dit gelezen
              </div>
            {/snippet}
            {#snippet children()}
              <Icon icon="mdi:eye-check-outline" class="h-5 w-5" />
            {/snippet}
          </Tooltip>
        {/if}
      </div>

      <h2
        class="mt-2 line-clamp-2 text-lg font-semibold text-card-foreground group-hover:text-primary">
        {entry.title}
      </h2>
    </div>
  </a>

  {#if hasExtras}
    <div class="mt-auto flex flex-wrap items-center gap-x-1 gap-y-2 border-t border-border p-4">
      {#if entry.attachments && entry.attachments.length > 0}
        {#each entry.attachments as attachment}
          <ProjectThumbLink destination={attachment} type={'attachment'} />
        {/each}
      {/if}
      {#if entry.link}
        <ProjectThumbLink destination={entry.link} type={'link'} />
      {/if}
      {#if entry.repo}
        <ProjectThumbLink destination={entry.repo} type={'repo'} />
      {/if}
      {#if entry.repos && entry.repos.length > 0}
        {#each entry.repos as repo}
          <ProjectThumbLink destination={repo} type={'repo'} />
        {/each}
      {/if}
      {#if entry.video}
        <ProjectThumbLink destination={entry.video} type={'video'} />
      {/if}
    </div>
  {/if}
</article>
