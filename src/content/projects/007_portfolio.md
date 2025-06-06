---
title: Portfolio
date: 2024-03-26
projectType: Schoolproject
thumbnail: /img/projects/portfolio_hero.png
highlight: true
link: https://janpeterdhalle.com
images:
  - /img/projects/portfolio_about.png
  - /img/projects/portfolio_about_light.png
  - /img/projects/portfolio_certification.png
  - /img/projects/portfolio_contact.png
  - /img/projects/portfolio_cv.png
  - /img/projects/portfolio_cv_light.png
  - /img/projects/portfolio_education.png
  - /img/projects/portfolio_experience_light.png
  - /img/projects/portfolio_hero.png
  - /img/projects/portfolio_project.png
  - /img/projects/portfolio_projecthighlights.png
  - /img/projects/portfolio_projects.png
  - /img/projects/portfolio_stage.png
  - /img/projects/portfolio_stage_light.png
  - /img/projects/portfolio_technologies.png
technologies:
  - svelte
  - javascript
  - figma
  - git
---

### 1. Inleiding

#### Een Digitale Visitekaartje en een Leerervaring

Deze website, mijn persoonlijke portfolio, is een project dat twee doelen diende. Ten eerste, het creëren van een professioneel platform om mijn vaardigheden en projecten te presenteren. Ten tweede, het was de perfecte gelegenheid om dieper in **SvelteKit** te duiken en een flexibele, datagedreven architectuur te implementeren zonder de noodzaak van een traditionele database.

### 2. Het Resultaat: Een Professioneel en Gestructureerd Platform

Het eindresultaat is een op maat gemaakte, professionele website die fungeert als mijn digitale visitekaartje. De focus lag op een heldere structuur, een strak design en gebruiksgemak. De site is opgedeeld in duidelijke secties zoals Technologieën, Certificaten, Stage, Projecten, Ervaring en Opleiding.

#### Visueel Ontwerp en Gebruikerservaring

Voor het visuele ontwerp heb ik een professionele look gecreëerd met zowel een **lichte als donkere modus**, zodat de bezoeker zelf kan kiezen wat het prettigst leest. Daarnaast vond ik het belangrijk dat mijn contactgegevens altijd prominent en makkelijk bereikbaar zijn doorheen de hele website.

![De homepage van het portfolio met het donkere thema](/img/projects/portfolio_hero.png)

![De Over mij pagina in het lichte thema](/img/projects/portfolio_about_light.png)

### 3. De Aanpak: Een Datagedreven Architectuur zonder Database

Een van de kernprincipes achter dit project was het creëren van een flexibel en makkelijk te onderhouden systeem. Dit heb ik bereikt door een slimme, datagedreven aanpak zonder traditionele database.

#### Data als JSON-objecten

Alle gestructureerde data op de site – zoals mijn vaardigheden, opleidingen, werkervaring en certificaten – is opgeslagen in lokale **JSON-bestanden**. Dit biedt enorme flexibiliteit. Ik kan deze data eenvoudig ophalen, filteren en hergebruiken op verschillende pagina's. Zo kan ik op de homepage bijvoorbeeld een selectie van "uitgelichte projecten" tonen, terwijl de projectenpagina een volledig overzicht geeft, allemaal door dezelfde databron te bevragen en te verfijnen.

![Overzicht van de technologiesectie, dynamisch geladen uit JSON-data](/img/projects/portfolio_technologies.png)

#### Uitbreidbare Projecten met Markdown en Metadata

Voor de project-posts, zoals deze die je nu leest, gebruik ik **Markdown**-bestanden. Dit maakt het schrijven en aanpassen van content zeer eenvoudig. Het echte geheim zit echter in de **metadata** die ik bovenaan elk Markdown-bestand plaats. Hierin definieer ik eigenschappen zoals de titel, datum, gebruikte technologieën en of een project uitgelicht moet worden.

Een server-side script in SvelteKit scant de projectenmap, leest deze metadata uit, en creëert een soort interne "API". Hierdoor kan ik de projecten dynamisch tonen, filteren en sorteren op de website. Deze aanpak maakt het portfolio niet alleen makkelijk te beheren, maar ook zeer schaalbaar en uitbreidbaar voor de toekomst.

![Overzicht van alle projecten, dynamisch geladen en gesorteerd op basis van metadata](/img/projects/portfolio_projects.png)

### 4. Besluit: Een Flexibel Platform en Verdiepte Kennis

Dit portfolio-project was een bijzonder waardevolle onderneming. Het heeft geresulteerd in een professioneel en functioneel platform, maar belangrijker nog, het was een diepgaande oefening in het bouwen van een slimme, datagedreven architectuur. Door te werken met lokale data-objecten en een op metadata gebaseerd content-systeem, heb ik een solide en onderhoudbare basis gelegd voor mijn online aanwezigheid en mijn vaardigheden in SvelteKit aanzienlijk verdiept.
