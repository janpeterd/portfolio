---
title: Tagmaster, cross-platform app met AI
date: 2024-11-10
thumbnail: /img/projects/tagmaster_edit_list.png
---

- [Github repository](https://github.com/janpeterd/tagmaster)

![Tagmaster image list and edit pages](/img/projects/tagmaster_edit_list.png)

## Opdracht

We moesten een 'native' applicatie maken met [.NET MAUI](https://learn.microsoft.com/en-us/dotnet/maui/what-is-maui?view=net-maui-9.0),
met AI-integratie van [Azure](https://azure.microsoft.com/nl-nl).

Ik kwam hierbij op het idee om een applicatie te maken die het organiseren van foto's vereenvoudigd, genaamd: Tagmaster.

## Idee

_Tagmaster_ is een applicatie die gebruik maakt van AI om automatisch een beschrijving en
bijhorende tags te genereren voor een foto. In de lijstweergave kan je dan
makkelijk filteren op tag.

## Technologie

De applicatie gebruikt het [MVVM-patroon](https://en.wikipedia.org/wiki/Model%E2%80%93view%E2%80%93viewmodel) om de achterliggende logica volledig te splitsen van de UI.
Ik heb bewust gekozen voor een cross-platform lokale sQlite-database, zodat de
applicatie geen draaiende backend-service nodig heeft om te werken. De
volledige UI is geschreven in XAML, dit was de eerste keer dat ik dit gebruikt
heb.
