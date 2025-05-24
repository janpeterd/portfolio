<script>
  import Icon from '@iconify/svelte'
  import {
    pathToFileName,
    getIconByExtension,
    getColorByExtension,
    getIconAndColorForUrl
  } from '$lib/utils'
  import Tooltip from '$lib/Components/Tooltip.svelte'
  let props = $props()
  let linkObj = $state({})

  switch (props.type) {
    case 'link':
      linkObj = {
        icon: 'iconamoon:link-external-duotone',
        textColor: 'text-[#008FE6]',
        text: props.destination
      }
      break
    case 'video':
      linkObj = {
        icon: getIconAndColorForUrl(props.destination)?.icon ?? 'mdi:video-box',
        textColor: getIconAndColorForUrl(props.destination)?.textColor ?? 'text-red-500',
        text: props.destination
      }
      break
    case 'repo':
      linkObj = {
        icon: getIconAndColorForUrl(props.destination)?.icon ?? 'material-icon-theme:git',
        textColor: getIconAndColorForUrl(props.destination)?.textColor ?? 'text-[#e64a19]',
        text: props.destination
      }
      break
    case 'attachment':
      linkObj = {
        icon: getIconByExtension(props.destination.replace(/.*\.(.*?$)/, '$1')),
        textColor:
          getColorByExtension(props.destination.replace(/.*\.(.*?$)/, '$1')) ?? 'text-secondary',
        text: pathToFileName(props.destination)
      }
      break
    case 'image':
      linkObj = {
        icon: 'mdi:image',
        textColor: 'text-secondary',
        text: pathToFileName(props.destination)
      }
      break
    default:
      linkObj = {
        icon: 'mdi:link-off',
        textColor: 'text-pink-500',
        text: 'Unknown link type'
      }
  }
</script>

<Tooltip>
  {#snippet tooltipContent()}
    <div class={props.type === 'image' ? 'rounded-lg border-2 border-white/10 p-2' : ''}>
      <div
        class={`flex items-center gap-2 ${props.type === 'image' ? 'justify-start ' : 'justify-center'}`}>
        <Icon
          icon={linkObj.icon}
          class={linkObj.textColor}
          width={props.type === 'image' ? '2rem' : '1.5rem'} />
        <span class={props.type === 'image' ? 'text-md' : 'text-sm'}>
          {linkObj.text}
        </span>
      </div>
      {#if props.type === 'image'}
        <a href={props.destination} target="_blank" rel="noopener noreferrer" class="flex flex-col">
          <img
            src={props.destination}
            alt={linkObj.text}
            class="my-2 max-h-[25vh] max-w-[85vw] rounded-xl object-cover md:max-h-[40vh] md:max-w-3xl" />
          <span class="text-xs text-slate-300">Move your cursor to hide this image view</span>
        </a>
      {/if}
    </div>
  {/snippet}

  {#snippet children()}
    <a
      href={props.destination}
      target="_blank"
      rel="noopener noreferrer"
      class={`flex items-center font-medium ${linkObj.textColor} transition-all duration-200 hover:scale-125 hover:text-white`}>
      <Icon icon={linkObj.icon} width="2rem" />
    </a>
  {/snippet}
</Tooltip>
