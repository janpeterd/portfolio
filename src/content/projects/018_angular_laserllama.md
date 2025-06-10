---
title: Laser Llama
date: 2024-05-27
projectType: Schoolproject
thumbnail: /img/projects/laserllama_performanceform.png
images:
  - /img/projects/laserllama_admin.png
  - /img/projects/laswerllama_add_artist.png
  - /img/projects/laserllama_add_performance.png
  - /img/projects/laserllama_artistform.png
  - /img/projects/laserllama_performanceform.png
technologies:
  - angular
  - dotnet
  - docker
  - azure
  - auth0
  - typescript
  - git
  - figma
attachments:
  - /doc/projects/Laser Llama Documentatie.pdf
---

### 1. Inleiding

#### Een Volledige Festivalbeheer Applicatie

Voor het vak 'Angular' kregen we de opdracht om in teamverband een volledige full-stack applicatie te bouwen. Het resultaat is Laser Llama: een uitgebreid platform voor het beheer van een muziekfestival. De uitdaging lag in het naadloos integreren van een frontend, een backend en externe services tot één coherent en functioneel geheel, van ontwikkeling tot online deployment.

Als team van vijf studenten hebben we dit project van begin tot eind gerealiseerd. Mijn focus lag voornamelijk op de **backend-architectuur in .NET**, het opzetten van de **beheerspagina's in Angular**, en een groot deel van het **visuele ontwerp en de gebruikerservaring**.

### 2. Het Resultaat: Een Functioneel en Visueel Aantrekkelijk Beheerplatform

Het eindproduct is een webapplicatie die twee verschillende ervaringen biedt. Voor de festivalbezoeker is er een publieke website waar de line-up, podia en ticketinformatie te raadplegen zijn. Voor de organisator is er een beveiligde 'admin'-omgeving waar alle content beheerd kan worden.

#### Visueel Ontwerp en Gebruikerservaring

Ik heb een donker, neon-geïnspireerd thema ontworpen dat past bij de sfeer van een muziekfestival. De focus lag op een intuïtieve interface voor de beheerders. Via een centraal dashboard kunnen zij moeiteloos artiesten, optredens, podia en meer beheren (CRUD-operaties). Dit zorgt ervoor dat het beheer van het festival snel en efficiënt kan verlopen.

![Het centrale 'Manage Content' dashboard voor beheerders](/img/projects/laserllama_hero.png)

![De beheerspagina voor artiesten, met opties voor aanmaken, bewerken en verwijderen](/img/projects/laserllama_artists.png)

### 3. De Aanpak: Full-Stack Architectuur

#### Van Concept tot Ontwerp

Voordat we een enkele regel code schreven, zijn we als team gestart met een brainstormsessie om het concept van ons festival vorm te geven. Vanuit dit idee voor 'Laser Llama' heb ik vervolgens in **Figma** de visuele stijl en de eerste prototypes voor de schermen ontworpen. Tegelijkertijd werkten we een gedetailleerd **databasemodel** uit om de structuur van alle data (artiesten, podia, optredens, etc.) vast te leggen. Deze grondige voorbereiding zorgde voor een duidelijke blauwdruk voor de technische ontwikkeling.

#### Backend: .NET Core, Docker en Azure Hosting

Mijn voornaamste bijdrage was de ontwikkeling van de backend. Ik heb een **REST API in .NET Core** gebouwd die alle data voor de applicatie beheert. Een belangrijke technische uitdaging was de integratie met de **Discogs API** voor het ophalen van artiesteninformatie. Om te voorkomen dat we de rate limits van deze externe API overschreden, heb ik een **caching-laag** in onze backend geïmplementeerd.

De volledige backend-applicatie werd gecontaineriseerd met **Docker**. Dit maakte de setup niet alleen eenvoudig, maar stelde ons ook in staat om de backend succesvol te hosten in een container op **Microsoft Azure**. De bijbehorende database werd eveneens op Azure ondergebracht, wat zorgde voor een schaalbare en betrouwbare live-omgeving.

#### Frontend, Authenticatie en Deployment

De frontend is een Single Page Application (SPA) gebouwd in **Angular**. Ik was verantwoordelijk voor het bouwen van de admin-pagina's die beheerders een gebruiksvriendelijke interface bieden om de data via de .NET API te manipuleren. Voor de beveiliging hebben we **Auth0** geïntegreerd voor een veilige login en rolgebaseerd toegangsbeheer.

De voltooide frontend werd gehost via **sinners.be**, waardoor het festivalplatform publiek toegankelijk werd en kon communiceren met onze backend op Azure.

![Het toevoegen van een optreden, met de mogelijkheid om direct nieuwe artiesten of podia aan te maken](/img/projects/laserllama_add_performance.png)

### 4. Besluit: Een Leerrijke Duik in Full-Stack Development

Het Laser Llama-project was een uitzonderlijk waardevolle ervaring. Het heeft geresulteerd in een complete en functionele applicatie en bood mij de kans om diep in backend-ontwikkeling met .NET te duiken. Het ontwerpen van een API, het integreren van externe services en het implementeren van praktische oplossingen zoals caching waren cruciale leerpunten.

Dit project heeft mijn vaardigheden als ontwikkelaar aanzienlijk verbreed en mijn vermogen om complexe systemen van concept en ontwerp tot daadwerkelijke online deployment te realiseren versterkt, waarbij ik de brug heb geslagen tussen backend-logica en een gebruiksvriendelijke frontend-interface.
