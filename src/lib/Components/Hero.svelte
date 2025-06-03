<script>
  import HeroImg from '$lib/assets/hero.jpg?enhanced'
  import Icon from '@iconify/svelte'
</script>

<div class="relative flex flex-col items-center justify-center">
  <div
    class="relative mx-auto mb-0 mt-28 h-full w-full max-w-[90vw] sm:w-4/5 md:max-w-screen-md lg:w-3/5">
    <enhanced:img
      class="mx-auto -mt-4 rounded-3xl object-cover sm:mt-0"
      src={HeroImg}
      alt="me"
      fetchpriority="high"
      loading="eager"
      sizes="min(1300px, 100vw)" />
  </div>
  <div class="mt-2 flex flex-col items-center justify-center gap-1 text-center">
    <span class="text-3xl font-bold uppercase opacity-30">Student Applicatieontwikkeling</span>
    <span class="text-sm opacity-35">Welkom op mijn portfoliowebsite</span>
  </div>

  <a href="#about" class="absolute -bottom-16 animate-bounce" aria-label="Scroll down">
    <Icon icon="mdi:chevron-down" width="4rem" class="text-secondary/30" />
  </a>
</div>
