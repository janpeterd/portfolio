---
title: Carpooling-applicatie voor Axxes
date: 2025-02-20
projectType: Schoolproject
thumbnail: /img/projects/carpool_events.png
highlight: true
attachments:
  - /doc/projects/Carpool-Project-Plan.pdf
images:
  - /img/projects/carpool_events.png
  - /img/projects/carpool_rides.png
video: /img/projects/carpool_promo.mp4
technologies:
  - react
  - javascript
  - typescript
  - java
  - spring
  - auth0
  - kubernetes
  - figma
  - git
---

### 1. Inleiding

#### Het Afstudeerproject: Een Multidisciplinaire Teamopdracht

Als sluitstuk van de opleiding Toegepaste Informatica heb ik meegewerkt aan "Project 4.0", een grootschalig project in teamverband. Ons team was een diverse mix van zes (internationale) studenten met verschillende specialisaties: drie applicatieontwikkelaars (waaronder ikzelf), twee AI-specialisten en één cybersecurity-expert. Voor dit project werkten we aan een reële opdracht voor het IT-consultancybedrijf [Axxes](https://axxes.com/).

### 2. De Uitdaging: Een Intelligente Carpool-oplossing

Axxes gaf ons de opdracht een webapplicatie te ontwikkelen die het carpoolen naar bedrijfsevenementen voor hun consultants vereenvoudigt. De kernuitdaging was niet alleen het matchen van gebruikers op basis van locatie, maar ook de integratie van een AI-component die rekening houdt met individuele voorkeuren om zo de best mogelijke carpoolgroepen te vormen.

![Overzicht van de evenementen in de carpool-applicatie](/img/projects/carpool_events.png)

### 3. De Aanpak: Van Grondige Planning tot Realisatie

Het project was opgedeeld in twee hoofdfasen: een diepgaande planningsfase en een intensieve realisatiefase.

#### Fase 1: Een Solide Fundament: Planning en Ontwerp

Het eerste semester stond volledig in het teken van planning. Na een grondige analyse van technologieën kozen we voor een moderne en robuuste stack, met o.a. **Java/Spring Boot** (backend), **React/Next.js** (frontend) en **Python/FastAPI** (AI-services). Parallel hieraan werkten we gedetailleerde modellen uit voor de infrastructuur, database en use-cases. Het visuele ontwerp kreeg vorm in **Figma**, waar we prototypes voor alle schermen ontwikkelden. Deze fase werd afgerond met een presentatie van ons volledige [projectplan](/doc/projects/Carpool-Project-Plan.pdf) aan Axxes.

![UI Prototypes ontwikkeld in Figma](/img/projects/carpool_prototypes.png)

#### Fase 2: Van Plan naar Product: Realisatie en Mijn Rol

De ontwikkeling vond plaats in drie intensieve sprints van een week. Als applicatieontwikkelaar heb ik mij voornamelijk gericht op de backend en de DevOps-infrastructuur. Mijn kernbijdragen waren:

- **Backend en API Ontwikkeling:** Ik heb het databasemodel geïmplementeerd met Spring Data JPA en voor elke entiteit volledige CRUD API-endpoints ontwikkeld.

- **Een Geavanceerd Notificatiesysteem:** Ik was verantwoordelijk voor het ontwerp en de bouw van een uitgebreid notificatiesysteem, bestaande uit:

  - **E-mailnotificaties** via Java Spring Boot en Thymeleaf-templates.
  - **Realtime notificaties** via een WebSocket-verbinding, die zowel globale als gebruikersspecifieke meldingen ondersteunt. Ik heb hiervoor zowel de backend-logica als de bijbehorende frontend-component gebouwd.

- **Beveiliging met Auth0:** Ik heb de beveiliging van de applicatie geïmplementeerd, zowel aan de backend- (beveiligen van API-routes met JWT's en rollen) als aan de frontend-zijde (afschermen van admin-routes met een custom Guard-component).

- **DevOps en Deployment:** Ik was nauw betrokken bij het opzetten van de deployment-strategie, inclusief het schrijven van Dockerfiles en het configureren van de Kubernetes-cluster en de GitLab CI/CD-pipeline.

![De CI/CD-pipeline in GitLab voor automatische deployments](/img/projects/carpool_pipeline.png)

### 4. Het Eindresultaat: Een Succesvolle Oplevering

Het eindproduct is een volledig functionele en responsieve webapplicatie waar ik, zowel op persoonlijk als op teamniveau, bijzonder trots op ben. De applicatie werd tijdens de eindpresentatie zeer positief onthaald door zowel onze begeleiders als de vertegenwoordiger van Axxes, die onder de indruk waren van de rijke functionaliteit en de professionele afwerking.

Dit project was een onschatbare ervaring in teamwork, complexe softwarearchitectuur en het opleveren van een hoogwaardig product onder een strakke planning.

<video style="max-width: 100%; max-height: 600px; display: block; margin: auto;" src="/img/projects/carpool_promo.mp4" controls loop aria-label="Promotievideo applicatie"></video>

![Detailpagina van beschikbare ritten voor een evenement](/img/projects/carpool_rides.png)
