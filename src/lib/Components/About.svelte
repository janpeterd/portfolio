<script>
  import { browser } from '$app/environment'
  import PortraitImg from '$lib/assets/portrait.jpg?enhanced'
  import About from '../../content/about/about.md'
  import HomeTitle from './HomeTitle.svelte'
  import SectionDivider from './SectionDivider.svelte'
</script>

<div class="relative overflow-hidden bg-background py-12">
  <SectionDivider class="text-transparent dark:text-primary" />
  <div
    class="container mx-auto flex flex-col-reverse items-center gap-y-12 px-6 lg:grid lg:grid-cols-5 lg:gap-x-16 lg:px-8">
    <!-- Text Content -->
    <div class="z-10 lg:col-span-3">
      <HomeTitle title="Over mij" id="about" />
      <article class="prose prose-lg max-w-none text-foreground dark:prose-invert">
        {#if browser}
          <About />
        {/if}
      </article>

      <!-- Call to Action Buttons -->
      <div class="mt-8 flex flex-wrap gap-4">
        <a
          href="/#contact"
          class="inline-flex items-center justify-center rounded-md bg-primary px-5 py-3 text-base font-medium text-primary-foreground shadow-sm transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2">
          Contact
        </a>
        <a
          href="/cv"
          class="inline-flex items-center justify-center rounded-md border border-border bg-transparent px-5 py-3 text-base font-medium text-foreground shadow-sm transition-colors hover:bg-primary hover:text-primary-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2">
          Bekijk CV
        </a>
      </div>
    </div>

    <!-- Portrait Image -->
    <div class="group z-10 w-full max-w-xs lg:col-span-2 lg:max-w-none">
      <div
        class="relative transform rounded-xl border border-border bg-muted p-4 shadow-lg transition-transform duration-300 ease-in-out lg:rotate-2 lg:group-hover:rotate-0">
        <enhanced:img
          class="relative z-10 aspect-[4/5] w-full rounded-md object-cover"
          src={PortraitImg}
          alt="A portrait of Jan-Peter"
          fetchpriority="high"
          loading="eager"
          sizes="(max-width: 1023px) 80vw, 30vw" />
      </div>
    </div>
  </div>
</div>
