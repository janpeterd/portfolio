---
title: AR Kookhulp
date: 2025-01-08
projectType: Schoolproject
thumbnail: /img/projects/recipe_scan.png
course: Augmented Reality and Mobile App Development
images:
  - /img/projects/recipe_home.png
  - /img/projects/recipe_login.png
  - /img/projects/recipe_signup.png
  - /img/projects/recipe_scan.png
  - /img/projects/recipe_scan_carrot.png
  - /img/projects/recipe_scan_tomato.png
  - /img/projects/recipe_recipes.png
  - /img/projects/recipe_detail.png
  - /img/projects/recipe_review.png
  - /img/projects/recipe_create.png
technologies:
  - flutter
  - dart
  - unity
  - csharp
  - vuforia
  - git
---

### 1. Inleiding

#### Recepten Vinden met Augmented Reality

Voor dit schoolproject, dat ik samen met een medestudent heb uitgevoerd, was de
kernvraag: kan Augmented Reality het vinden van recepten eenvoudiger en
interactiever maken? Ons doel was om een app te bouwen die fysieke
'ingrediëntenkaarten' scant en direct relevante recepten toont, door
**Flutter** te combineren met de AR-kracht van **Unity**.

### 2. Het Resultaat: Een Functionele AR-ervaring

De app laat gebruikers fysieke kaarten van ingrediënten scannen. Wanneer een kaart wordt herkend, verschijnt er via Augmented Reality een geanimeerd 3D-model bovenop de kaart. Tegelijkertijd verschijnt een knop in de Flutter-interface waarmee de gebruiker direct alle recepten met dat ingrediënt kan opvragen.

Gebruikers kunnen ook door alle recepten bladeren, reviews achterlaten en zelf nieuwe ingrediënten en recepten toevoegen via een simpele interface.

![De app herkent een tomatenkaart en toont een 3D-model in AR](/img/projects/recipe_scan.png)

![Na het scannen wordt een lijst met relevante recepten getoond in de Flutter UI](/img/projects/recipe_recipes.png)

### 3. De Aanpak: Een Hybride Architectuur

#### Integratie van Flutter en Unity

De grootste uitdaging was de integratie van Flutter en Unity. Hiervoor hebben we gebruikgemaakt van een bestaande open-source oplossing die het mogelijk maakt om een Unity-view als een widget binnen Flutter te draaien. Dit zorgde voor de cruciale communicatie tussen de Flutter UI en de Unity AR-scène: Unity seint aan Flutter welk ingrediënt herkend is, waarna Flutter de UI bijwerkt.

#### Beeldherkenning met Vuforia

Voor de beeldherkenning in Unity hebben we de **Vuforia Engine** ingezet. Dit vereiste het aanmaken van een aangepast herkenningsmodel: we hebben de fysieke kaarten eerst moeten 'trainen' zodat Vuforia ze uniek kon identificeren. Zodra een getrainde kaart wordt herkend, activeert een C#-script de weergave van het juiste 3D-model.

#### Minimalistische Backend

Omdat de focus lag op de client-side, hebben we een simpele backend gebruikt met **`json-server`**. Dit bood een snelle manier om een REST API op te zetten voor het opslaan en ophalen van recepten en reviews, zonder de complexiteit van een volwaardige database.

### 4. Besluit: Een Succesvolle Technische Oefening

Dit project, uitgevoerd in een team van twee, was een succesvolle technische oefening in het integreren van twee complexe platformen. Het resultaat is een functioneel proof-of-concept dat de praktische mogelijkheden van AR in alledaagse apps aantoont. De belangrijkste les voor ons was het managen van de communicatie tussen de native UI van Flutter en de 3D-wereld van Unity, wat een solide basis legt voor toekomstige hybride projecten.
