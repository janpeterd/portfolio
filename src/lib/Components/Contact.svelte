<script>
  import HomeTitle from './HomeTitle.svelte'
  import Icon from '@iconify/svelte'
  import { githubLink, linkedInLink, mailLink, mail } from '../../constants' // Your constants
  import SectionDivider from './SectionDivider.svelte'

  // The data is now updated with mdi: icons for a consistent icon set.
  const contactOptions = [
    {
      id: 'email',
      name: 'E-mail',
      icon: 'mdi:email-outline',
      value: mail,
      href: mailLink,
      ariaLabel: 'Stuur een e-mail naar Jan-Peter Dhallé',
      text: 'Stuur een E-mail',
      extern: false
    },
    {
      id: 'linkedin',
      name: 'LinkedIn',
      icon: 'mdi:linkedin',
      value: 'Jan-Peter Dhallé',
      href: linkedInLink,
      ariaLabel: 'Bekijk Jan-Peter Dhallé op LinkedIn',
      text: 'Bekijk Profiel',
      extern: true
    },
    {
      id: 'github',
      name: 'GitHub',
      icon: 'mdi:github',
      value: 'janpeterd',
      href: githubLink,
      ariaLabel: 'Bekijk janpeterd op GitHub',
      text: 'Bekijk Projecten',
      extern: true
    }
  ]
</script>

<section id="contact" class="relative bg-background-hued py-24 sm:py-32">
  <SectionDivider class="text-transparent dark:text-primary" />
  <div class="mx-auto max-w-7xl px-6 lg:px-8">
    <div class="mx-auto max-w-2xl text-center">
      <HomeTitle title="Neem Contact Op" />
      <p class="mt-4 text-lg leading-8 text-muted-foreground">
        Ik sta altijd open voor het bespreken van nieuwe projecten, creatieve ideeën of interessante
        samenwerkingen. Neem gerust contact op!
      </p>
    </div>

    <!-- This grid is now more responsive: 1 col -> 2 cols -> 3 cols -->
    <div
      class="mx-auto mt-16 grid max-w-lg grid-cols-1 gap-8 sm:max-w-2xl sm:grid-cols-2 lg:max-w-none lg:grid-cols-3">
      {#each contactOptions as option (option.id)}
        <div
          class="flex flex-col rounded-lg border border-border bg-card p-8 text-card-foreground transition-all duration-300 hover:-translate-y-1 hover:border-primary hover:shadow-lg">
          <div
            class="mb-6 flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
            <Icon icon={option.icon} class="h-8 w-8" />
          </div>

          <div class="flex-grow">
            <h3 class="text-xl font-semibold text-foreground">
              {option.name}
            </h3>
            <p class="mt-1 font-mono text-sm text-muted-foreground">{option.value}</p>
          </div>

          <div class="mt-6">
            <a
              href={option.href}
              target={option.extern ? '_blank' : undefined}
              rel={option.extern ? 'noopener noreferrer' : undefined}
              aria-label={option.ariaLabel}
              class="inline-flex items-center justify-center rounded-md border border-border px-5 py-2.5 text-sm font-semibold text-foreground transition-colors hover:border-transparent hover:bg-primary hover:text-secondary-foreground focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary">
              {option.text}
              {#if option.extern}
                <Icon icon="mdi:open-in-new" class="ml-2 h-4 w-4" />
              {/if}
            </a>
          </div>
        </div>
      {/each}
    </div>
  </div>
</section>
