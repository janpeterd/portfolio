<script>
  import PortraitImg from '$lib/assets/portrait.jpg?enhanced'
  // import HeroImg from '$lib/assets/hero.jpg?enhanced'
</script>

<div
  class="z-10 mx-auto my-24 rounded-2xl bg-white/10 backdrop-blur-lg backdrop-saturate-150 md:container md:p-8">
  <div class="z-10 gap-4 p-8 lg:grid lg:grid-flow-row lg:grid-cols-3">
    <article class="col-span-2 flex flex-col justify-center">
      <h2
        id="about"
        class="p-4 font-elec text-3xl font-semibold uppercase tracking-tight text-secondary text-secondary/85 sm:text-4xl">
        Over mij
      </h2>
      <!-- Beschrijving -->
      <p class="about_text">
        Ik ben een enthousiaste student met een grote interesse en nieuwsgierigheid voor informatica
        en computers. Ik ben leergierig en heb hierdoor zelfstandig, door middel van zelfstudie,
        verschillende technologieën ontdekt en ervaringen opgedaan.
      </p>
      <p class="about_text">
        Tijdens mijn opleiding Toegepaste Informatica heb ik de kans gekregen om veel
        praktijkgerichte projecten uit te voeren, vaak in teamverband en soms voor bedrijven. Ik
        werk graag samen met anderen en hecht veel waarde aan de kwaliteit en impact van mijn werk.
      </p>
      <!-- Hobbies -->
      <p class="about_text">
        Al van jongs af aan ben ik creatief bezig met muziek en instrumenten. Op driejarige leeftijd
        ben ik begonnen met vioolspelen. Met deze hobby heb ik deelgenomen aan internationale kampen
        en heb ik jonge muzikanten begeleid.
      </p>
      <!-- Toekomst abities -->
      <p class="about_text">
        In de toekomst wil ik mijn kennis binnen de IT-sector inzetten om het leven van mensen en
        bedrijven te verbeteren. Daarnaast wil ik mijn creativiteit combineren met IT om unieke
        producten te creëren.
      </p>
      <p class="about_text prose-a:text-secondary">
        Geïnteresseerd? Neem gerust <a href="/contact" class="text-secondary">contact</a>
        met me op of bekijk
        <a href="/cv">mijn cv.</a>
      </p>
    </article>
    <div class="z-10 mt-6 flex items-center justify-center lg:mt-0">
      <!-- <PortraitImg class="z-10 max-w-80" /> -->
      <enhanced:img
        class="z-10 mx-auto w-80 rounded-3xl object-cover"
        src={PortraitImg}
        alt="me"
        fetchpriority="high"
        loading="eager"
        sizes="min(1300px, 100vw)" />
    </div>
  </div>
</div>

<style lang="postcss">
  .about_text {
    @apply prose z-10 max-w-none border-l-2 border-green-500 p-3 text-lg text-white;
  }
</style>
