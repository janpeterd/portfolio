<script>
  import NavLink from '$lib/Components/NavLink.svelte'
  import Icon from '@iconify/svelte'
  import LogoImg from '$lib/Components/LogoImg.svelte'

  let isExpanded = false

  function toggleExpanded() {
    isExpanded = !isExpanded
  }
</script>

<div
  class="fixed top-0 z-50 flex w-screen justify-between bg-transparent pt-2 font-elec print:hidden">
  <div
    class="justify-content m-2 flex w-auto flex-shrink items-center rounded-full bg-white/10 backdrop-blur backdrop-saturate-150">
    <NavLink logo={true} href="/" class="relative flex items-center justify-center px-6">
      <LogoImg class="absolute -left-4 -top-8 w-28" />
      <div class="min-w-[220px] pl-10 font-bold">Portfolio Jan&#8209Peter Dhallé</div>
    </NavLink>
  </div>
  <div
    class="justify-content m-2 hidden flex-shrink-0 items-center gap-x-2 rounded-full bg-white/10 px-2 text-white backdrop-blur-lg backdrop-saturate-150 md:flex">
    <NavLink href="/">Home</NavLink>
    <NavLink href="/#about">Over&nbsp;mij</NavLink>
    <NavLink href="/projects">Projecten</NavLink>
    <NavLink href="/cv">Cv</NavLink>
    <NavLink href="/contact">Contact</NavLink>
  </div>

  <button
    class="justify-content float-right m-2 flex items-center p-3 text-white md:hidden"
    on:click={toggleExpanded}>
    {#if !isExpanded}
      <Icon icon="mdi:hamburger-menu" width="1.8rem" class="z-10" />
    {/if}
  </button>
  {#if isExpanded}
    <div
      class="absolute top-0 z-0 flex h-screen w-screen flex-col items-center justify-center rounded-lg p-4 backdrop-blur-lg backdrop-saturate-150">
      <button
        on:click={toggleExpanded}
        class="absolute right-0 top-0 m-10 rounded-full bg-primary bg-slate-900/80 p-3 backdrop-blur-lg backdrop-saturate-150 transition hover:text-secondary">
        <Icon icon="mdi:close" width="1.8rem" class="z-10" />
      </button>
      <a href="/" class="block p-5 text-center text-3xl font-bold" on:click={toggleExpanded}
        >Home</a>
      <a href="/#about" class="block p-5 text-center text-3xl font-bold" on:click={toggleExpanded}
        >Over&nbsp;mij</a>
      <a href="/projects" class="block p-5 text-center text-3xl font-bold" on:click={toggleExpanded}
        >Projecten</a>
      <a href="/cv" class="block p-5 text-center text-3xl font-bold" on:click={toggleExpanded}
        >Cv</a>
      <a href="/contact" class="block p-5 text-center text-3xl font-bold" on:click={toggleExpanded}
        >Contact</a>
    </div>
  {/if}
</div>
