<script>
  import Icon from '@iconify/svelte'
  import Logo3d from '$lib/Components/Logo3d.svelte'
  import { githubLink, linkedInLink, mailLink, mail } from '../../constants'
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

  const links = [
    { label: mail, href: mailLink, icon: 'mdi:email', expand: true },
    { label: 'Github', href: githubLink, icon: 'line-md:github', expand: false },
    { label: 'LinkedIn', href: linkedInLink, icon: 'line-md:linkedin', expand: false }
  ]
</script>

<footer
  class="max-w-screen relative flex flex-col items-center overflow-x-hidden border-t bg-background py-3 backdrop-blur backdrop-saturate-150 print:hidden">
  <div class="flex flex-col justify-between sm:flex-row md:w-4/5 lg:w-3/5">
    <button class="relative mb-3 h-[200px] min-h-[200px] w-72 flex-1 md:px-5" on:click={goto('/')}>
      <div
        class={`absolute -left-20 -top-[100px] z-0 h-[400px] w-[400px] ${getIsMobile() ? 'pointer-events-none' : ''}`}>
        <Canvas>
          <Logo3d defaultZoom={45} rotate />
        </Canvas>
      </div>
    </button>
    <div class="mb-3 flex-1 font-tight text-xl">
      <h2 class="mb-3 font-tight font-bold text-secondary">Contact</h2>
      <div
        class="flex flex-col items-center justify-items-center border-green-500 py-6 sm:border-l-2">
        {#each links as link}
          {#if link.expand}
            <a
              href={link.href}
              class="mx-2 flex items-center justify-center gap-2"
              aria-label="E-mail">
              <Icon icon={link.icon} width="2.5rem" />
              <span>{link.label}</span>
            </a>
          {/if}
        {/each}
        <div class="flex">
          {#each links as link}
            {#if !link.expand}
              <a
                href={link.href}
                class="mx-2 flex items-center justify-center rounded-full border-2 border-blue-200 p-2"
                aria-label={link.label}>
                <Icon icon={link.icon} width="2.5rem" />
              </a>
            {/if}
          {/each}
        </div>
      </div>
    </div>
  </div>
  <div
    class="group flex w-full flex-auto flex-col items-center py-1 py-12 text-center text-xl decoration-green-500 transition-all duration-300 ease-in-out hover:text-zinc-200 sm:flex-row md:justify-center">
    <span class="flex-auto text-muted-foreground">
      &copy; {now.getFullYear()} Jan-Peter Dhallé
    </span>
  </div>
</footer>
