---
title: JP Transfer
date: 2025-06-02
highlight: true
thumbnail: /img/projects/jptransfer.png
repos:
  - https://github.com/janpeterd/jp-transfer-service
  - https://github.com/janpeterd/jp-transfer-ui
images:
  - /img/projects/jptransfer_upload.png
  - /img/projects/jptransfer_download.png
  - /img/projects/jptransfer_profile.png
  - /img/projects/jptransfer_admin.png
technologies:
  - java
  - spring
  - javascript
  - typescript
  - react
  - mariadb
  - docker
  - git
---

## Inleiding

Diensten zoals [WeTransfer](https://wetransfer.com/) zijn ontzettend handig
voor het delen van grote bestanden. Even uploaden, linkje sturen en klaar. Maar
de vraag "wat gebeurt er écht met mijn bestanden?" en het gebrek aan controle
over de data bleef bij mij knagen. Dit, gecombineerd met de wens om een eigen,
robuuste oplossing te hebben en de wil om bij te leren, leidde tot de
ontwikkeling van **JP Transfer**.

## Wat is JP Transfer?

JP Transfer is in essentie een persoonlijke kloon van WeTransfer. Het stelt
gebruikers in staat om eenvoudig bestanden te uploaden, waarna een unieke
downloadlink wordt gegenereerd die gedeeld kan worden. Het cruciale verschil?
Alle bestanden worden opgeslagen op **mijn eigen home server**. Dit biedt
volledige controle en transparantie over de data.

Belangrijke kenmerken van JP Transfer:

- **Privacy Eerst:** Omdat de bestanden op mijn eigen server staan, weet ik
  precies waar ze zijn en wie er toegang toe heeft. Geen zorgen over wat derde
  partijen met de data doen.
- **Grote Bestanden Welkom:** JP Transfer is ontworpen om ook met zeer grote
  bestanden overweg te kunnen, dankzij een slim uploadmechanisme.
- **Gecontroleerde Toegang:** Registratie van buitenaf is niet mogelijk. Ik
  voeg handmatig specifieke personen toe die de dienst mogen gebruiken, waardoor
  het een gesloten en vertrouwde omgeving blijft.

## Hoe werkt het technisch?

Achter de schermen maakt JP Transfer gebruik van een moderne tech stack en
doordachte architectuur om een soepele en veilige ervaring te garanderen:

- **Backend Architectuur:**

  - De server-side logica is gebouwd met **Java** en het **Spring Boot**
    framework.
  - Alle communicatie tussen de frontend en backend verloopt via een **REST
    API**. Deze API-endpoints zijn beveiligd met **Spring Security** en maken
    gebruik van **JWT (JSON Web Tokens)** voor authenticatie en autorisatie van
    gebruikers.
  - Alle metadata over de uploads, gebruikers en chunks wordt opgeslagen in een
    **MariaDB** database.

- **Frontend Interactie:**

  - De gebruikersinterface is een single-page application (SPA) ontwikkeld met
    **React** en **TypeScript**.
  - Voor de routing binnen de applicatie wordt **TanStack Router** gebruikt.

### Het Uploadmechanisme

Om grote bestanden betrouwbaar te kunnen verwerken, maakt JP Transfer gebruik
van een geavanceerd uploadproces:

1.  **Initialisatie (Frontend):**

    - Wanneer een gebruiker bestanden selecteert, berekent de frontend eerst de
      **checksum (hash) van elk volledig bestand** (via het `sha1` algoritme).
      Dit dient later ter verificatie om te garanderen dat de ontvangen data
      identiek is aan de originele data.
    - Vervolgens wordt een `startTransfer` verzoek naar de backend API
      gestuurd. Dit verzoek bevat metadata over de te uploaden bestanden
      (bestandsnaam, type, totale grootte, de berekende checksum, de gewenste
      chunk-grootte en het totaal aantal chunks per bestand).

2.  **Chunking en Parallelle Upload (Frontend):**

    - Na bevestiging van de backend, splitst de frontend elk bestand op in
      kleinere **chunks** (bijvoorbeeld van een vaste grootte zoals
      gedefinieerd in `CONSTANTS.CHUNK_SIZE`).
    - Voor elke chunk wordt een **individuele checksum** berekend.
    - Deze chunks worden vervolgens **parallel geüpload** naar de server. De
      `processQueue` functie in de frontend zorgt ervoor dat er een maximaal
      aantal (`CONSTANTS.MAX_CONCURRENT_UPLOADS`) uploads tegelijkertijd actief
      zijn, wat de uploadsnelheid optimaliseert zonder de browser of server te
      overbelasten.
    - Mocht een chunk-upload falen, dan wordt deze automatisch een paar keer
      opnieuw geprobeerd (`uploadWithRetry`) voor extra robuustheid.
    - De gebruiker krijgt feedback over de voortgang van elke chunk.

3.  **Chunk Verwerking (Backend):**

    - De `ChunkService` op de backend ontvangt elke chunk via een specifiek
      API-endpoint.
    - Bij ontvangst wordt de **checksum van de ontvangen chunk vergeleken**
      met de checksum die de frontend heeft meegestuurd. Als deze niet
      overeenkomen, wordt de chunk als corrupt beschouwd en een foutmelding
      gegeven (dit voorkomt data corruptie tijdens de overdracht).
    - Valide chunks worden tijdelijk opgeslagen op de server, en hun metadata
      (zoals bestands ID, chunk index, opgeslagen pad) wordt in de database
      bijgehouden.

4.  **Assemblage en Verificatie (Backend):**
    - Zodra de frontend signaleert dat alle chunks van alle bestanden zijn
      geüpload (via een `finishTransfer` verzoek), start de `FileService` op de
      backend het assemblageproces.
    - De service haalt alle opgeslagen chunks voor een specifiek bestand op
      (in de juiste volgorde op basis van hun index).
    - Deze chunks worden samengevoegd tot het oorspronkelijke bestand.
    - **Cruciale stap:** Van het volledig geassembleerde bestand wordt
      opnieuw een **checksum berekend**. Deze wordt vergeleken met de
      oorspronkelijke checksum van het volledige bestand die in stap 1 door de
      frontend was berekend en meegestuurd.
    - Als beide checksums overeenkomen, is de transfer succesvol en is de
      integriteit van het bestand gegarandeerd. Het geassembleerde bestand, dat
      uiteindelijk vaak als onderdeel van een zip-archief wordt aangeboden, is
      nu klaar voor download. Bij een mismatch wordt het corrupte
      geassembleerde bestand verwijderd om opslag van incorrecte data te
      voorkomen.

- **Deployment & DevOps:**
  - Zowel de backend-service als de frontend-applicatie worden verpakt in
    **Docker-containers**.
  - Ik heb een **GitHub Actions workflow** opgezet die bij elke push naar de
    `main` branch automatisch de Java backend en React frontend bouwt, test, in
    Docker-images plaatst en deze uploadt naar Docker Hub.

Dit project was niet alleel een leuke uitdaging om mijn eigen file transfer
service te bouwen, maar ook een geweldige manier om dieper in te gaan op
technologieën zoals Spring Boot, React, Docker en CI/CD met GitHub Actions, en
tegelijkertijd een praktische oplossing te creëren voor een reëel privacy- en
data-integriteitsvraagstuk.
