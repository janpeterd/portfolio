<script>
  import Icon from '@iconify/svelte'
  import Logo3d from '$lib/Components/Logo3d.svelte'
  import { githubLink, linkedInLink, mailLink, xLink } from '../../stores'
  import { Canvas } from '@threlte/core'
  import { goto } from '$app/navigation'
  import { getIsMobile } from '$lib/utils'
  let now = new Date()

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }
</script>

<footer
  class="max-w-screen relative mt-8 flex flex-col items-center overflow-x-hidden border-t bg-black/60 py-3 backdrop-blur backdrop-saturate-150 print:hidden">
  <div class="flex flex-col justify-between sm:flex-row md:w-4/5 lg:w-3/5">
    <button class="relative mb-3 h-[200px] min-h-[200px] w-72 flex-1 md:px-5" on:click={goto('/')}>
      <div
        class={`absolute -left-20 -top-[100px] z-0 h-[400px] w-[400px] ${getIsMobile() ? 'pointer-events-none' : ''}`}>
        <Canvas>
          <Logo3d defaultZoom={45} rotate />
        </Canvas>
      </div>
    </button>
    <div class="z-10 mb-3 flex-1 font-elec text-xl">
      <h2 class="mb-3 font-elec font-bold text-secondary">Links</h2>
      <div class="border-green-500 sm:border-l-2">
        <div class="my-3 ml-4"><a href="/#about">Over mij</a></div>
        <div class="my-3 ml-4"><a href="/projects">Projecten</a></div>
        <div class="my-3 ml-4"><a href="/cv">CV</a></div>
        <div class="my-3 ml-4"><a href="/contact">Contact</a></div>
      </div>
    </div>
    <div class="mb-3 flex-1 font-elec text-xl">
      <h2 class="mb-3 font-elec font-bold text-secondary">Contact</h2>
      <div
        class="flex flex-row items-center justify-items-center border-green-500 py-6 sm:border-l-2">
        <a href={$mailLink} class="mx-2 flex items-center justify-center" aria-label="E-mail">
          <Icon icon="line-md:email" width="2.5rem" />
        </a>
        <a href={$linkedInLink} class="mx-2 flex items-center justify-center" aria-label="LinkedIn">
          <Icon icon="line-md:linkedin" width="2.5rem" />
        </a>
        <a href={$xLink} class="mx-2 flex items-center justify-center" aria-label="Twitter/X">
          <Icon icon="line-md:twitter-x" width="2.5rem" />
        </a>
        <a href={$githubLink} class="mx-2 flex items-center justify-center" aria-label="GitHub">
          <Icon icon="line-md:github" width="2.5rem" />
        </a>
      </div>
    </div>
  </div>
  <div
    class="group flex w-full flex-auto flex-col items-center py-1 pb-12 text-center text-xl decoration-green-500 transition-all duration-300 ease-in-out hover:text-zinc-200 sm:flex-row md:justify-center">
    <span class="flex-auto">
      &copy; {now.getFullYear()} Jan-Peter Dhallé
    </span>
    <button
      on:click={scrollToTop}
      class="flex flex-auto animate-bounce items-center justify-center">
      <span class="text-right">Scroll&nbsp;naar&nbsp;boven</span>
      <Icon class="h-full text-4xl" icon="mdi:arrow-up-bold" />
    </button>
  </div>
</footer>
