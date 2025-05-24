---
title: Qurio quizplatform
date: 2025-05-24
highlight: true
thumbnail: /img/projects/qurio_home.png
images:
  - /img/projects/qurio_home.png
attachments:
  - /doc/projects/Realisatiedocument_Stage.pdf
  - /doc/projects/Functionele_User_Manual.pdf
---

Tijdens mijn [stageperiode bij Lykios](/stage) heb ik samen met één andere
stagiaire gewerkt aan een quizplatform genaamd `Qurio`. Zoals de naam zegt was
het primaire doel ervan om mensen toe te laten om quizzen aan te maken en te
spelen. De vele functies van de applicatie omvatten onder andere:

- Gebruikers met **verschillende rollen en permissies**.
- Eigen authenticatie zonder externe services.
- Wachtwoord-reset, via e-mail
- Verschillende vraagtypes en **makkelijk uitbreidbare architectuur** om er toe
  nog te voegen.
- Uitgebreide zoekfunctionaliteit voor het zoeken van quizzen en gebruikers.
- Het beheren van veschillende types vragen, met "Rich Text"-ondersteuning
- Transparante scoreberekening die per antwoord de toegevoegde of verloren
  score toont
- Genereren van een uitnodigingslink, zodat gebruikers zonder account ook een
  quiz kunnen spelen.
- Gebruikersprofiel en instellingen per gebruiker
- Statistieken per quiz
- Feedback op quiz of vraag
- ...

## Technologieën

De applicatie bestaat uit een backend en een frontend. De backend is gemaakt in
Java met Spring boot. De frontend gebruikt Typescript met React en [React Router in framework modus](https://reactrouter.com/start/modes).

- Voor de rest hebben we gebruik gemaakt van:
  - [Spring Security](https://spring.io/projects/spring-security)
  - [Shadcn/UI](https://ui.shadcn.com/)
  - [TailwindCSS](https://tailwindcss.com/)
  - [Editor.js](https://editorjs.io/)
  - [Playwright](https://playwright.dev/)
  - [Flyway](https://github.com/flyway/flyway)
  - [Lombok](https://projectlombok.org/)
  - [Mapstruct](https://mapstruct.org/)
  - ...

## Testen

Tijdens de ontwikkeling van de applicatie hebben ik erg veel aandacht besteed
aan het schrijven van tests. Dit waren tests op elk niveau: unittests,
unitegratietesten en end-to-end testen.

Het project telt **meer dan 300 testen** met een **coverage van 80%**, hier ben
ik erg trots op.

Deze werden ook allemaal automatisch uitgevoerd voor elke branch via Jenkins.

## Resultaat

Het resultaat is een erg robuuste applicatie met veel verschillende functies.
Het zou in de toekomst zeker nog uitgebreid kunnen worden om deze
functionaliteiten commercieel aan te bieden aan bedrijven en gebruikers.

Tijdens de stageperiode hebben we erg veel verschillende functies uitgewerkt,
hier volgt een kort overzicht van de belangrijkste functies.

### Algemeen

- Validatie op alle formuliervelden
  ![Validatie](/img/projects/qurio_validation.png)
- Authenticatie en permissiecontrole op elke pagina.

- Validatie voor elk endpoint in de backend
- Endpoint-beveiliging en permissiecontrole voor elk enpdoint in backend.
- Paginering in backend voor het versturen van grote objecten.

### Authenticatie

- Registreren voor account
  ![Registratie](/img/projects/qurio_register.png)
  ![Registratie](/img/projects/qurio_register.gif)

- Inloggen
  ![Registratie](/img/projects/qurio_login.gif)

- Wachtwoord vergeten
  ![Wachtwoord vergeten](/img/projects/qurio_password_reset.gif)

### Quiz spelen

- Overzicht van alle quizzen
  ![Thuispagina](/img/projects/qurio_home.png)

- Detailpagina quiz
  ![Detailpagina quiz](/img/projects/qurio_start.png)

- Spelen van quiz
  ![Spelen van quiz](/img/projects/qurio_play.png)
- Resultaat van quiz
  ![Resultaat quiz](/img/projects/qurio_result.png)

### Profiel

- Gebruikersprofiel
  ![Gebruikersprofiel](/img/projects/qurio_profile.gif)

### Zoeken

- Quiz zoeken
  ![Quiz zoeken](/img/projects/qurio_search.gif)
- Gebruikers zoeken
  ![Quiz zoeken](/img/projects/qurio_search_user.gif)

### Quiz- en vragenbeheer

- Ja-neevraag aanmaken
  ![Ja-neevraag aanmaken](/img/projects/qurio_create_question.gif)
- Opties voor een multiplechoicevraag
  ![Antwoordopties multiplechoicevraag](/img/projects/qurio_multiplechoice_answers.png)

- Maak/wijzig een quiz

  - Gewicht van de vraag (telt in scoreberekening)
  - Vragen selecteren
  - Volgorde van de vragen
    ![Maak/wijzig een quiz](/img/projects/qurio_update_quiz.gif)

- Zoek quiz/vraag, Klonen van een quiz of vraag, verwijder
  ![Maak/wijzig een quiz](/img/projects/qurio_manage.gif)

### Extra quizfuncties

- Statistieken en resultaten bekijken voor een gemaakte quiz
  ![Statistieken en resultaat](/img/projects/qurio_statistics.gif)

- Genereren voor gebruiker zonder account
  ![Link delen voor gebruiker zonder account](/img/projects/qurio_sharedlink.gif)

### Gebruikers en categorieën beheren

- Enkel gebruikers met `admin` rol
- Gebruiker blokkeren/archiveren
  ![Block user](/img/projects/qurio_archive_user.gif)

- Categorieën beheren
  ![Categorieën beheren](/img/projects/qurio_categories.gif)

## Deployment

We hadden geen budget om een domein of een cloudomgeving aan te kopen om de
applicatie te hosten. Wel hadden ik een oude laptop ter beschikking die
permanent opstond.

Om toch een _productieomgeving_ te simuleren heb ik via
[ngrok](http://ngrok.com/) een lokale omgeving naar een statisch domain
gentunneled.

Ngrok biedt gratis maar 1 statisch domein aan, daarom heb ik eerst met
[nginx](https://nginx.org/) een reverse-proxy opgesteld, zodat ik frontend en
backend hetzelfde domein konden gebruiken.
