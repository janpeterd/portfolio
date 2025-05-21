<script>
  import Icon from '@iconify/svelte'
  import { pathToFileName, getIconByExtension, getColorByExtension } from '$lib/utils'
  let props = $props()
</script>

<div class="mb-12 flex max-w-lg flex-col gap-4 rounded-lg bg-white/10 p-6">
  <h2 class="flex gap-4 border-b-2 border-b-gray-600/20 pb-4 text-lg font-bold">
    <Icon icon="mdi:attachment" width="2rem" class="text-secondary" />
    Bijlagen
  </h2>
  {#each props?.data?.attachments as attachment}
    <a
      href={attachment}
      target="_blank"
      rel="noopener noreferrer"
      class={`flex items-center gap-2 font-medium transition-all hover:text-white`}>
      <Icon
        icon={getIconByExtension(attachment.replace(/.*\.(.*?$)/, '$1'))}
        width="2.0rem"
        class={`${getColorByExtension(attachment.replace(/.*\.(.*?$)/, '$1')) ?? 'text-secondary'}`} />
      <span class="font-bold">{pathToFileName(attachment)}</span>
      <Icon icon="mdi:external-link" width="1rem" />
    </a>
  {/each}
  {#if props?.data?.repo}
    <a
      href={props?.data?.repo}
      target="_blank"
      rel="noopener noreferrer"
      class={`flex items-center gap-2 font-medium transition-all hover:text-white`}>
      <Icon icon="material-icon-theme:git" width="2.0rem" class="text-[#e64a19]" />
      <span class="font-bold">{new URL(props?.data?.repo).hostname}</span>
      <Icon icon="mdi:external-link" width="1rem" />
    </a>
  {/if}
  {#if props?.data?.link}
    <a
      href={props?.data?.link}
      target="_blank"
      rel="noopener noreferrer"
      class={`flex items-center gap-2 font-medium transition-all hover:text-white`}>
      <Icon icon="iconamoon:link-external-duotone" width="2.0rem" class="text-[#008FE6]" />
      <span class="font-bold">{props?.data?.link}</span>
      <Icon icon="mdi:external-link" width="1rem" />
    </a>
  {/if}
  {#if props?.data?.video}
    <a
      href={props?.data?.video}
      target="_blank"
      rel="noopener noreferrer"
      class={`flex items-center gap-2 font-medium transition-all hover:text-white`}>
      <Icon icon="mdi:video-box" width="2.0rem" class="text-red-500" />
      <span class="font-bold">{props?.data?.video}</span>
      <Icon icon="mdi:external-link" width="1rem" />
    </a>
  {/if}
</div>
