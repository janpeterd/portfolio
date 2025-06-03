---
title: TagMaster, cross-platform app met AI
date: 2024-11-10
thumbnail: /img/projects/tagmaster_edit_list.png
repo: https://github.com/janpeterd/tagmaster
images:
  - /img/projects/tagmaster_edit_list.png
technologies:
  - csharp
  - dotnet
---

## De Uitdaging: Een Native Applicatie met AI-Integratie

Voor dit project was de opdracht het ontwikkelen van een 'native' applicatie
met behulp van het [.NET MAUI](https://learn.microsoft.com/en-us/dotnet/maui/what-is-maui?view=net-maui-9.0)
framework, met een verplichte integratie van Artificiële Intelligentie via
[Microsoft Azure AI Services](https://azure.microsoft.com/nl-nl). Dit bracht
mij op het idee voor **TagMaster**, een applicatie ontworpen om het
organiseren en terugvinden van foto's significant te vereenvoudigen.

## Het Concept: TagMaster - Automatische Fototagging en Beschrijving

TagMaster stelt gebruikers in staat om foto's te importeren, waarna de
applicatie Azure AI gebruikt om automatisch een relevante beschrijving en een
set bijpassende tags voor elke foto te genereren. Deze metadata wordt
vervolgens opgeslagen, waardoor gebruikers in een overzichtelijke
lijstweergave eenvoudig kunnen filteren op specifieke tags om snel de
gewenste foto's te lokaliseren. Het doel is om de vaak tijdrovende taak van
handmatig taggen te automatiseren en de doorzoekbaarheid van fotocollecties
te verbeteren.

![Lijstweergave van afbeeldingen met filteropties en bewerkingspagina in TagMaster](/img/projects/tagmaster_edit_list.png)

## Technische Architectuur en Implementatie

De ontwikkeling van TagMaster is gebaseerd op de volgende technologische
keuzes:

- **Framework:** [.NET MAUI](https://learn.microsoft.com/en-us/dotnet/maui/what-is-maui?view=net-maui-9.0)
  is gebruikt voor het bouwen van een cross-platform native applicatie vanuit
  één C# codebase.
- **Architectuurpatroon:** Het [Model-View-ViewModel (MVVM)](https://en.wikipedia.org/wiki/Model%E2%80%93view%E2%80%93viewmodel)
  patroon is strikt toegepast. Dit zorgt voor een heldere scheiding tussen de
  gebruikersinterface (View), de presentatielogica en state (ViewModel), en de
  businesslogica en data (Model), wat de testbaarheid en onderhoudbaarheid ten
  goede komt.
- **AI-Integratie:** De kernfunctionaliteit voor automatische beschrijvingen
  en tagging wordt geleverd door [Azure AI Cognitive Services](https://azure.microsoft.com/nl-nl/products/ai-services), specifiek
  de Computer Vision API.
- **Dataopslag:** Er is bewust gekozen voor een lokale, cross-platform
  [SQLite](https://www.sqlite.org/index.html) database. Dit stelt de applicatie
  in staat om volledig offline te functioneren zonder afhankelijkheid van een
  externe backend-service, wat bijdraagt aan de gebruiksvriendelijkheid en
  toegankelijkheid.
- **Gebruikersinterface:** De volledige UI is opgebouwd met
  [XAML](https://learn.microsoft.com/en-us/dotnet/maui/xaml/xaml-basics?view=net-maui-9.0),
  de declaratieve markup-taal binnen het .NET MAUI ecosysteem. Dit project was
  mijn eerste ervaring met het ontwikkelen van UI's in XAML.

## Conclusie

TagMaster demonstreert hoe .NET MAUI en Azure AI gecombineerd kunnen worden
om een intelligente, gebruiksvriendelijke native applicatie te creëren. De
focus op een lokale database en het MVVM-patroon resulteert in een robuuste
en onderhoudbare oplossing voor een alledaags probleem: het efficiënt beheren
van digitale fotocollecties.
