---
title: Microservices-applicatie Formule 1
date: 2024-12-22
projectType: Schoolproject
thumbnail: /img/projects/formula1_frontend_gp_page.png
repos:
  - https://github.com/janpeterd/formula1-microservices
video: https://www.youtube.com/watch?v=SGmIv60Sp4Q
images:
  - /img/projects/formula1_frontend_home_page.png
  - /img/projects/formula1_frontend_gp_page.png
  - /img/projects/formula1_frontend_drivers_page.png
  - /img/projects/formula1_frontend_gp_form.png
  - /img/projects/formula1_architecture_diagram.png
technologies:
  - java
  - spring
  - react
  - typescript
  - javascript
  - postgresql
  - git
---

### 1. Inleiding

#### De Opdracht: Microservices Architectuur in de Praktijk

Voor het vak _Advanced Programming Topics_ kregen we de opdracht om een applicatie te ontwerpen en realiseren die de principes van een microservices-architectuur demonstreert. Als gepassioneerd volger van de autosport, koos ik ervoor om een **Formule 1 informatieplatform** te ontwikkelen, een perfecte casus voor het beheren van data over coureurs, teams, circuits en Grand Prix-evenementen in gescheiden domeinen.

### 2. Wat is het? Een Gedistribueerd Formule 1 Platform

Het eindresultaat is een volledig functioneel informatieplatform bestaande uit **zeven afzonderlijke applicaties** die samenwerken als één geheel. De kern van het project is de microservices-architectuur, waarbij elke service autonoom opereert, zijn eigen geïsoleerde database beheert, en communiceert binnen een Kubernetes-netwerk.

#### Architectuur in een Notendop

Externe toegang is strikt beperkt tot twee ingangspunten: een centrale **API Gateway** en de **frontend-applicatie**. Dit zorgt voor een gecontroleerde en veilige omgeving. Alle componenten zijn ontworpen om onafhankelijk van elkaar te kunnen schalen en deployen.

![Diagram van de microservices-architectuur](/img/projects/formula1_architecture_diagram.png)

### 3. De Aanpak: Van Ontwerp tot Operationele Features

De realisatie van dit complexe systeem omvatte zowel applicatieontwikkeling als de opzet van de onderliggende infrastructuur.

#### Backend: Een Netwerk van Gespecialiseerde Services

Alle backend-componenten zijn ontwikkeld met **Java en Spring Boot**. Het systeem bestaat uit:

- **Vijf Microservices:** `circuit-service`, `driver-service`, `gp-service`, `team-service`, en een generieke `image-service`.
- **Een API Gateway:** Het centrale toegangspunt dat requests doorstuurt naar de juiste service.

Om consistentie te waarborgen, worden alle entiteiten geïdentificeerd met een unieke `UUID`. Voor elke service heb ik **uitgebreide unit tests** geschreven met mock-data om betrouwbaarheid en geïsoleerde werking te garanderen.

#### Frontend: Een Moderne en Interactieve UI

De gebruikersinterface is een **React**-applicatie, gebouwd met TypeScript, TailwindCSS en Shadcn/ui. Voor gebruikersauthenticatie is **Google OAuth2** geïntegreerd, waarmee admin-specifieke functionaliteiten worden afgeschermd.

![Homepage van de Formule 1 frontend applicatie](/img/projects/formula1_frontend_home_page.png)

#### Geavanceerde Operationele Features

Om de applicatie naar een hoger niveau te tillen, heb ik twee cruciale operationele features geïmplementeerd:

- **Uitgebreide Monitoring:** Een volledige monitoring-stack met **Prometheus** en **Grafana** biedt inzicht in de prestaties en gezondheid van alle services en de onderliggende infrastructuur.
- **Rate Limiting:** Op de API Gateway is rate limiting geïmplementeerd met **Redis**. Dit beschermt de applicatie tegen misbruik door het aantal requests per IP-adres te beperken.

### 4. Besluit: Een Succesvol Project met Maximale Score

Dit project was een bijzonder waardevolle ervaring omdat het twee domeinen combineerde die mijn sterke interesse hebben: applicatieontwikkeling en infrastructuur. Het was de perfecte gelegenheid om mijn kennis van Kubernetes en gedistribueerde systemen in de praktijk te brengen en verder te verdiepen.

Ik ben zeer trots op het eindresultaat, een robuust en schaalbaar systeem dat de complexiteit van een microservices-architectuur succesvol demonstreert. Deze tevredenheid werd gedeeld door de docent, wat resulteerde in een **beoordeling van 20/20** voor de opdracht.
