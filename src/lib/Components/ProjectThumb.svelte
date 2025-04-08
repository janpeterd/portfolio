<script>
  import Icon from '@iconify/svelte'
  import { pathToFileName, getIconByExtension, getColorByExtension } from '$lib/utils'
  import Tooltip from '$lib/Components/Tooltip.svelte'

  let { entry } = $props()
  const link = $derived(`/projects/${entry.slug}`)
</script>

<li class="mx-auto flex w-full min-w-full max-w-full gap-14 px-1 py-3 lg:px-4">
  <article class="group flex w-full flex-col gap-4 rounded">
    <a
      data-sveltekit-preload-data="hover"
      href={link}
      class="flex w-full flex-col items-start justify-center gap-2 truncate font-medium transition-all group-hover:text-secondary">
      <h2
        class="title w-full truncate text-2xl font-bold hover:text-slate-200 md:text-3xl lg:text-4xl">
        {entry.title}
      </h2>
      <div class="w-full text-sm font-medium text-slate-400">
        <p class="w-full font-bold text-slate-400">
          {new Date(entry.date).toLocaleDateString('nl-BE')}
        </p>
      </div>
    </a>
    <div
      class={`flex w-full flex-col gap-2 rounded-xl ${entry.attachments && entry.attachments.length > 0 && 'bg-white/10 p-3'}`}>
      <a
        href={link}
        class="flex w-full flex-col items-start justify-center gap-4 truncate font-medium text-secondary transition-all hover:scale-105 hover:text-white">
        <img
          src={entry.thumbnail}
          alt={entry.title}
          class="aspect-[16/9] w-full rounded-xl object-cover" />
      </a>
      <div class="flex items-center justify-start gap-1">
        {#if entry.attachments && entry.attachments.length > 0}
          <h2 class="me-4 text-sm font-bold">
            <Icon icon="mdi:attachment" width="2rem" class="text-secondary" />
          </h2>
          <div class="flex gap-1">
            {#each entry.attachments as attachment}
              <Tooltip>
                {#snippet tooltipContent()}
                  <div class="flex items-center justify-center gap-2">
                    <Icon
                      icon={getIconByExtension(attachment.replace(/.*\.(.*?$)/, '$1'))}
                      class={`font-medium ${getColorByExtension(attachment.replace(/.*\.(.*?$)/, '$1')) ?? 'text-secondary'} transition-all hover:text-white`}
                      width="1.5rem" />
                    <span class="text-sm">{pathToFileName(attachment)}</span>
                  </div>
                {/snippet}

                {#snippet children()}
                  <a
                    href={attachment}
                    target="_blank"
                    rel="noopener noreferrer"
                    class={`flex items-center font-medium ${getColorByExtension(attachment.replace(/.*\.(.*?$)/, '$1')) ?? 'text-secondary'} transition-all hover:text-white`}>
                    <Icon
                      icon={getIconByExtension(attachment.replace(/.*\.(.*?$)/, '$1'))}
                      width="2rem" />
                  </a>
                {/snippet}
              </Tooltip>
            {/each}
          </div>
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
