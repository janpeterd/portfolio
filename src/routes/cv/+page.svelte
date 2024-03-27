<script>
  import Footer from '$lib/Components/Footer.svelte'
  import Navbar from '$lib/Components/Navbar.svelte'
  import Icon from '@iconify/svelte'
  import HeroImg from '$lib/assets/hero.jpg'

  import { githubLink, linkedInLink, mailLink, xLink } from '../../stores'
</script>

<Navbar />

<div class="bottom-gradient absolute bottom-0 h-screen w-screen print:hidden"></div>
<div class="gradient1 absolute -top-20 h-screen w-screen print:hidden"></div>

<div class="container mx-auto mt-24 print:mt-0 print:max-w-none print:bg-white print:text-black">
  <div class="flex items-end justify-between">
    <h1
      class="mt-4 pt-6 font-elec text-4xl font-bold uppercase tracking-tight text-secondary print:text-3xl print:text-black">
      Jan-Peter Dhallé
    </h1>
    <div class="flex gap-x-4">
      <button
        class="hidden cursor-pointer sm:block print:hidden"
        tabindex="0"
        on:click={() => window.print()}>
        <Icon icon="mdi:printer" width="2rem" />
      </button>
      <a class="print:hidden" href="/doc/cv_Jan-Peter_Dhallé.pdf">
        <Icon icon="carbon:generate-pdf" width="2rem" />
      </a>
    </div>
  </div>
  <span class="mb-6 block border-b pb-4 pl-2 font-elec text-lg italic print:border-black/20"
    >Web developer, full stack developer, data analist</span>
  <div class="flex flex-col gap-10 lg:mx-auto lg:flex-row print:m-4 print:flex-row print:gap-3">
    <div class="print:container-none flex-auto lg:order-first lg:min-w-[600px]">
      <h2 class="cv_heading">Opleiding</h2>
      <div class="cv_flex">
        <span class="cv_item"
          >Toegepaste Informatica Thomas More<br />
          <span class="cv_item_extra">Campus Geel</span></span>
        <span class="cv_date">2021–Heden</span>
      </div>

      <div class="cv_flex">
        <span class="cv_item"
          >Industriële Ingenieurswetenschappen KU Leuven<br />
          <span class="cv_item_extra">Groep T, Leuven</span></span>
        <span class="cv_date">2019-2021</span>
      </div>

      <div class="cv_flex">
        <span class="cv_item">
          Diploma secundair onderwijs, wetenschappen-wiskunde<br />
          <span class="cv_item_extra">Sint-Jozefcollege, Turnhout</span>
        </span>
        <span class="cv_date">2014–2020</span>
      </div>
      <div class="cv_flex">
        <span class="cv_item">
          SAMWD Turnhout<br />
          <span class="cv_item_extra">Klassieke viool (Suzukimethode) &mdash; summa cum laude</span>
        </span>
        <span class="cv_date">2006-2020</span>
      </div>
      <h2 class="cv_heading">Professionele werkervaring</h2>
      <div class="cv_flex">
        <span class="cv_item"
          >R. Janssen &amp; Zn nv<br />
          <span class="cv_item_extra">Jobstudent &mdash; inventory manager</span>
        </span>
        <span class="cv_date">Juni 2019</span>
      </div>
      <div>
        <h2 class="cv_heading">Verenigingen, vrijwilligerswerk en andere projecten</h2>
        <div class="cv_flex">
          <span class="cv_item"
            >Zandhoven Natuurlijk!<br /><span class="cv_item_extra"
              >Vrijwilliger &mdash; webmaster</span
            ></span>
          <span class="cv_date">2022–Heden</span>
        </div>
        <div class="cv_flex">
          <span class="cv_item"
            >Vlaams Symfonisch Orkest<br /><span class="cv_item_extra"
              >Violist, plaatsvervangend concertmeester</span
            ></span>
          <span class="cv_date">2020–Heden</span>
        </div>
        <div class="cv_flex">
          <span class="cv_item"
            >Woonzorgcentrum Sint-Lucia<br /><span class="cv_item_extra"
              >Vrijwilliger &mdash; animator</span
            ></span>
          <span class="cv_date">April 2017</span>
        </div>
        <h2 class="cv_heading">Technische Vaardigheden</h2>
        <div
          class="my-6 grid grid-cols-1 gap-x-4 gap-y-16 md:w-auto md:grid-cols-2 lg:grid-cols-3 print:my-2 print:gap-y-4">
          <div class="ml-2 lg:ml-8">
            <h2 class="py-2 font-elec text-lg font-bold print:text-base">Programmeertalen</h2>
            <p>HTML/CSS, JavaScript, Python, PHP, Java, C#, C, C++, Go, Bash</p>
          </div>

          <div class="ml-2 lg:ml-8">
            <h2 class="py-2 font-elec text-lg font-bold print:text-base">Databases</h2>
            SQL, PostgresSQL, MongoDB
          </div>

          <div class="ml-2 lg:ml-8">
            <h2 class="py-2 font-elec text-lg font-bold print:text-base">Documentatie</h2>
            Markdown, UML, Org-mode, LaTeX
          </div>

          <div class="ml-2 lg:ml-8">
            <h2 class="py-2 font-elec text-lg font-bold print:text-base">
              Frameworks &amp; Libraries
            </h2>
            Laravel, Tailwind, Django, Spring, Boot, .NET, core, Numpy, Pandas, Matplotlib, Express.js,
            Svelte/Sveltekit
          </div>

          <div class="ml-2 lg:ml-8">
            <h2 class="py-2 font-elec text-lg font-bold print:text-base">Tools</h2>
            Linux, Windows, Vim/Neovim, Emacs, Visual Studio, Visual Studio Code, Jetbrains IDEs, Axure
            RP, Figma, Photoshop, Git, GitHub, GNU make, GNU coreutils
          </div>

          <div class="ml-2 lg:ml-8">
            <h2 class="py-2 font-elec text-lg font-bold print:text-base">Infrastructuur</h2>
            Cisco network essentials, Docker, Kubernetes, Virtual machines
          </div>
        </div>
        <h2 class="cv_heading">Certificaten</h2>
        <div class="cv_flex">
          <span class="cv_item"
            >LPI Linux Essentials<br /><span class="cv_item_extra">Resultaat 18/20</span>
          </span>
          <span class="cv_date">2023</span>
        </div>
      </div>
    </div>
    <div
      class="rounded-xl bg-white/10 p-6 backdrop-blur-lg backdrop-saturate-150 sm:m-4 md:mx-auto md:w-8/12 lg:max-w-96 print:m-2 print:max-w-72 print:rounded-none print:border-l print:border-black/20 print:p-4">
      <img src={HeroImg} alt="Foto van Jan-Peter" />
      <h2 class="cv_heading">Contact</h2>
      <ul class="hidden lg:block">
        <div>
          <li class="py-2 font-elec text-lg font-bold print:text-base">
            <a class="flex items-end gap-4" href={$mailLink}>
              <Icon icon="line-md:email" width="2rem" inline={true} />
              E-mail
            </a>
          </li>
        </div>
        <div>
          <li class="py-2 font-elec text-lg font-bold print:text-base">
            <a class="flex items-end gap-4" href={$linkedInLink}>
              <Icon icon="line-md:linkedin" width="2rem" inline={true} />
              LinkedIn
            </a>
          </li>
        </div>
        <div>
          <li class="py-2 font-elec text-lg font-bold print:text-base">
            <a class="flex items-end gap-4" href={$xLink}>
              <Icon icon="line-md:twitter-x" width="2rem" inline={true} />
              Twitter (X)
            </a>
          </li>
        </div>
        <div>
          <li class="py-2 font-elec text-lg font-bold print:text-base">
            <a class="flex items-end gap-4" href={$githubLink}>
              <Icon icon="line-md:github" width="2rem" inline={true} />
              GitHub
            </a>
          </li>
        </div>
      </ul>
      <div class="flex flex-col items-start justify-center py-6 lg:hidden">
        <a
          href={$mailLink}
          class="mx-2 flex items-center justify-center gap-4 py-2 text-lg print:text-base"
          ><Icon icon="line-md:email" width="1.5rem" />janpeter.dhalle@gmail.com</a>
        <a
          href={$linkedInLink}
          class="mx-2 flex items-center justify-center gap-4 py-2 text-lg print:text-base"
          ><Icon icon="line-md:linkedin" width="1.5rem" />Jan-Peter Dhallé</a>
        <a
          href={$xLink}
          class="mx-2 flex items-center justify-center gap-4 py-2 text-lg print:text-base"
          ><Icon icon="line-md:twitter-x" width="1.5rem" />@jempie_3</a>
        <a
          href={$githubLink}
          class="mx-2 flex items-center justify-center gap-4 py-2 text-lg print:text-base"
          ><Icon icon="line-md:github" width="1.5rem" />janpeterd</a>
      </div>
    </div>
  </div>
</div>
<Footer />

<style lang="postcss">
  h2.cv_heading {
    @apply mb-4 border-b border-white/40 px-2 py-6 text-3xl lg:w-auto lg:text-4xl print:mb-2 print:border-black/30 print:py-4 print:text-xl;
  }
  span.cv_item {
    @apply ml-2 text-lg font-bold lg:ml-8 lg:text-2xl print:text-base;
  }

  span.cv_item_extra {
    @apply ml-2 text-base font-normal italic;
  }

  span.cv_date {
    @apply italic leading-loose;
  }

  div.cv_flex {
    @apply flex flex-row justify-between gap-10 p-4 print:p-2;
  }

  .bottom-gradient {
    z-index: -10;
    mask-image: radial-gradient(305vw 450px at 50% 50%, rgba(0, 0, 0, 1) 80%, transparent);
    background: url('/img/grain.webp'),
      radial-gradient(105vw 850px at 50% 90%, theme(colors.secondary / 10%), transparent);
  }

  .gradient1 {
    z-index: -10;
    mask-image: radial-gradient(302vw 220vh at -60% 35vh, rgba(0, 0, 0, 1) 30%, transparent);
    background: url('/img/grain.webp'),
      radial-gradient(302vw 450px at -60% 35vh, theme(colors.primary / 80%), transparent);
  }
</style>
