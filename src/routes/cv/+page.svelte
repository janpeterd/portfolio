<script>
  import Footer from '$lib/Components/Footer.svelte'
  import Navbar from '$lib/Components/Navbar.svelte'
  import Icon from '@iconify/svelte'
  //import HeroImg from '$lib/assets/hero.jpg?enhanced'
  import HeroImg from '$lib/assets/portrait_scaled.jpg?enhanced'

  import {
    githubLink,
    github,
    linkedInLink,
    mailLink,
    xLink,
    phoneLink,
    mail,
    x,
    phone
  } from '../../stores'

  export let data
</script>

<svelte:head>
  <title>Cv - Portfolio Jan-Peter</title>
  <meta name="description" content="Cv van Jan-Peter Dhallé, student toegepaste informatica" />
  <meta
    property="og:description"
    content="Cv van Jan-Peter Dhallé, student toegepaste informatica" />
  <meta property="og:title" content="Cv - Portfolio Jan-Peter" />
</svelte:head>

<Navbar />

<div class="bottom-gradient absolute bottom-0 h-screen w-screen print:hidden"></div>
<div class="gradient1 absolute -top-20 h-screen w-screen print:hidden"></div>

<div
  class="container mx-auto mt-24 print:mt-0 print:max-w-none print:bg-white print:text-sm print:text-black">
  <div>
    <div class="flex items-end justify-between">
      <h1
        class="mt-4 pl-2 pt-6 font-elec text-4xl font-bold uppercase tracking-tight text-secondary print:text-3xl print:text-black">
        Jan-Peter Dhallé
      </h1>
      <div class="flex gap-x-4">
        <button
          class="hidden cursor-pointer sm:block print:hidden"
          tabindex="0"
          aria-label="print my cv"
          on:click={() => window.print()}>
          <Icon icon="mdi:printer" width="2rem" />
        </button>
        <a
          class="print:hidden"
          href="/doc/cv_Jan-Peter_Dhallé.pdf"
          aria-label="download my cv in pdf format">
          <Icon icon="carbon:generate-pdf" width="2rem" />
        </a>
      </div>
    </div>
    <span
      class="mb-6 block border-b pb-4 pl-3 font-elec text-lg italic print:mb-2 print:border-black/20">
      Full-Stack Developer
    </span>
    <div class="flex flex-col gap-10 lg:mx-auto lg:flex-row print:m-0 print:flex-row print:gap-3">
      <div class="print:container-none flex-auto lg:min-w-[600px]">
        <h2 class="cv_heading">Profiel</h2>
        <!--load from markdown file -->
        <div class="ml-2">
          <svelte:component this={data.content} />
        </div>

        <!-- OPLEIDING -->
        <h2 class="cv_heading">Opleiding</h2>
        <div class="cv_flex">
          <span class="cv_item">
            Professionele bachelor in de Toegepaste Informatica
            <br />
            <p class="cv_item_extra">Specialisatie Application development</p>
            <p class="cv_item_extra">Thomas More Campus Geel</p>
          </span>
          <span class="cv_date">sinds september 2022</span>
        </div>

        <div class="cv_flex">
          <span class="cv_item">
            Industriële Ingenieurswetenschappen
            <br />
            <p class="cv_item_extra">Groep T, KU Leuven</p>
          </span>
          <span class="cv_date">september 2020- juli 2022, niet afgerond</span>
        </div>

        <div class="cv_flex">
          <span class="cv_item">
            Diploma secundair onderwijs, wetenschappen-wiskunde
            <br />
            <p class="cv_item_extra">Sint-Jozefcollege, Turnhout</p>
          </span>
          <span class="cv_date">september 2014- juni 2020</span>
        </div>
        <div class="cv_flex">
          <span class="cv_item">
            SAMWD Turnhout
            <br />
            <p class="cv_item_extra">Klassieke viool (Suzukimethode) &mdash; summa cum laude</p>
          </span>
          <span class="cv_date">2006-2020</span>
        </div>

        <!-- PROFESSIONELE WERKERVARING -->
        <h2 class="cv_heading">Professionele werkervaring</h2>
        <div class="cv_flex">
          <span class="cv_item">
            R. Janssen &amp; Zn nv
            <br />
            <p class="cv_item_extra">Jobstudent &mdash; magazijn en voorraadbeheer</p>
          </span>
          <span class="cv_date">juni&nbsp;2019, augustus 2022</span>
        </div>
      </div>

      <!-- SIDEBAR -->
      <div
        class="order-first rounded-xl bg-white/10 p-6 backdrop-blur-lg backdrop-saturate-150 sm:m-4 md:mx-auto md:w-8/12 md:min-w-[30%] lg:max-w-96 xl:min-w-0 print:m-2 print:mb-8 print:max-w-96 print:rounded-none print:border-r print:border-black/20 print:px-0 print:py-4 print:pr-2">
        <enhanced:img src={HeroImg} alt="Foto van Jan-Peter" class="max-h-80 w-full object-cover" />
        <!-- CONTACT -->
        <h2 class="cv_heading">Contact</h2>
        <ul class="block print:hidden">
          <!--<li class="py-2 font-elec text-lg font-bold print:text-base">-->
          <!--  <a class="flex items-end gap-4" href={$phoneLink}>-->
          <!--    <Icon icon="line-md:phone" width="2rem" inline={true} />-->
          <!--    Phone-->
          <!--  </a>-->
          <!--</li>-->
          <li class="py-2 font-elec text-lg font-bold print:text-base">
            <a class="flex items-end gap-4" href={$mailLink}>
              <Icon icon="line-md:email" width="2rem" inline={true} />
              E-mail
            </a>
          </li>
          <li class="py-2 font-elec text-lg font-bold print:text-base">
            <a class="flex items-end gap-4" href={$linkedInLink}>
              <Icon icon="line-md:linkedin" width="2rem" inline={true} />
              LinkedIn
            </a>
          </li>
          <li class="py-2 font-elec text-lg font-bold print:text-base">
            <a class="flex items-end gap-4" href={$githubLink}>
              <Icon icon="line-md:github" width="2rem" inline={true} />
              GitHub
            </a>
          </li>
        </ul>

        <!-- PRINTER CONTACT -->
        <div class="hidden flex-col items-start justify-center py-6 print:flex print:p-0">
          <!--<a-->
          <!--  href={$phoneLink}-->
          <!--  class="mx-2 flex items-center justify-center gap-4 py-2 print:text-sm">-->
          <!--  <Icon icon="line-md:phone" width="1.5rem" />{$phone}-->
          <!--</a>-->
          <a
            href={$mailLink}
            class="mx-2 flex items-center justify-center gap-4 py-2 print:text-xs">
            <Icon icon="mdi:email" width="1.5rem" />{$mail}
          </a>
          <a
            href={$linkedInLink}
            class="mx-2 flex items-center justify-center gap-4 py-2 print:text-sm">
            <Icon icon="mdi:linkedin" width="1.5rem" />Jan-Peter Dhallé
          </a>
          <a
            href={$githubLink}
            class="mx-2 flex items-center justify-center gap-4 py-2 print:text-sm">
            <Icon icon="mdi:github" width="1.5rem" />{$github}
          </a>
        </div>

        <!-- TALEN -->
        <h2 class="cv_heading">Talen</h2>
        <ul class="ml-4 font-elec text-lg print:text-base">
          <li class="list-disc">
            Nederlands - <span class="text-sm italic">Moedertaal</span>
          </li>
          <li class="list-disc">
            Engels - <span class="text-sm italic">Gevorderd</span>
          </li>
          <li class="list-disc">
            Frans - <span class="text-sm italic">Basis</span>
          </li>
        </ul>
        <!-- VRIJE TIJD -->
        <h2 class="cv_heading mt-4">Vrije tijd</h2>
        <ul class="ml-4 font-elec text-lg print:text-sm">
          <li class="list-disc">Violist/Muzikant</li>
          <li class="list-disc">Boeken lezen</li>
          <li class="list-disc">Computerprojecten</li>
        </ul>
      </div>
    </div>

    <!-- VERENIGINGEN, VRIJWILLIGERSWERK -->
    <div>
      <div>
        <h2 class="cv_heading break-before-page">Verenigingen, vrijwilligerswerk</h2>
        <div class="cv_flex">
          <span class="cv_item">
            Zandhoven Natuurlijk!
            <br />
            <p class="cv_item_extra">Vrijwilliger &mdash; webmaster</p>
          </span>
          <span class="cv_date">2022-heden</span>
        </div>
        <div class="cv_flex">
          <span class="cv_item">
            Vlaams Symfonisch Orkest
            <br />
            <p class="cv_item_extra">Violist, plaatsvervangend concertmeester</p>
          </span>
          <span class="cv_date">2020-heden</span>
        </div>
        <div class="cv_flex">
          <span class="cv_item">
            Woonzorgcentrum Sint-Lucia
            <br />
            <p class="cv_item_extra">Vrijwilliger &mdash; animator</p>
          </span>
          <span class="cv_date">april&nbsp;2017</span>
        </div>

        <!-- TECHNISCHE VAARDIGHEDEN -->
        <h2 class="cv_heading">Technische Vaardigheden</h2>
        <div
          class="my-6 grid grid-cols-1 gap-x-4 gap-y-16 md:w-auto md:grid-cols-2 lg:grid-cols-3 print:my-2 print:gap-y-2">
          <div class="ml-2 lg:ml-8">
            <h2 class="py-2 font-elec text-lg font-bold print:text-base">Programmeertalen</h2>
            <p>HTML/CSS, JavaScript, Python, PHP, Java, C#, C, C++, Go, Bash</p>
          </div>

          <div class="ml-2 lg:ml-8">
            <h2 class="py-2 font-elec text-lg font-bold print:text-base">Databases</h2>
            SQL, PostgresSQL, MongoDB
          </div>

          <div class="ml-2 lg:ml-8">
            <h2 class="py-2 font-elec text-lg font-bold print:text-base">
              Frameworks &amp; Libraries
            </h2>
            React, Angular, Laravel, Tailwind, Django, Spring Boot, .NET core, .NET Maui, Numpy, Pandas,
            Matplotlib, Svelte/Sveltekit
          </div>

          <div class="ml-2 lg:ml-8">
            <h2 class="py-2 font-elec text-lg font-bold print:text-base">Tools</h2>
            Linux, Windows, Vim/Neovim, Emacs, Visual Studio, Visual Studio Code, Jetbrains IDEs, Axure
            RP, Figma, Git, GitHub, GNU make, GNU coreutils, Terminal
          </div>
          <div class="ml-2 lg:ml-8">
            <h2 class="py-2 font-elec text-lg font-bold print:text-base">Documentatie</h2>
            Markdown, UML, Emacs org-mode
          </div>

          <div class="ml-2 lg:ml-8">
            <h2 class="py-2 font-elec text-lg font-bold print:text-base">Infrastructuur</h2>
            Cisco network essentials, Docker, Kubernetes, Virtual machines, Github Actions
          </div>
        </div>

        <!-- CERTIFICATEN -->
        <h2 class="cv_heading">Certificaten</h2>
        <div class="cv_flex">
          <span class="cv_item">
            <a
              href="/doc/certificate Angular.pdf"
              aria-label="download certificate in pdf format"
              class="flex gap-x-2">
              <span class="underline print:no-underline">
                Sololearn Angular
                <br />
              </span>
            </a>
          </span>
          <span class="cv_date">september&nbsp;2024</span>
        </div>
        <div class="cv_flex">
          <span class="cv_item">
            <a
              href="/doc/certificate Linux Essentials.pdf"
              aria-label="download certificate in pdf format"
              class="flex gap-x-2">
              <span class="underline print:no-underline">
                LPI Linux Essentials
                <br />
              </span>
            </a>
            <p class="cv_item_extra">Examenresultaat 18/20</p>
          </span>
          <span class="cv_date">januari&nbsp;2023</span>
        </div>
        <!-- PROJECTEN -->
        <!--     <h2 class="cv_heading">Projecten</h2> -->
        <!--     <div class="cv_flex"> -->
        <!--       <div class="cv_item"> -->
        <!--         <span class="cv_item">Home Server</span> -->
        <!--         <p class="ml-2 py-3"> -->
        <!--           Oude computer, waarvan ik enkele onderdelen veranderd heb en die nu dient als server. -->
        <!--           Host verschillende applicaties, zoals mediaserver, nextcloud, bestandssynchronisatie -->
        <!--           en nog veel meer! -->
        <!--           <br /> -->
        <!--           De hardware en alle services/configuratie heb ik gedocumenteerd in een org-mode bestand. -->
        <!--           Met een commando kan ik vanuit dit bestand alle configuratiebestanden opnieuw genereren -->
        <!--           <i>(literate programming).</i> -->
        <!--         </p> -->
        <!--         <ul class="ml-9"> -->
        <!--           <li class="list-disc">ZFS file system</li> -->
        <!--           <li class="list-disc">Ubuntu Linux</li> -->
        <!--           <li class="list-disc"> -->
        <!--             Centraal Org-mode document dat automatisch configuratiebestanden genereert -->
        <!--           </li> -->
        <!--           <li class="list-disc">Hosting van verschillende services en applicaties</li> -->
        <!--           <li class="list-disc">Docker compose met automatische updates</li> -->
        <!--           <li class="list-disc">Monitoring en e-mailnotificaties</li> -->
        <!--           <li class="list-disc">Automatische Backups (borgbackup)</li> -->
        <!--           <li class="list-disc">Verbinding via Tailscale VPN</li> -->
        <!--         </ul> -->
        <!--       </div> -->
        <!--       <span class="cv_date">2019-heden</span> -->
        <!--     </div> -->
        <!--     <div class="cv_flex"> -->
        <!--       <div class="cv_item"> -->
        <!--         <span class="cv_item">Schoolapplicatie projectmanagement</span> -->
        <!--         <p class="ml-2 py-3"> -->
        <!--           Een applicatie voor studenten, leraars en externe bedrijven, waarin studenten -->
        <!--           projecten kunnen kiezen die door bedrijven worden aangeboden. Inclusief een -->
        <!--           blogsysteem en tijdsregistratiesysteem. Gebouwd met een team van medestudenten. -->
        <!--         </p> -->
        <!--         <ul class="ml-9"> -->
        <!--           <li class="list-disc">Laravel en PHP</li> -->
        <!--           <li class="list-disc">Tweetalig</li> -->
        <!--           <li class="list-disc">Login</li> -->
        <!--           <li class="list-disc"> -->
        <!--             Samenwerking in een team van 6 leden gedurende lange periode -->
        <!--           </li> -->
        <!--           <li class="list-disc">SCRUM en Jira</li> -->
        <!--           <li class="list-disc">Git met team</li> -->
        <!--           <li class="list-disc">Online hosting</li> -->
        <!--         </ul> -->
        <!--       </div> -->
        <!--       <span class="cv_date">2024</span> -->
        <!--     </div> -->
        <!--     <div class="cv_flex"> -->
        <!--       <div class="cv_item"> -->
        <!--         <span class="cv_item">Automatische Repetitiekalender</span> -->
        <!--         <p class="ml-2 py-3"> -->
        <!--           Ik speel wekelijks viool in een orkest. Dit orkest heeft een website, waarop het -->
        <!--           repetitieprogramma staat. Ik heb een script geschreven in Python dat deze website -->
        <!--           scraped en de informatie opslaat in een agendabestand dat ik importeer in Google -->
        <!--           Calendar. -->
        <!--         </p> -->
        <!--         <ul class="ml-9"> -->
        <!--           <li class="list-disc">Python</li> -->
        <!--           <li class="list-disc">Webscraper met authenticatie die cookies opslaagt</li> -->
        <!--           <li class="list-disc">Omvorming naar ICAL kalenderbestand</li> -->
        <!--           <li class="list-disc">VPS hosting</li> -->
        <!--           <li class="list-disc">Import Google Calendar en andere tools</li> -->
        <!--         </ul> -->
        <!--       </div> -->
        <!--       <span class="cv_date">2023</span> -->
        <!--     </div> -->
        <!--     <div class="cv_flex"> -->
        <!--       <div class="cv_item"> -->
        <!--         <span class="cv_item">Persoonlijke website Isabel Dhallé</span> -->
        <!--         <p class="ml-2 py-3"> -->
        <!--           Persoonlijke website voor violiste. Met login en aanpasbare inhoud door administrator. -->
        <!--           Ook verbonden met PostgresSQL database. Administrator kan evenementen/concerten -->
        <!--           toevoegen. -->
        <!--         </p> -->
        <!--         <ul class="ml-9"> -->
        <!--           <li class="list-disc">Website volgens MVC patroon</li> -->
        <!--           <li class="list-disc">Django en Python</li> -->
        <!--           <li class="list-disc">Hosting in een VPS</li> -->
        <!--           <li class="list-disc">Applicatie en database in docker</li> -->
        <!--         </ul> -->
        <!--       </div> -->
        <!--       <span class="cv_date">2023</span> -->
        <!--     </div> -->
      </div>
    </div>
  </div>
</div>
<Footer />

<style lang="postcss">
  h2.cv_heading {
    @apply mb-4 border-b border-white/40 px-2 py-6 text-3xl lg:w-auto lg:text-4xl print:mb-2 print:border-black/30 print:py-2 print:text-base;
  }
  span.cv_item {
    @apply ml-2 text-lg font-bold lg:indent-8 lg:text-2xl print:text-base;
  }

  p.cv_item_extra {
    @apply ml-2 text-base font-normal italic lg:indent-8;
  }

  span.cv_date {
    @apply text-nowrap italic leading-loose;
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
