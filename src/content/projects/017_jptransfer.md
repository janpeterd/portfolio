---
title: JP Transfer
date: 2025-06-02
highlight: true
projectType: Persoonlijk project
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

### 1. Inleiding

#### De Noodzaak: Controle over Eigen Data

Diensten zoals [WeTransfer](https://wetransfer.com/) zijn ontzettend handig, maar roepen een belangrijke vraag op: wat gebeurt er écht met mijn bestanden? Het gebrek aan controle en transparantie over waar mijn data wordt opgeslagen, was voor mij de drijfveer om een eigen oplossing te ontwikkelen. Deze wens, gecombineerd met mijn ambitie om bij te leren, leidde tot de creatie van **JP Transfer**.

### 2. Wat is JP Transfer?

#### Een Persoonlijke en Veilige File-Sharing Dienst

JP Transfer is in essentie een persoonlijke kloon van WeTransfer. Gebruikers kunnen eenvoudig bestanden uploaden en een unieke downloadlink genereren om te delen. Het cruciale verschil is dat alle data wordt opgeslagen op **mijn eigen home server**, wat volledige soevereiniteit en controle over de bestanden garandeert.

![Bestanden uploaden in JP Transfer](/img/projects/jptransfer_upload.png)

#### Kernfuncties en Filosofie

Het project is gebouwd met de volgende principes in gedachten:

- **Privacy Eerst:** Ik weet precies waar de bestanden staan en wie er toegang toe heeft. Geen derde partijen, geen onzekerheid.
- **Grote Bestanden Welkom:** De architectuur is specifiek ontworpen om grote bestanden betrouwbaar en efficiënt te verwerken.
- **Gecontroleerde Toegang:** De dienst is een gesloten en vertrouwde omgeving. Ik voeg zelf handmatig gebruikers toe, waardoor de toegang exclusief blijft.

![Downloadpagina met bestanden](/img/projects/jptransfer_download.png)

### 3. De Technische Architectuur

#### De Tech Stack: Robuust en Modern

Achter de schermen draait JP Transfer op een doordachte architectuur om een soepele en veilige ervaring te garanderen:

- **Backend:** Een REST API gebouwd met **Java** en **Spring Boot**. De endpoints zijn beveiligd met **Spring Security** en **JSON Web Tokens (JWT)**.
- **Frontend:** Een Single-Page Application (SPA) ontwikkeld met **React** en **TypeScript**, met **TanStack Router** voor de navigatie.
- **Database:** **MariaDB** voor het opslaan van alle metadata over uploads, gebruikers en bestands-chunks.

#### Het Hart van de Applicatie: Een Geavanceerd Uploadmechanisme

Om de betrouwbaarheid bij grote bestanden te garanderen, heb ik een proces geïmplementeerd dat data-integriteit centraal stelt. Dit werkt in vier stappen:

**1. Initialisatie en Voorbereiding (Frontend)**
Voordat de upload start, berekent de browser de **SHA-1 checksum** van het volledige bestand. Deze hash fungeert als een digitale vingerafdruk. Vervolgens wordt een verzoek naar de backend gestuurd met metadata over de bestanden en chunks.

**2. Chunking en Parallelle Upload (Frontend)**
Elk bestand wordt opgesplitst in kleinere **chunks**. Deze worden **parallel** geüpload om de snelheid te optimaliseren. Elke chunk krijgt zijn eigen checksum mee. Bij een mislukte upload wordt deze automatisch opnieuw geprobeerd, wat het proces extra robuust maakt.

**3. Verwerking en Validatie (Backend)**
De backend ontvangt elke chunk en valideert deze door de meegestuurde checksum te vergelijken met de checksum van de ontvangen data. Corrupte chunks worden geweigerd. Valide chunks worden tijdelijk opgeslagen.

**4. Assemblage en Finale Verificatie (Backend)**
Zodra alle chunks binnen zijn, voegt de server ze in de juiste volgorde samen tot het oorspronkelijke bestand. Daarna volgt de **cruciale stap**: de backend berekent de checksum van het zojuist samengestelde bestand. Deze wordt vergeleken met de originele checksum uit stap 1. Alleen als deze 100% overeenkomen, wordt de transfer als succesvol gemarkeerd en is het bestand klaar voor download.

#### Automatisering en Deployment (CI/CD)

Het volledige project is gecontaineriseerd met **Docker**. Ik heb een **GitHub Actions workflow** opgezet die bij elke push naar de `main` branch de applicatie automatisch bouwt, test, en nieuwe Docker-images naar Docker Hub publiceert.

### 4. Besluit en Leerpunten

JP Transfer was meer dan alleen het bouwen van een eigen file-transfer-dienst. Het was een diepgaande technische uitdaging die mij in staat stelde om complexe concepten zoals data-integriteit, parallelle verwerking en CI/CD in de praktijk te brengen. Het project heeft niet alleen een praktische oplossing voor een reëel privacyvraagstuk opgeleverd, maar was ook een enorm rijke leerervaring in technologieën als Spring Boot, React en Docker.
