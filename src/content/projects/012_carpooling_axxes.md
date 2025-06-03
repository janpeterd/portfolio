---
title: Carpooling-applicatie voor Axxes
date: 2025-02-20
thumbnail: /img/projects/carpool_events.png
highlight: true
attachments:
  - /doc/projects/Carpool-Project-Plan.pdf
images:
  - /img/projects/carpool_events.png
  - /img/projects/carpool_rides.png
technologies:
  - react
  - javascript
  - typescript
  - java
  - spring
  - kubernetes
  - figma
  - git
---

## Introductie: Het Afstudeerproject "Project 4.0"

Als sluitstuk van de opleiding Toegepaste Informatica werkten we in ons laatste jaar aan "Project 4.0", een omvangrijk project in teamverband. Ons team bestond uit zes studenten, waaronder internationale studenten, met een diverse mix aan specialisaties: drie applicatieontwikkelaars (waaronder ikzelf), twee AI-specialisten, en één cybersecurity-expert. Elke projectopdracht was afkomstig van een extern bedrijf.

Onze opdrachtgever was [Axxes](https://axxes.com/), een gerenommeerd IT-consultancybedrijf, voornamelijk gevestigd in Antwerpen.

![Logo van Axxes, de opdrachtgever](/img/projects/carpool_logo.webp)

## De Opdracht: Een AI-Gedreven Carpool Applicatie

Axxes gaf ons de opdracht een webapplicatie te ontwikkelen die het carpoolproces naar bedrijfsevenementen voor hun medewerkers vereenvoudigt. Een kernvereiste was de integratie van een intelligent systeem dat gebruikers niet alleen groepeert op basis van geografische locatie, maar ook rekening houdt met individuele voorkeuren om optimale carpoolmatches te genereren.

## Fase 1: Grondige Planning en Ontwerp

Het eerste semester stond in het teken van een gedetailleerde planningsfase. We stelden een uitgebreid document op waarin we diverse technologieën vergeleken en afwogen. Op basis van deze analyse selecteerden we de volgende technologiestack:

- **Backend:** Java Spring Boot
- **Frontend:** Next.js (React)
- **AI-services:** Python FastAPI
- **Authenticatie:** Auth0
- **Mapping & Locatie:** Mapbox API (kaartvisualisatie), Google Maps API's (locatieberekeningen)
- **Opslag:** Google Cloud Storage (foto-uploads), MySQL (database)
- **Infrastructuur & Deployment:** Kubernetes (EKS-cluster op AWS), Docker
- **Versiebeheer & CI/CD:** GitLab

Naast de technologische keuzes werkten we gedetailleerde modellen uit voor de systeeminfrastructuur, de databaselay-out, en een use-case diagram. Parallel hieraan ontwikkelden we UI-prototypes voor alle schermen in [Figma](http://figma.com/).

![UI Prototypes ontwikkeld in Figma](/img/projects/carpool_prototypes.png)

Deze planningsfase werd afgesloten met een presentatie van onze concepten en plannen aan een vertegenwoordiger van Axxes. Het volledige projectplan is [hier](/doc/projects/Carpool-Project-Plan.pdf) te raadplegen.

## Fase 2: Realisatie in Sprints

De realisatiefase was opgedeeld in drie intensieve sprints, elk met de duur van een volledige schoolweek. Gedurende deze periodes werkten we fulltime op school aan de ontwikkeling van de applicatie.

### Mijn Kernbijdragen:

Binnen dit multidisciplinaire team heb ik me voornamelijk gericht op de ontwikkeling van de **backend** en gerelateerde systemen:

- **Database & API Ontwikkeling:** Ik heb het databasemodel geïmplementeerd in Java (Spring Data JPA) en voor elke entiteit volledige CRUD (Create, Read, Update, Delete) API-endpoints ontwikkeld.
- **Notificatiesysteem:** Ik was verantwoordelijk voor het ontwerpen en bouwen van een robuust notificatiesysteem. Dit omvatte:
  - **E-mailnotificaties:** Handmatige implementatie in Java Spring Boot, gebruikmakend van [Thymeleaf](https://www.thymeleaf.org/)-templates voor de opmaak van de e-mails.
  - **Realtime Notificaties:** Opzet van een WebSocket-verbinding voor directe meldingen. Dit systeem ondersteunt zowel globale meldingen naar alle gebruikers als specifieke meldingen naar individuele, ingelogde gebruikers. De frontend-component voor dit systeem, die luistert naar deze WebSocket-kanalen, heb ik eveneens ontwikkeld.
- **Authenticatie & Autorisatie (Auth0):**
  - **Backend Beveiliging:** API-routes beveiligd met Auth0. Dit omvatte het valideren van JWT's, het beperken van toegang tot ingelogde gebruikers, het implementeren van resource-specifieke toegang (op basis van JWT claims), en op rollen gebaseerde toegang (bijv. admin-rechten).
  - **Frontend Beveiliging:** Een _Guard_-component ontwikkeld in Next.js om admin-specifieke routes af te schermen voor gebruikers zonder de benodigde admin-rol.
- **Frontend Ondersteuning:** Naast mijn backend-focus heb ik bijgedragen aan de ontwikkeling en styling van diverse UI-componenten en heb ik geholpen bij het oplossen van bugs in de frontend.
- **DevOps & Deployment:** Ik heb actief meegewerkt aan de deployment-strategie, inclusief het schrijven van Dockerfiles, het bouwen van Docker-containers, en het configureren van de Kubernetes-cluster en de CI/CD-pipeline in GitLab.

![Een live notificatie verschijnt in de applicatie](/img/projects/carpool_live_notification.png)
![Overzicht van ontvangen notificaties](/img/projects/carpool_notifications.png)
![Voorbeelden van gegenereerde e-mailnotificaties](/img/projects/carpool_emails.png)
![Overzicht van de CI/CD pipeline in GitLab](/img/projects/carpool_pipeline.png)

De intensieve samenwerking tijdens deze sprints heeft de communicatie en teamdynamiek enorm versterkt, wat cruciaal was voor het succesvol opleveren van een hoogwaardig product aan Axxes.

![Het projectteam tijdens de realisatiefase](/img/projects/carpool_team.jpg)

## Conclusie en Ontvangst

Zowel op teamniveau als op persoonlijk vlak ben ik bijzonder trots op het eindresultaat. We hebben een volledig functionele, responsieve applicatie afgeleverd die een breed scala aan nuttige functies biedt en goed presteert op diverse apparaten.

Tijdens de eindpresentatie aan onze begeleiders en de vertegenwoordiger van Axxes waren de reacties zeer positief. Ze waren onder de indruk van de gerealiseerde functionaliteiten en de algehele kwaliteit van de applicatie.

![Overzicht van evenementen in de carpool applicatie](/img/projects/carpool_events.png)
![Detailpagina van beschikbare ritten](/img/projects/carpool_rides.png)
![Admin-interface voor het beheren van evenementen](/img/projects/carpool_admin_events.png)
![Zoekfunctionaliteit binnen de evenementenlijst](/img/projects/carpool_events_search.png)
