<script>
  import Icon from '@iconify/svelte'
  import { pathToFileName, getIconByExtension, getIconAndColorForUrl } from '$lib/utils'
  import Tooltip from '$lib/Components/Tooltip.svelte'

  // --- PROPS ---
  let { destination, type, showText = false } = $props()

  // --- STATE for Dropdown ---
  let isOpen = $state(false)

  // --- LOGIC ---
  let linkObj = $state({})
  let isMultiRepo = $derived(
    type === 'repo' && Array.isArray(destination) && destination.length > 1
  )

  // Custom Svelte Action to detect clicks outside an element
  function clickOutside(node) {
    const handleClick = (event) => {
      if (node && !node.contains(event.target) && !event.defaultPrevented) {
        isOpen = false
      }
    }
    document.addEventListener('click', handleClick, true)
    return {
      destroy() {
        document.removeEventListener('click', handleClick, true)
      }
    }
  }

  $effect(() => {
    // This logic runs for single links
    if (!isMultiRepo) {
      const url =
        typeof destination === 'object' ? destination.url || destination.path : destination
      const name = typeof destination === 'object' ? destination.name : ''
      let icon, displayName, tooltipText, baseClasses, hoverClasses, textColor

      switch (type) {
        case 'link':
          icon = 'mdi:open-in-new'
          displayName = name || 'Demo'
          tooltipText = 'Bekijk live demo'
          baseClasses = 'bg-primary'
          textColor = 'text-primary-foreground'
          hoverClasses = 'hover:bg-primary/90'
          break
        case 'repo':
          icon = 'mdi:github'
          displayName = name || 'Code'
          tooltipText = 'Bekijk broncode'
          baseClasses = 'bg-muted'
          textColor = 'text-foreground'
          hoverClasses = 'hover:bg-muted/80'
          break
        case 'video':
          icon = 'mdi:video'
          displayName = 'Video'
          tooltipText = 'Bekijk video'
          baseClasses = 'bg-muted'
          textColor = 'text-foreground'
          hoverClasses = 'hover:bg-muted/80'
          break
        case 'attachment':
          icon = getIconByExtension(url.replace(/.*\.(.*?$)/, '$1'))
          displayName = name || pathToFileName(url)
          tooltipText = `Download: ${displayName}`
          baseClasses = 'bg-muted'
          textColor = 'text-foreground'
          hoverClasses = 'hover:bg-muted/80'
          break
        default:
          icon = 'mdi:alert-circle-outline'
          displayName = 'Error'
          tooltipText = 'Onbekende link'
          baseClasses = 'bg-destructive'
          textColor = 'text-destructive-foreground'
          hoverClasses = 'hover:bg-destructive/90'
      }
      linkObj = { url, icon, displayName, tooltipText, baseClasses, hoverClasses, textColor }
    }
  })
</script>

{#if isMultiRepo}
  <!-- DROPDOWN MODE for multiple repositories -->
  <div class="relative" use:clickOutside>
    <Tooltip>
      {#snippet tooltipContent()}
        <div
          class="rounded-md bg-popover px-2 py-1 text-xs font-medium text-popover-foreground shadow-lg">
          Bekijk repositories
        </div>
      {/snippet}
      {#snippet children()}
        <button
          onclick={() => (isOpen = !isOpen)}
          class="inline-flex h-9 items-center justify-center gap-2 whitespace-nowrap rounded-md bg-muted px-3 text-sm font-medium text-foreground transition-transform duration-200 hover:scale-105 hover:bg-muted/80"
          aria-haspopup="true"
          aria-expanded={isOpen}>
          <Icon icon="mdi:github" class="h-5 w-5" />
          <span>Code</span>
          <Icon
            icon="mdi:chevron-down"
            class={`h-4 w-4 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
        </button>
      {/snippet}
    </Tooltip>

    {#if isOpen}
      <div
        class="absolute bottom-full z-10 mb-2 w-48 origin-bottom-right rounded-md border border-border bg-popover p-1 text-popover-foreground shadow-lg">
        {#each destination as repo}
          <a
            href={repo.url}
            target="_blank"
            rel="noopener noreferrer"
            class="flex w-full items-center gap-2 rounded-sm px-2 py-1.5 text-sm hover:bg-muted">
            <Icon icon="mdi:github" class="h-4 w-4" />
            <span>{repo.name || 'Repository'}</span>
          </a>
        {/each}
      </div>
    {/if}
  </div>
{:else}
  <!-- SINGLE LINK MODE (original logic) -->
  <Tooltip>
    {#snippet tooltipContent()}
      <div
        class="rounded-md bg-popover px-2 py-1 text-xs font-medium text-popover-foreground shadow-lg">
        {linkObj.tooltipText}
      </div>
    {/snippet}

    {#snippet children()}
      <a
        href={linkObj.url}
        target="_blank"
        rel="noopener noreferrer"
        class="transition-transform duration-200 hover:scale-105"
        aria-label={linkObj.tooltipText}>
        {#if showText}
          <div
            class="inline-flex h-9 items-center justify-center gap-2 whitespace-nowrap rounded-md px-3 text-sm font-medium {linkObj.baseClasses} {linkObj.textColor} {linkObj.hoverClasses}">
            <Icon icon={linkObj.icon} class="h-5 w-5" />
            <span>{linkObj.displayName}</span>
          </div>
        {:else}
          <div
            class="inline-flex h-9 w-9 items-center justify-center rounded-full {linkObj.baseClasses} {linkObj.textColor} {linkObj.hoverClasses}">
            <Icon icon={linkObj.icon} class="h-5 w-5" />
          </div>
        {/if}
      </a>
    {/snippet}
  </Tooltip>
{/if}
