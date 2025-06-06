---
title: Museumplanning bezoekerscentrum OPZ
date: 2023-05-21
thumbnail: /img/projects/ps1_project_home.png
projectType: Schoolproject
repos:
  - https://github.com/janpeterd/PS1-project
images:
  - /img/projects/ps1_project_home.png
  - /img/projects/ps1_project_overzicht.png
technologies:
  - python
  - django
  - git
---

### 1. Inleiding

#### De Uitdaging: Een Planningssysteem voor het OPZ Geel

Als eindopdracht voor het vak "Professionele Vaardigheden" in mijn eerste jaar Toegepaste Informatica, kreeg ik de opdracht een webapplicatie te ontwikkelen voor het [Bezoekerscentrum Passage](https://www.opzgeel.be/nl/bezoekerscentrum) van het Openbaar Psychiatrisch Zorgcentrum (OPZ) in Geel. Het doel was het automatiseren van het volledige proces voor het aanvragen en inplannen van rondleidingen.

### 2. Wat is het? Een Geautomatiseerd Planningssysteem

Het resultaat is een webapplicatie die het planningsproces voor zowel bezoekers als gidsen stroomlijnt. De kernfunctionaliteiten omvatten:

- **Online Aanvragen:** Een eenvoudig formulier voor bezoekers om een rondleiding aan te vragen.
- **Automatische Notificaties:** Beschikbare gidsen ontvangen automatisch een e-mailnotificatie bij een nieuwe aanvraag.
- **Aanmelden voor Gidsen:** Een overzichtspagina waar gidsen zich kunnen aanmelden voor een specifieke rondleiding.
- **Heldere Communicatie:** Als geen gids beschikbaar is, wordt de aanvrager automatisch geïnformeerd met het verzoek een nieuw moment te kiezen.

![Homepage met het afsprakenformulier voor bezoekers](/img/projects/ps1_project_home.png)

### 3. De Aanpak: Van Basis tot Volwaardige Webapplicatie

Dit project was een diepgaand leertraject waarin ik vrijwel de volledige applicatie zelfstandig heb ontwikkeld – een prestatie waar ik nog steeds trots op ben.

#### Een Sprong in het Diepe: Mijn Leertraject

Voorafgaand aan dit project was mijn programmeerervaring beperkt tot de basis van Python en statische webpagina's. Dit project was mijn eerste kennismaking met het bouwen van een volledige webapplicatie. Het zelfstandig uitzoeken van backend-logica, database-integratie, e-mailverzending en deployment was een steile, maar enorm waardevolle leercurve.

#### Technologiekeuzes en Uitdagingen

Voor de realisatie heb ik de volgende technologieën ingezet:

- **Backend:** **Django** (Python) voor de server-side logica en de MVC-architectuur.
- **Database:** **Supabase** als cloud-gebaseerde PostgreSQL-database.
- **Hosting:** **Vercel**. Aangezien Vercel primair gericht is op JavaScript, vereiste dit het schrijven van een **custom deployment script** om de Django-applicatie correct te kunnen hosten, wat een interessante technische uitdaging was.
- **E-mailverzending:** De **Gmail API** voor het geautomatiseerd versturen van alle notificaties.

![Overzichtspagina voor ingelogde gidsen met openstaande bezoekaanvragen](/img/projects/ps1_project_overzicht.png)

### 4. Besluit: Een Belangrijke Mijlpaal

Het eindresultaat was een volledig functionele webapplicatie die een reële behoefte van het OPZ Bezoekerscentrum invulde. Dit eerstejaarsproject was een cruciale mijlpaal in mijn ontwikkeling als programmeur. Het stelde mij in staat om fundamentele concepten van webontwikkeling en -deployment in de praktijk te brengen en legde een solide basis voor de complexere projecten die zouden volgen.
