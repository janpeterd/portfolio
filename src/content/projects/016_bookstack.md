---
title: Boekenstapel ASCII generator
projectType: Persoonlijk project
date: 2025-05-26
thumbnail: /img/projects/bookstack.png
repos:
  - https://github.com/janpeterd/BookStack
technologies:
  - python
  - git
images:
  - /img/projects/bookstack_display.gif
  - /img/projects/bookstack_add.gif
---

### 1. Inleiding

#### De vonk: van inspiratie naar idee

Het idee voor dit project ontstond toen ik op de website van [Sandy Uraz](https://sandyuraz.com/books/#-the-stack) een prachtige, minimalistische ASCII-representatie van een boekenstapel zag. Als liefhebber van zowel boeken als compacte command-line applicaties, zag ik direct een leuke uitdaging: kon ik zoiets zelf bouwen? Dit leek me een perfect project om mijn passie voor programmeren en lezen te combineren.

### 2. Het Resultaat: Een Persoonlijke Boekenplank in je Terminal

Het eindproduct is een licht en efficiënt command-line programma (CLI) van ongeveer 350 regels code. Het stelt gebruikers in staat om een visuele en persoonlijke boekenstapel te beheren, rechtstreeks vanuit de terminal.

#### Een dynamische, visuele stapel

De kern van het programma is het genereren van de ASCII-boekenstapel. Hierbij wordt rekening gehouden met het formaat van het boek en het aantal pagina's, waardoor elk boek een unieke visuele weergave krijgt.

```text
        ┌───────────────────────┐
        │                       │
        │                       │
        │                       │
        │                       │
        │                       │
        │ The Well Of Ascension │
        │   Brandon Sanderson   │
        │                       │
        │                       │
        │                       │
        │                       │
        │                       │
        └─┬─────────────────────┴─┐
          │          A.I          │
          │    Lieven Scheire     │
    ┌─────┴─────────────────┬─────┘
    │                       │
    │                       │
    │                       │
    │                       │
    │   The Final Empire    │
    │   Brandon Sanderson   │
    │                       │
    │                       │
    │                       │
    └─┬─────────────────────┴─┐
      │                       │
      │          WIL          │
      │  Jeroen Olyslaegers   │
      │                       │
──────┴───────────────────────┴───────
\ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \
```

Een leuk detail is dat de stapelvolgorde bij elke generatie willekeurig varieert, waardoor de weergave nooit verveelt.

![Elke keer een andere stapel](/img/projects/bookstack_display.gif)

#### Beheer je digitale leeslijst

Naast het visuele aspect biedt de tool praktische functies voor het beheren van een boekencollectie. Gebruikers kunnen eenvoudig boeken toevoegen, en de data importeren of exporteren. Dit maakt het makkelijk om je leeslijst te delen of een back-up te maken.

![Boek toevoegen](/img/projects/bookstack_add.gif)

#### Gebruiksvriendelijkheid voorop

Om de tool zo toegankelijk mogelijk te maken, heb ik een hulpcommando geïmplementeerd dat alle functies en subcommando's uitlegt met duidelijke voorbeelden. De gegenereerde boekenstapel kan bovendien direct naar een tekstbestand worden weggeschreven.

### 3. De Aanpak: Eenvoud en Efficiëntie

#### Pure Python, geen afhankelijkheden

Het programma is volledig geschreven in Python, met een focus op eenvoud en structuur. Een bewuste keuze was om **geen externe afhankelijkheden** (dependencies) te gebruiken. Dit zorgt ervoor dat het programma uiterst licht is en zonder installatieproblemen op vrijwel elk platform draait.

#### Gestructureerde en openbare code

De code is bewust compact en overzichtelijk gehouden. Ik heb gestreefd naar leesbaarheid en onderhoudbaarheid, zodat de logica achter het genereren van de ASCII-art makkelijk te volgen is. De volledige broncode is publiek beschikbaar op mijn [GitHub-profiel](https://github.com/janpeterd/BookStack).

### 4. Besluit en Reflectie

Dit project was een geweldige oefening in het vertalen van een creatief concept naar een functioneel en afgewerkt product. Het eindresultaat is een charmante, praktische tool die precies doet wat ik voor ogen had.

Tijdens de ontwikkeling heb ik veel geleerd over het ontwerpen van een intuïtieve command-line interface en het procedureel genereren van visuele output. Het was een leuke uitdaging om met minimale middelen (enkel standaard Python-bibliotheken) een bevredigend en nuttig programma te bouwen.
