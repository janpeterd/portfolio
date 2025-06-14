---
title: Qurio quizplatform
date: 2025-05-24
projectType: Stageproject
course: Stage Lykios
highlight: true
thumbnail: /img/projects/qurio_home.png
images:
  - /img/projects/qurio_home.png
  - /img/projects/qurio_register.png
  - /img/projects/qurio_start.png
  - /img/projects/qurio_play.png
  - /img/projects/qurio_result.png
  - /img/projects/qurio_validation.png
attachments:
  - /doc/stage/Projectplan stage Lykios 2025 - Jan-Peter Dhallé.pdf
  - /doc/stage/Realisatiedocument stage Lykios 2025 - Jan-Peter Dhallé.pdf
  - /doc/stage/Functionele User Manual Qurio - Lykios stage 2025.pdf
technologies:
  - java
  - spring
  - javascript
  - typescript
  - react
  - postgresql
  - docker
  - jenkins
  - git
  - figma
---

### 1. Inleiding

#### Een Ambitieus Stageproject bij Lykios

Tijdens mijn [stageperiode bij Lykios](/stage) kreeg ik de opdracht om, samen met één andere stagiair, een volwaardig quizplatform te ontwikkelen genaamd `Qurio`. Het doel was om een complete applicatie te bouwen die niet alleen het spelen van quizzen mogelijk maakte, maar ook een rijk ecosysteem bood voor het aanmaken, beheren en analyseren van content. Dit project was een uitgelezen kans om een complex softwareproduct van begin tot eind te realiseren.

### 2. Wat is Qurio?

#### Een Compleet en Feature-Rijk Quizplatform

Qurio is een webapplicatie die gebruikers in staat stelt om quizzen te creëren, te delen en te spelen. Het platform is ontworpen om een brede set aan functionaliteiten te bieden, met aandacht voor zowel de quizmaker als de speler.

![De thuispagina van Qurio met een overzicht van quizzen](/img/projects/qurio_home.png)

#### Belangrijkste functionaliteiten

De applicatie omvat een breed scala aan features, waaronder:

- **Flexibel Gebruikersbeheer:** Authenticatie met rollen en permissies (admin, gebruiker) die van de grond af zijn opgebouwd met JWT.
- **Veilige Toegang:** Inclusief een wachtwoord-reset-functie via e-mail.
- **Dynamisch Quiz Spelen:** Met een transparante scoreberekening en de mogelijkheid voor gasten om deel te nemen via een unieke link.
- **Uitgebreid Vragenbeheer:** Ondersteuning voor diverse vraagtypes met "Rich Text" en een modulaire architectuur om eenvoudig nieuwe types toe te voegen.
- **Krachtige Zoekfunctie:** Voor het snel vinden van quizzen en gebruikers.
- **Personalisatie en Analyse:** Gebruikers kunnen hun profiel beheren en per quiz gedetailleerde statistieken inzien.

![Het spelen van een quiz](/img/projects/qurio_play.png)

### 3. De Technische Aanpak

#### Architectuur en Tech Stack

De applicatie is opgebouwd uit een **Java/Spring Boot backend** en een **TypeScript/React frontend**. Deze scheiding zorgde voor een duidelijke structuur en maakte parallelle ontwikkeling mogelijk. We maakten gebruik van een moderne en robuuste tech stack, met o.a. Spring Security, PostgreSQL, Shadcn/UI, TailwindCSS en Docker.

#### Slimme Ontwerpkeuzes en Modulariteit

Om de applicatie toekomstbestendig en onderhoudbaar te maken, heb ik specifieke ontwerpkeuzes gemaakt:

- **Strategy Design Pattern:** Dit patroon werd toegepast voor de scoreberekening, waardoor de logica per vraagtype geïsoleerd en makkelijk uitbreidbaar is.
- **Custom Java Annotations:** Om complexe en herbruikbare logica, zoals permissiecontroles, op een elegante en declaratieve manier te implementeren.
- **Grondige Documentatie:** Belangrijke architecturale beslissingen en algoritmes werden gedocumenteerd om de kennisoverdracht naar toekomstige ontwikkelaars te garanderen.

#### Een Rotsvaste Basis: Testen en Kwaliteit

Kwaliteitszorg was een topprioriteit. Ik heb intensief ingezet op het schrijven van tests op elk niveau: unit-, integratie- en end-to-end testen (met Playwright).

> Het resultaat was een project met **meer dan 300 tests** en een **code-coverage van 80%**, een prestatie waar ik erg trots op ben.

Om dit proces te automatiseren, heb ik op een reservelaptop een **Jenkins CI/CD-pipeline** opgezet die alle tests automatisch uitvoerde bij elke wijziging.

#### Een Creatieve Deployment Oplossing

Zonder budget voor een cloudomgeving heb ik een creatieve oplossing bedacht. Met een oude laptop als server, **Nginx** als reverse-proxy en **ngrok** om een publieke URL te creëren, heb ik een volwaardige productie-omgeving gesimuleerd.

### 4. Besluit en Resultaat

Het eindresultaat van deze stage is een zeer robuuste en feature-rijke applicatie met commercieel potentieel. Het project was een diepgaande leerervaring die verder ging dan enkel programmeren; het omvatte architectuur, teamwork, kwaliteitszorg en DevOps. Qurio toont mijn vermogen om een complex softwareproduct van concept tot een functioneel en goed getest eindproduct te brengen.

Hieronder een demonstratie van enkele van de belangrijkste functionaliteiten:

- Registreren en inloggen
  ![Registreren en inloggen](/img/projects/qurio_register.gif)
- Het gebruikersprofiel beheren
  ![Het gebruikersprofiel beheren](/img/projects/qurio_profile.gif)
- Een nieuwe vraag aanmaken
  ![Een nieuwe vraag aanmaken](/img/projects/qurio_create_question.gif)
- Een quiz updaten
  ![Een quiz updaten](/img/projects/qurio_update_quiz.gif)
- Een quiz delen via een unieke link
  ![Een quiz delen via een unieke link](/img/projects/qurio_sharedlink.gif)
- Quizzen en gebruikers doorzoeken
  ![Quizzen en gebruikers doorzoeken](/img/projects/qurio_search.gif)
- Gedetailleerde statistieken bekijken
  ![Gedetailleerde statistieken bekijken](/img/projects/qurio_statistics.gif)
- Een gebruiker archiveren (admin)
  ![Een gebruiker archiveren (admin)](/img/projects/qurio_archive_user.gif)

#### Bekijk de Documentatie

Voor een dieper inzicht in het projectplan, de realisatie en de functionaliteiten, zijn de volgende documenten beschikbaar:

- [Projectplan Stage Lykios 2025 - Jan-Peter Dhallé.pdf](/doc/stage/Projectplan%20stage%20Lykios%202025%20-%20Jan-Peter%20Dhallé.pdf)
- [Realisatiedocument Stage Lykios 2025 - Jan-Peter Dhallé.pdf](/doc/stage/Realisatiedocument%20stage%20Lykios%202025%20-%20Jan-Peter%20Dhallé.pdf)
- [Functionele User Manual Qurio - Lykios stage 2025.pdf](/doc/stage/Functionele%20User%20Manual%20Qurio%20-%20Lykios%20stage%202025.pdf)
