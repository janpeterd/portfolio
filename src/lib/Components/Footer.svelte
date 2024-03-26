<script>
  import Icon from '@iconify/svelte'
  import LogoImg from './LogoImg.svelte'
  import { githubLink } from '../../stores'
  import { linkedInLink } from '../../stores'
  import { mailLink } from '../../stores'
  let now = new Date()
</script>

<footer
  class="max-w-screen relative mt-8 flex flex-col items-center border-t bg-black/60 p-3 print:hidden"
>
  <div class="flex flex-col justify-between sm:flex-row md:w-4/5 lg:w-3/5">
    <div class="mb-3 max-h-[200px] min-h-[60px] w-64 flex-1 md:px-5">
      <LogoImg class="max-h-[200px] min-h-[60px] w-full" />
    </div>
    <div class="mb-3 flex-1 font-elec text-2xl">
      <h2 class="mb-3 font-elec text-2xl text-secondary">Links</h2>
      <div class="border-green-500 sm:border-l-2">
        <div class="ml-4"><a href="/#about">Over mij</a></div>
        <div class="ml-4"><a href="/projects">Projecten</a></div>
        <div class="ml-4"><a href="/cv">CV</a></div>
      </div>
    </div>
    <div class="mb-3 flex-1 font-elec text-2xl">
      <h2 class="mb-3 font-elec text-2xl text-secondary">Socials</h2>
      <div
        class="flex flex-row items-center justify-items-center border-green-500 py-6 sm:border-l-2"
      >
        <a href={$mailLink} class="mx-2 flex items-center justify-center"
          ><Icon icon="mdi:envelope" width="3rem" /></a
        >
        <a href={$githubLink} class="mx-2 flex items-center justify-center"
        ><Icon icon="mdi:github" width="3rem" /></a
        >
        <a href={$linkedInLink} class="mx-2 flex items-center justify-center"
        ><Icon icon="mdi:linkedin" width="3rem" /></a
        >
      </div>
    </div>
  </div>
  <div
    class="group flex w-screen flex-auto flex-col items-center p-1 py-1 pb-12 text-center text-xl decoration-green-500 transition-all duration-300 ease-in-out hover:text-zinc-200 sm:flex-row md:justify-center"
  >
    <span class="flex-auto">
      &copy; {now.getFullYear()} Jan-Peter Dhallé
    </span>
    <a href="#" class="flex flex-auto items-center justify-center">
      <span class="text-right">Scroll&nbsp;naar&nbsp;boven</span>
      <Icon class="h-full text-4xl" icon="mdi:arrow-up-bold" />
    </a>
  </div>
</footer>
