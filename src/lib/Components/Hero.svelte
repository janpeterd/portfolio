<script>
  import HeroImg from '$lib/assets/code.jpg?enhanced'
  import Icon from '@iconify/svelte'
</script>

<div class="relative flex h-screen w-full flex-col items-center justify-center">
  <div class="fixed top-0 -z-10 mx-auto mb-0 h-full w-full blur brightness-[30%]">
    <enhanced:img
      class="mx-auto size-full object-cover object-center"
      src={HeroImg}
      alt="me"
      fetchpriority="high"
      loading="eager"
      sizes="min(1300px, 100vw)" />
  </div>
  <div class="absolute inset-0 mt-2 flex flex-col justify-center gap-1 text-center text-white">
    <span class="font-tight text-6xl font-bold">Jan-Peter Dhallé</span>
    <span class="inline w-auto font-semibold text-primary">Student Applicatieontwikkeling</span>
  </div>

  <a href="#about" class="absolute bottom-16 animate-bounce" aria-label="Scroll down">
    <Icon
      icon="mdi:chevron-down"
      width="4rem"
      class="rounded-full bg-white/20 p-2 text-primary backdrop-blur-lg" />
  </a>
</div>
