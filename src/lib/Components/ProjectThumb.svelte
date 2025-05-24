<script>
  import Icon from '@iconify/svelte'
  import { pathToFileName, getIconByExtension, getColorByExtension } from '$lib/utils'
  import Tooltip from '$lib/Components/Tooltip.svelte'
  import ProjectThumbLink from './ProjectThumbLink.svelte'
  import { onMount } from 'svelte'
  import { storageCleared } from '../../stores.js'

  let { entry } = $props()
  const link = $derived(`/projects/${entry.slug}`)
  const hasExtras = $derived(
    !!(
      entry?.attachments?.length > 0 ||
      entry?.repo ||
      entry?.video ||
      entry?.link ||
      entry?.images?.length > 0
    )
  )
  let hasRead = $state(false)
  onMount(() => {
    const readStatus = JSON.parse(localStorage.getItem('PostReadStatus'))
    hasRead = Boolean(readStatus ? readStatus[entry.slug] : false)
  })

  $effect(() => {
    if ($storageCleared === true) {
      const readStatus = JSON.parse(localStorage.getItem('PostReadStatus'))
      hasRead = Boolean(readStatus ? readStatus[entry.slug] : false)
    }
  })
</script>

<li class="mx-auto flex w-full min-w-full max-w-full gap-14 px-1 py-3 lg:px-4">
  <article class="group flex w-full flex-col gap-4 rounded">
    <div
      class={`flex w-full flex-col gap-2 rounded-xl bg-white/10 p-3 transition-all ${entry?.highlight ? 'border-2 border-yellow-400/40 shadow-2xl shadow-yellow-500/20' : ''} ${hasRead ? 'saturate-75 brightness-75 contrast-75 hover:brightness-100 hover:contrast-100 hover:saturate-100' : ''}`}>
      <a
        data-sveltekit-preload-data="hover"
        href={link}
        class="flex w-full flex-col items-start justify-center gap-2 overflow-hidden truncate font-medium transition-all group-hover:text-secondary">
        <div class="flex w-full items-center text-sm font-medium text-slate-400">
          <p class="w-full font-bold text-slate-400">
            {new Date(entry.date).toLocaleDateString('nl-BE')}
          </p>
          {#if hasRead === true}
            <Tooltip>
              {#snippet tooltipContent()}
                <span class="text-white">You have read this</span>
              {/snippet}
              {#snippet children()}
                <Icon icon="mdi:eye" width="1.6rem" class="shrink-0 text-slate-400" />
              {/snippet}
            </Tooltip>
          {/if}
        </div>
        {#if entry.title.length > 20}
          <Tooltip>
            {#snippet tooltipContent()}
              <span class="text-white">{entry.title}</span>
            {/snippet}
            {#snippet children()}
              <div class="flex items-center">
                {#if entry.highlight}
                  <Icon icon="mdi:star" width="1.6rem" class="shrink-0 text-yellow-400" />
                {/if}
                <h2
                  class="title my-4 max-w-full truncate text-2xl font-bold hover:text-slate-200 md:text-3xl lg:text-4xl">
                  {entry.title}
                </h2>
              </div>
            {/snippet}
          </Tooltip>
        {:else}
          <div class="flex items-center">
            {#if entry.highlight}
              <Icon icon="mdi:star" width="1.6rem" class="shrink-0 text-yellow-400" />
            {/if}
            <h2
              class="title my-4 flex max-w-full items-center truncate text-2xl font-bold hover:text-slate-200 md:text-3xl lg:text-4xl">
              {entry.title}
            </h2>
          </div>
        {/if}
      </a>
      <a
        href={link}
        class="flex w-full flex-col items-start justify-center gap-4 truncate font-medium text-secondary transition-all hover:scale-105 hover:text-white">
        <img
          src={entry.thumbnail}
          alt={entry.title}
          class="aspect-[16/9] w-full rounded-xl object-cover" />
      </a>
      <div class="flex items-center justify-start gap-2">
        {#if hasExtras}
          <h2 class="me-4 text-sm font-bold">
            <Icon icon="mdi:attachment" width="2rem" class="text-secondary" />
          </h2>
        {/if}
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
        {#if entry.video}
          <ProjectThumbLink destination={entry.video} type={'video'} />
        {/if}
        {#if entry.images && entry.images.length > 0}
          {#each entry.images as image}
            <ProjectThumbLink destination={image} type={'image'} />
          {/each}
        {/if}
      </div>
    </div>
    <a
      href={link}
      class="flex max-w-max items-center gap-4 font-medium text-secondary transition-all hover:text-white">
      Lees <Icon icon="mdi:arrow-right" width="1rem" />
    </a>
  </article>
</li>
