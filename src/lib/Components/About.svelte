<script>
  import LogoImg from './LogoImg.svelte'
</script>

<div
  class="container z-10 mx-auto my-24 rounded-2xl bg-white/10 p-8 backdrop-blur-lg backdrop-saturate-150"
>
  <h2 id="about" class="p-4 text-center font-elec text-5xl font-bold text-secondary/85">
    Over mij
  </h2>

  <div class="z-10 gap-3 p-8 md:grid md:grid-flow-row md:grid-cols-3">
    <div class="z-10 flex items-center justify-center">
      <LogoImg class="z-10 max-w-80" />
    </div>
    <article class="col-span-2 flex flex-col justify-center">
      <p
        class="prose z-10 max-w-none border-l-2 border-green-500 p-3 text-lg text-white md:prose-xl"
      >
        Ik ben een student met veel interesse en nieuwsgierigheid voor informatica en alles wat met
        computers te maken heeft. Ik leer graag bij. Hierdoor heb ik zelfstandig ervaring opgedaan
        en verschillende technologieën ontdekt.
      </p>
      <p
        class="prose z-10 max-w-none border-l-2 border-green-500 p-3 text-lg text-white md:prose-xl"
      >
        In mijn opleiding toegepaste informatica heb ik ook de kans gekregen om veel
        praktisch-gerichte projecten uit te voeren, vaak in een team en soms voor een bedrijf. Ik
        werk actief mee in teamverband en hecht veel belang aan de kwaliteit en impact van mijn
        werk.
      </p>
      <!-- Hobbies -->
      <p
        class="prose z-10 max-w-none border-l-2 border-green-500 p-3 text-lg text-white md:prose-xl"
      >
        Al sinds erg jonge leeftijd ben ik creatief bezig met muziek en instrumenten. Op driejarige
        leeftijd ben ik begonnen met vioolspelen. Met deze hobby heb ik deelgenomen aan
        internationale kampen en heb ik jonge muzikanten begeleid.
      </p>
      <!-- Toekomst abities -->
      <p
        class="prose z-10 max-w-none border-l-2 border-green-500 p-3 text-lg text-white md:prose-xl"
      >
        In de toekomst wil ik met mijn kennis binnen IT, het leven van andere mensen en bedrijven
        verbeteren. Ook wil ik creativiteit combineren met IT om unieke producten te creëren.
      </p>
      <p
        class="prose z-10 max-w-none border-l-2 border-green-500 p-3 text-lg text-white md:prose-xl"
      >
        Interesse? Aarzel niet om <a href="/contact" class="text-secondary">contact</a> op te nemen
        en bekijk
        <a href="/cv" class="text-secondary">mijn cv.</a>
      </p>
    </article>
  </div>
</div>

<style lang="postcss"></style>
