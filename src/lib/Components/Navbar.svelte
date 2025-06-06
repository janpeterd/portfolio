<script>
  import NavLink from '$lib/Components/NavLink.svelte'
  import Icon from '@iconify/svelte'
  import LogoImg from '$lib/Components/LogoImg.svelte'
  import Logo3d from '$lib/Components/Logo3d.svelte'
  import { Canvas } from '@threlte/core'
  import { getIsMobile } from '$lib/utils'
  import { onMount } from 'svelte'
  import { fade } from 'svelte/transition'
  import MobileNavLink from './MobileNavLink.svelte'
  import { goto } from '$app/navigation'

  let isExpanded = $state(false)
  let links = [
    { href: '/', name: 'Home' },
    { href: '/#about', name: 'Over mij' },
    { href: '/projects', name: 'Projecten' },
    { href: '/stage', name: 'Stage' },
    { href: '/cv', name: 'Cv' },
    { href: '/card', name: 'Contact' }
  ]

  function toggleExpanded() {
    isExpanded = !isExpanded
    // add overflow hidden to body
    if (isExpanded) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
  }

  function debounce(func, delay) {
    let timeout
    return function (...args) {
      const context = this
      clearTimeout(timeout)
      timeout = setTimeout(() => func.apply(context, args), delay)
    }
  }
</script>

{#if isExpanded}
  <div
    class="sticky top-0 z-20 flex h-dvh w-dvw backdrop-blur-xl backdrop-brightness-50 backdrop-saturate-150"
    transition:fade={{ duration: 100 }}>
  </div>
{/if}

<header
  class="sticky top-0 z-20 flex w-screen justify-between bg-transparent pt-2 font-tight print:hidden">
  <button
    class="justify-content flex w-auto flex-shrink cursor-pointer items-center rounded-full bg-background-alt pr-4 backdrop-blur backdrop-saturate-150 [view-transition-name:header-left]"
    onclick={goto('/')}>
    <div class="-top-18 absolute -left-12 z-0 h-[180px] w-48">
      <Canvas>
        <Logo3d />
      </Canvas>
    </div>
    <NavLink>
      <div class="ml-12 min-w-[220px] pl-10 font-bold">Portfolio Jan&#8209Peter Dhallé</div>
    </NavLink>
  </button>
  <div
    class="justify-content m-2 hidden flex-shrink-0 items-center gap-x-2 rounded-full bg-background-alt px-2 backdrop-blur-lg backdrop-saturate-150 [view-transition-name:header-right] md:flex">
    {#each links as link}
      <NavLink href={link.href}>{link.name}</NavLink>
    {/each}
  </div>

  <button
    class="justify-content float-right m-2 flex items-center p-3 md:hidden"
    aria-label="hamburger menu"
    onclick={toggleExpanded}>
    <Icon
      icon="mdi:hamburger-menu"
      width="1.8rem"
      class={`z-10 ${isExpanded ? 'invisible' : ''}`} />
  </button>
  {#if isExpanded}
    <div
      class="absolute top-0 z-20 flex h-dvh w-dvw flex-col items-center justify-center p-4 transition-all">
      <button
        onclick={toggleExpanded}
        class="absolute right-0 top-0 m-3 rounded-full bg-slate-900/80 p-3 backdrop-blur-lg backdrop-saturate-150 transition-all hover:text-secondary">
        <Icon icon="mdi:close" width="1.8rem" class="z-10" />
      </button>
      {#each links as link}
        <MobileNavLink href={link.href} onclick={toggleExpanded}>{link.name}</MobileNavLink>
      {/each}
    </div>
  {/if}
</header>
