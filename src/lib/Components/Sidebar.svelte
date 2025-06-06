<script>
  import HeroImg from '$lib/assets/hero.jpg?enhanced'
  import Icon from '@iconify/svelte'
  import { page } from '$app/stores'
  import { browser } from '$app/environment'
  import { fly } from 'svelte/transition'
  import { onMount } from 'svelte'
  import { githubLink, linkedInLink, mailLink, mail } from '../../constants'

  const socials = [
    { label: mail, href: mailLink, icon: 'mdi:email', expand: true },
    { label: 'Github', href: githubLink, icon: 'line-md:github', expand: false },
    { label: 'LinkedIn', href: linkedInLink, icon: 'line-md:linkedin', expand: false },
    { label: 'CV', href: '/cv', icon: 'mdi:person-badge-outline', expand: false },
    { label: 'Card', href: '/card', icon: 'mdi:card-account-details', expand: false }
  ]

  const links = [
    { href: '/#home', name: 'Home', icon: 'mdi:home-outline' },
    { href: '/#about', name: 'Over mij', icon: 'mdi:account-outline' },
    { href: '/#education', name: 'Opleiding', icon: 'mdi:school-outline' },
    { href: '/#experience', name: 'Ervaring', icon: 'mdi:briefcase-outline' },
    { href: '/#certification', name: 'Certificaten', icon: 'mdi:certificate-outline' },
    { href: '/#technologies', name: 'Technologieën', icon: 'mdi:code' },
    { href: '/#stage', name: 'Stage', icon: 'mdi:domain' },
    { href: '/#projects-highlight', name: 'Projecten', icon: 'mdi:code-braces' },
    { href: '/cv', name: 'Cv', icon: 'mdi:file-document-outline' },
    { href: '/#contact', name: 'Contact', icon: 'mdi:email-outline' }
  ]

  // --- State Management ---
  let activeSectionId = $state('home')
  let isMobileMenuOpen = $state(false)
  const isHomepage = $derived($page.url.pathname === '/')

  // --- HELPER: Throttle function ---
  function throttle(func, limit) {
    let inThrottle
    return function (...args) {
      if (!inThrottle) {
        func.apply(this, args)
        inThrottle = true
        setTimeout(() => (inThrottle = false), limit)
      }
    }
  }

  // --- Lifecycle & Scroll-Spy Logic ---
  onMount(() => {
    if (!browser || !isHomepage) return

    const sections = links
      .map((link) =>
        link.href.startsWith('/#') ? document.getElementById(link.href.substring(2)) : null
      )
      .filter(Boolean)

    if (sections.length === 0) return

    // This Set will be populated by the efficient IntersectionObserver
    const visibleSections = new Set()

    // SYSTEM 1: The Observer (Gatekeeper)
    // Watches the entire viewport to know which sections are on-screen at all.
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            visibleSections.add(entry.target)
          } else {
            visibleSections.delete(entry.target)
          }
        })
      },
      { threshold: 0 } // A section is "visible" if even 1px is on screen.
    )

    // SYSTEM 2: The Throttled Scroll Listener (The Real Decision Maker)
    const findBestSection = throttle(() => {
      let bestSection = null
      let minDistance = Infinity
      const targetY = window.innerHeight * 0.25 // Our "target line" is 25% from the top

      // Only loop over sections that are currently on the screen.
      visibleSections.forEach((section) => {
        const distance = Math.abs(targetY - section.getBoundingClientRect().top)
        if (distance < minDistance) {
          minDistance = distance
          bestSection = section
        }
      })

      // **THE CRITICAL FIX IS HERE**
      // Only update the active ID if we found a best section AND it's different
      // from the current one. If `bestSection` is null (because we're in a gap),
      // we do NOTHING, and the active state correctly persists.
      if (bestSection && activeSectionId !== bestSection.id) {
        activeSectionId = bestSection.id
      }
    }, 100) // Run at most every 100ms

    // Activate systems
    sections.forEach((section) => observer.observe(section))
    window.addEventListener('scroll', findBestSection, { passive: true })

    // Cleanup on component destroy
    return () => {
      observer.disconnect()
      window.removeEventListener('scroll', findBestSection)
      if (browser) document.body.style.overflow = ''
    }
  })

  // --- UI Handlers ---
  const toggleMobileMenu = () => {
    isMobileMenuOpen = !isMobileMenuOpen
    document.body.style.overflow = isMobileMenuOpen ? 'hidden' : ''
  }

  const closeMobileMenu = () => {
    if (!isMobileMenuOpen) return
    isMobileMenuOpen = false
    document.body.style.overflow = ''
  }

  const handleLinkClick = (event) => {
    const href = event.currentTarget.getAttribute('href')
    if (href?.startsWith('/#')) {
      activeSectionId = href.substring(2)
    }
    if (isMobileMenuOpen) closeMobileMenu()
  }

  const handleKeydown = (event) => {
    if (event.key === 'Escape' && isMobileMenuOpen) closeMobileMenu()
  }
</script>

<!-- The rest of your component's HTML remains exactly the same -->

<svelte:window onkeydown={handleKeydown} />

<button
  onclick={toggleMobileMenu}
  class="fixed left-4 top-4 z-[60] flex h-10 w-10 items-center justify-center rounded-lg border border-border bg-background/80 text-foreground backdrop-blur-sm transition-colors hover:bg-muted md:hidden print:hidden"
  aria-label={isMobileMenuOpen ? 'Sluit menu' : 'Open menu'}
  aria-expanded={isMobileMenuOpen}
  aria-controls="main-sidebar">
  {#if isMobileMenuOpen}
    <Icon icon="mdi:close" class="h-6 w-6" />
  {:else}
    <Icon icon="mdi:menu" class="h-6 w-6" />
  {/if}
</button>

{#if isMobileMenuOpen}
  <div
    transition:fly={{ duration: 300, opacity: 0 }}
    onclick={closeMobileMenu}
    class="fixed inset-0 z-[45] bg-black/50 backdrop-blur-sm md:hidden"
    aria-hidden="true">
  </div>
{/if}

<aside
  id="main-sidebar"
  class="fixed inset-y-0 left-0 z-50 flex h-[100dvh] w-72 transform flex-col border-r border-border bg-background-alt text-foreground transition-transform duration-300 ease-in-out {isMobileMenuOpen
    ? 'translate-x-0'
    : '-translate-x-full'} [view-transition-name:header-left] md:sticky md:top-0 md:translate-x-0 print:hidden"
  aria-hidden={!isMobileMenuOpen && true}>
  <div class="flex flex-col items-center p-6 text-center">
    <a href="/#home" onclick={handleLinkClick} aria-label="Ga naar homepagina" class="mb-4 block">
      <enhanced:img
        src={HeroImg}
        alt="Foto van Jan-Peter"
        class="h-28 w-28 rounded-full border-2 border-border object-cover shadow-md transition-transform duration-300 hover:scale-105" />
    </a>
    <a href="/#home" class="hover:underline" onclick={handleLinkClick}>
      <h1 class="font-tight text-xl font-semibold text-foreground">Jan-Peter Dhallé</h1>
    </a>
    <p class="mt-1 text-sm text-muted-foreground">Student Applicatieontwikkeling</p>
  </div>

  <nav class="flex-grow overflow-y-auto px-4">
    <ul class="flex flex-col space-y-1">
      {#each links as link}
        {@const targetId = link.href.startsWith('/#') ? link.href.substring(2) : null}
        {@const current = isHomepage && activeSectionId === targetId}
        <li>
          <a
            href={link.href}
            onclick={handleLinkClick}
            class="group flex items-center gap-3 rounded-md px-3 py-2.5 text-sm font-medium transition-colors"
            class:bg-primary={current}
            class:text-primary-foreground={current}
            class:text-muted-foreground={!current}
            class:hover:text-foreground={!current}
            class:hover:bg-muted={!current}
            aria-current={current ? 'page' : undefined}>
            <Icon icon={link.icon} class="h-5 w-5 flex-shrink-0" />
            <span>{link.name}</span>
          </a>
        </li>
      {/each}
    </ul>
  </nav>

  <div class="mt-auto space-y-3 p-4">
    {#each socials as link}
      {#if link.expand}
        <a
          href={link.href}
          class="flex w-full items-center justify-center gap-2 rounded-md bg-muted px-4 py-2.5 text-sm font-medium text-muted-foreground transition-colors hover:bg-background-hued hover:text-foreground"
          aria-label="E-mail">
          <Icon icon={link.icon} class="h-5 w-5" />
          <span>{link.label}</span>
        </a>
      {/if}
    {/each}

    <div class="flex items-center justify-center gap-2">
      {#each socials as link}
        {#if !link.expand}
          <a
            href={link.href}
            rel="noopener noreferrer"
            target="_blank"
            class="flex h-9 w-9 items-center justify-center rounded-lg border border-border text-muted-foreground transition-colors hover:border-background-hued hover:bg-background-hued hover:text-foreground"
            aria-label={link.label}>
            <Icon icon={link.icon} class="h-5 w-5" />
          </a>
        {/if}
      {/each}
    </div>
  </div>

  <div class="p-4 pt-2 text-center">
    <p class="text-xs text-muted-foreground">© {new Date().getFullYear()} Jan-Peter Dhallé</p>
  </div>
</aside>
