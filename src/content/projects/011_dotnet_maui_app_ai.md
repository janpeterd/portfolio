---
title: TagMaster, cross-platform app met AI
date: 2024-11-10
projectType: Schoolproject
thumbnail: /img/projects/tagmaster_edit_list.png
repo: https://github.com/janpeterd/tagmaster
images:
  - /img/projects/tagmaster_edit_list.png
technologies:
  - csharp
  - dotnet
---

### 1. Inleiding

#### De Opdracht: Een Native Applicatie met AI-Integratie

Voor dit schoolproject was de uitdaging helder: ontwikkel een ‘native’ cross-platform applicatie met het **.NET MAUI** framework, met een verplichte integratie van Artificiële Intelligentie via **Microsoft Azure AI Services**. Deze opdracht bracht mij op het idee voor **TagMaster**, een applicatie ontworpen om het organiseren en terugvinden van digitale foto's significant te vereenvoudigen.

### 2. Wat is TagMaster?

#### Een Slimme Oplossing voor Foto-organisatie

TagMaster is een cross-platform applicatie die de tijdrovende taak van het handmatig taggen van foto's automatiseert. Gebruikers importeren hun foto's, waarna de applicatie Azure AI inzet om voor elke afbeelding automatisch een relevante beschrijving en een set bijpassende tags te genereren.

Deze metadata wordt lokaal opgeslagen, waardoor gebruikers in een overzichtelijke lijstweergave eenvoudig kunnen filteren op specifieke tags om snel de gewenste foto's te vinden. Het doel is om de doorzoekbaarheid van fotocollecties te verbeteren en het beheer ervan efficiënter te maken.

![Lijstweergave van afbeeldingen met filteropties en bewerkingspagina in TagMaster](/img/projects/tagmaster_edit_list.png)

### 3. De Technische Aanpak

#### Framework en Architectuur

De applicatie is gebouwd met **.NET MAUI**, wat het mogelijk maakt om vanuit één C# codebase een native app voor meerdere platformen te ontwikkelen. Ik heb het **Model-View-ViewModel (MVVM)** architectuurpatroon strikt toegepast. Dit zorgt voor een heldere scheiding tussen de UI (View), de logica (ViewModel) en de data (Model), wat de onderhoudbaarheid en testbaarheid van de code aanzienlijk verbetert.

#### AI-Integratie en Dataopslag

De kern van de intelligentie wordt geleverd door de **Azure AI Computer Vision API**, die de analyse van de afbeeldingen voor zijn rekening neemt. Voor dataopslag heb ik bewust gekozen voor een lokale, cross-platform **SQLite** database. Hierdoor kan de applicatie volledig offline functioneren zonder afhankelijkheid van een externe backend, wat de gebruiksvriendelijkheid en toegankelijkheid ten goede komt.

#### Gebruikersinterface met XAML

De volledige gebruikersinterface is opgebouwd met **XAML**, de declaratieve markup-taal van het .NET ecosysteem. Dit project was mijn eerste concrete ervaring met het bouwen van een UI in XAML, wat een waardevol leerproces was.

### 4. Besluit en Reflectie

TagMaster is een succesvol voorbeeld van hoe moderne technologieën zoals .NET MAUI en Azure AI gecombineerd kunnen worden tot een praktische en intelligente applicatie. De keuze voor een solide architectuur (MVVM) en een lokale database heeft geresulteerd in een robuuste en gebruiksvriendelijke oplossing voor een alledaags probleem. Het project was niet alleen een uitstekende introductie in de wereld van cross-platform development met C#, maar toont ook de kracht van AI in het automatiseren van dagelijkse taken.
