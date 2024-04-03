<script>
  import HeroImg from '$lib/assets/hero.jpg?enhanced'
  import Icon from '@iconify/svelte'
</script>

<div class="bottom-gradient absolute top-0 h-full w-screen overflow-hidden"></div>
<div class="gradient2 absolute top-0 h-full w-screen overflow-hidden"></div>

<div class="relative flex items-center justify-center">
  <div class="relative z-10 mx-auto mb-14 mt-28 h-full w-full max-w-screen-md sm:w-4/5 lg:w-3/5">
    <enhanced:img
      class="mx-auto rounded-3xl object-cover"
      src="{HeroImg}"
      alt="me"
      fetchpriority="high"
      loading="eager" />
  </div>

  <a href="#about" class="absolute -bottom-3 animate-bounce" aria-label="Scroll down">
    <Icon icon="mdi:chevron-down" width="4rem" class="text-secondary/30" />
  </a>
</div>

<style lang="postcss">
  .bottom-gradient {
    z-index: -10;
    mask-image: radial-gradient(305vw 450px at 50% 0%, rgba(0, 0, 0, 1) 30%, transparent);
    background: url('/img/grain.webp'),
      radial-gradient(115vw 450px at 110% 10%, theme(colors.blue.600 / 40%), transparent);
  }

  .gradient2 {
    z-index: -10;
    mask-image: radial-gradient(302vw 220vh at -50% 70vh, rgba(0, 0, 0, 1) 30%, transparent);
    background: url('/img/grain.webp'),
      radial-gradient(115vw 450px at -50% 70vh, theme(colors.secondary / 20%), transparent);
  }
</style>
