---
title: Portfolio
date: 2024-03-26
projectType: Schoolproject
thumbnail: /img/projects/portfolio_home.png
highlight: true
link: https://janpeterdhalle.com
technologies:
  - svelte
  - javascript
  - figma
  - git
---

### 1. Inleiding

#### Een Digitale Visitekaartje en een Leerervaring

Deze website, mijn persoonlijke portfolio, is een project dat twee doelen diende. Ten eerste, het creëren van een professioneel platform om mijn vaardigheden en projecten te presenteren. Ten tweede, het was de perfecte gelegenheid om dieper in **SvelteKit** te duiken, een modern JavaScript-framework waar ik mijn kennis van wilde verbreden en in de praktijk wilde brengen.

### 2. Wat is het? Een Persoonlijk en Dynamisch Platform

Het eindresultaat is een op maat gemaakte website die fungeert als mijn digitale visitekaartje. Het is meer dan een statische pagina; het is een dynamisch platform dat is ontworpen om mee te groeien met mijn carrière.

#### Kernfunctionaliteiten

De site omvat enkele essentiële onderdelen:

- Een overzichtelijk **digitaal CV** met mijn vaardigheden en ervaring.
- Een downloadbare **PDF-versie van mijn CV**.
- Een dynamisch **projectenoverzicht**, opgezet als een blog.
- Een persoonlijke **"Over Mij"** sectie.

#### Visueel Ontwerp: Donker, Subtiel en Persoonlijk

Voor het ontwerp koos ik bewust voor een donker thema, verrijkt met subtiele radiale gradiënten en een lichte korreltextuur op de achtergrond. Dit zorgt voor een prettige kijkervaring en een unieke esthetiek.

![De homepage van het portfolio met het kenmerkende donkere thema](/img/projects/portfolio_home.png)

### 3. De Aanpak: Van Markdown tot 3D-Animatie

De realisatie van dit portfolio omvatte diverse technische en creatieve uitdagingen, van content management tot 3D-design.

#### Een Dynamische Projectensectie met SvelteKit en Markdown

Om de projectartikelen (zoals deze!) makkelijk te kunnen beheren, schrijf ik ze in **Markdown**. Met de preprocessor **mdsvex** worden deze bestanden omgezet naar Svelte-componenten. Het meest uitdagende aspect was het dynamisch genereren van de projectenoverzichtspagina. Hiervoor heb ik een custom server-side API-route gebouwd die:

1.  De projectenmap scant op Markdown-bestanden.
2.  Een lijst indexeert en een unieke `slug` (URL) genereert voor elk artikel.
3.  Metadata zoals de publicatiedatum extraheert en dit alles als een JSON-endpoint aanbiedt.

![Overzicht van de projectenpagina, dynamisch geladen via een custom API](/img/projects/portfolio_projects.png)

#### Een Print-Vriendelijk en Responsief CV

Naast een responsief ontwerp heb ik specifieke CSS-regels toegevoegd die enkel van toepassing zijn bij het printen. Dit zorgt ervoor dat mijn CV er op papier net zo professioneel uitziet als op het scherm.

![De CV-pagina (links) en de geoptimaliseerde printweergave (rechts)](/img/projects/portfolio_print.png)

#### Het Creatieproces: Logo's in 2D en 3D

De logo's heb ik zelf ontworpen in **Inkscape** (2D) en vervolgens een 3D-versie gecreëerd in **Blender**. Als extra uitdaging heb ik hier ook een korte animatie van gemaakt. Dit toont mijn bereidheid om buiten de grenzen van pure code te treden en ook visuele en creatieve vaardigheden toe te passen.

<video src="/img/projects/portfolio_logorender.mp4" loop controls aria-label="3D logo animatie"></video>

### 4. Besluit: Een Functioneel Platform en een Verdiepte Kennis

Dit portfolio-project was een bijzonder waardevolle onderneming. Het heeft geresulteerd in een functioneel en persoonlijk platform waarmee ik mezelf professioneel kan presenteren. Minstens even belangrijk was de kans die het bood om mijn vaardigheden in Svelte en SvelteKit aanzienlijk te verdiepen, van component-based design tot het bouwen van server-side logica.
