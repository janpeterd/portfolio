---
title: Portfolio
date: 2024-03-26
thumbnail: /img/projects/portfolio_home.png
highlight: true
link: https://janpeterdhalle.com
technologies:
  - svelte
  - sveltekit
  - javascript
  - figma
  - git
---

## Introductie: De Keuze voor SvelteKit

Deze website, mijn digitale visitekaartje, heb ik volledig zelf ontwikkeld met
behulp van [SvelteKit](https://kit.svelte.dev/). SvelteKit is een modern en
intuïtief JavaScript-framework dat een naadloze integratie van JavaScript, HTML
en CSS mogelijk maakt. Hoewel ik in het verleden al eens kort kennis had
gemaakt met Svelte, bood dit project de perfecte gelegenheid om dieper in de
materie te duiken en er een volwaardig project mee te realiseren.

## Kernfunctionaliteiten van het Portfolio

Vanaf het begin stelde ik enkele essentiële eisen aan de functionaliteit en
inhoud van mijn portfolio:

- Een **digitaal CV** met een overzicht van mijn vaardigheden en ervaring.
- De mogelijkheid om mijn **CV als PDF te downloaden**.
- Een dynamisch **overzicht van mijn projecten**, vergelijkbaar met een blog.
- Een persoonlijke **"Over Mij" sectie**.

Hoewel sommige van deze onderdelen relatief eenvoudig te implementeren zijn met
standaard HTML en CSS, vereiste met name het projectenoverzicht een meer
geavanceerde, gebruiksvriendelijke en blog-achtige aanpak.

## De Projectensectie: Dynamisch en Content-Gedreven

Om de projectartikelen flexibel en eenvoudig te kunnen beheren, schrijf ik deze
in [Markdown](https://en.wikipedia.org/wiki/Markdown). Markdown is een
lichtgewicht opmaaktaal die het mogelijk maakt om platte tekst te structureren
met elementen zoals koppen, lijsten en tekstopmaak (zoals **vet** of
_cursief_).

Voor de integratie van Markdown in SvelteKit maak ik gebruik van
[mdsvex](https://mdsvex.pngwn.io/docs), een krachtige preprocessor die
Markdown-bestanden omzet naar Svelte-componenten. Dit stelt me in staat om de
content van mijn projecten efficiënt te beheren en weer te geven.

Het meest uitdagende technische aspect was het dynamisch genereren van de
overzichtspagina voor projecten en het implementeren van navigatie (zoals links
naar vorige/volgende artikelen) binnen individuele projectpagina's. Hiervoor
heb ik een server-side API-route gecreëerd. Dit script:

1.  Scant de daarvoor bestemde map op Markdown-bestanden.
2.  Indexeert deze bestanden in een lijst.
3.  Genereert een unieke `slug` voor elk artikel (het deel dat in de URL
    verschijnt).
4.  Extraheert metadata zoals de publicatiedatum uit de bestanden. Deze
    gestructureerde data wordt vervolgens via de API in JSON-formaat aangeboden aan
    de frontend. Wanneer een bezoeker de [/projects](/projects) pagina opent, wordt
    deze API aangeroepen en worden de projecten overzichtelijk gepresenteerd.

![Overzicht van de projectenpagina](/img/projects/portfolio_projects.png)

## Het Curriculum Vitae: Responsief en Printvriendelijk

Hoewel de basisstructuur van een digitale CV relatief eenvoudig is, besteedde
ik veel aandacht aan de layout. De uitdaging lag voornamelijk in het creëren
van een responsief ontwerp dat op diverse schermformaten – van desktop tot
smartphone – optimaal leesbaar blijft.

Aangezien een CV vaak wordt afgedrukt, heb ik specifieke CSS-regels toegevoegd
die enkel van toepassing zijn bij het printen. Dit zorgt voor een schone en
professionele weergave op papier, geoptimaliseerd voor het A4-formaat.

![De CV-pagina op de website](/img/projects/porfolio_cv.png)
![Printer-vriendelijke weergave van de CV](/img/projects/portfolio_print.png)

## Visueel Ontwerp: Een Donker Thema met Subtiele Effecten

Voor het visuele ontwerp koos ik bewust voor een donker thema, wat ik
persoonlijk als prettiger ervaar voor langere leessessies. Het vinden van de
juiste esthetiek vergde enig experimenteren. Uiteindelijk viel mijn keuze op
het gebruik van subtiele radiale gradiënten, die van een lichte kleur naar
volledige transparantie verlopen. Een masker zorgt ervoor dat dit effect
verfijnd en niet overheersend is. Een achtergrondafbeelding met een lichte
korreltextuur voegt diepte en een tastbaar element toe aan het geheel.

![De homepage van het portfolio](/img/projects/portfolio_home.png)

## Logo Ontwerp: Van 2D naar 3D

### Het Basislogo

Mijn logo's heb ik zelf ontworpen met [Inkscape](https://inkscape.org/). Ik heb hiervoor Inkscape gebruikt,
open-source software die ideaal is voor het creëren van Scalable Vector
Graphics (SVG's). Het voordeel van SVG is dat de afbeeldingen oneindig
schaalbaar zijn zonder kwaliteitsverlies, wat essentieel is voor een logo dat
in verschillende formaten en contexten gebruikt wordt. Ik heb een variant met
een laptop-icoon en een tekstlogo gebaseerd op mijn voorletters ontwikkeld.
Laatstgenoemde bleek bijzonder geschikt als `favicon`.

![Het laptop-icoon logo](/img/projects/portfolio_logo.png) ![Het
tekstlogo](/img/projects/portfolio_logotekst.png)

### Een 3D-Dimensie

Geïnspireerd door online voorbeelden, besloot ik een extra dimensie toe te voegen door een 3D-versie van mijn logo te creëren. Met behulp
van **Blender** heb ik een gratis 3D-model van een laptop gecombineerd met een
zelfgemaakt 3D-model van mijn logo.

![Werken aan het 3D-model in Blender](/img/projects/portfolio_blender.png)

Het eindresultaat is een render waar ik erg tevreden over ben. ![De 3D-render
van het logo](/img/projects/portfolio_logorender.png)

Als extra uitdaging en uit pure nieuwsgierigheid, heb ik ook een korte animatie
van het 3D-logo gemaakt. Hoewel deze momenteel niet actief op de site wordt
gebruikt, ben ik trots op het resultaat:

<video src="/img/projects/portfolio_logorender.mp4" loop controls aria-label="3D logo animatie"></video>

## Conclusie: Een Leerzaam en Functioneel Project

Dit portfolio project was een waardevolle onderneming. Het heeft niet alleen
geresulteerd in een platform waarmee ik mezelf professioneel kan presenteren
aan potentiële werkgevers en andere geïnteresseerden, maar het bood me ook een
uitstekende gelegenheid om mijn vaardigheden in Svelte en SvelteKit verder te
ontwikkelen en te verdiepen.
