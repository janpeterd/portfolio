---
title: Museumplanning bezoekerscentrum OPZ
date: 2023-05-21
thumbnail: /img/projects/ps1_project_home.png
repo: https://github.com/janpeterd/PS1-project
images:
  - /img/projects/ps1_project_home.png
  - /img/projects/ps1_project_overzicht.png
technologies:
  - python
  - django
  - git
---

## De Opdracht: Een Geautomatiseerd Planningssysteem

Als eindopdracht voor het vak "Professionele Vaardigheden" in mijn eerste jaar Toegepaste Informatica, ontwikkelde ik een webapplicatie voor het [Bezoekerscentrum Passage](https://www.opzgeel.be/nl/bezoekerscentrum) van het [Openbaar Psychiatrisch Zorgcentrum (OPZ)](https://www.opzgeel.be/nl) in Geel. De applicatie had als doel het stroomlijnen van het proces voor het aanvragen en inplannen van rondleidingen.

De kernfunctionaliteit omvatte:

1.  Een online formulier waarmee bezoekers een afspraak konden aanvragen.
2.  Automatische e-mailnotificaties naar de beschikbare gidsen van het museum.
3.  Een mechanisme voor gidsen om zich aan te melden voor een specifieke rondleiding.
4.  Indien geen enkele gids beschikbaar was, werd de aanvrager per e-mail geïnformeerd met het verzoek een nieuw moment te kiezen.

## Mijn Rol en Leertraject: Van Basis tot Webapplicatie

Voor dit project heb ik vrijwel de volledige applicatie zelfstandig ontwikkeld, een prestatie waar ik nog steeds trots op ben. Dit was mijn eerste kennismaking met het bouwen van een volledige webapplicatie en het opzetten van de bijbehorende hosting. Voorafgaand aan dit project beperkte mijn programmeerervaring zich tot de basisprincipes van Python en het creëren van eenvoudige, statische webpagina's met HTML en CSS.

Het zelfstandig uitzoeken van alle aspecten – van backend logica en database-integratie tot e-mailverzending en deployment – was een steile, maar enorm waardevolle leercurve.

## Gebruikte Technologieën

Voor de realisatie van deze applicatie heb ik de volgende technologieën ingezet:

- **Backend Framework:** [Django](https://www.djangoproject.com/) (Python) voor de server-side logica en de Model-View-Controller (MVC) architectuur.
- **Database:** [Supabase](https://supabase.com/) als cloud-gebaseerde PostgreSQL-database voor het opslaan van afspraakgegevens en gidsinformatie.
- **Hosting:** [Vercel](https://vercel.com/) voor de deployment van de applicatie. Aangezien Vercel primair gericht is op JavaScript-projecten, heb ik hiervoor een **custom deployment script** moeten schrijven om de Django-applicatie correct te kunnen hosten.
- **E-mailverzending:** De [Gmail API (of SMTP-configuratie)](https://mail.google.com/) voor het geautomatiseerd versturen van notificaties naar bezoekers en gidsen.

## Het Resultaat: Een Functioneel Planningssysteem

Het eindresultaat was een volledig operationele webapplicatie die het planningsproces voor het Bezoekerscentrum Passage effectief ondersteunde. De applicatie kon:

- Afspraakverzoeken via een webformulier ontvangen.
- Data persistent opslaan en beheren in een cloud-database.
- Geautomatiseerde e-mails versturen om de communicatie tussen bezoekers en gidsen te faciliteren.
- Een overzicht bieden aan gidsen van openstaande en toegewezen rondleidingen.

Hieronder enkele schermafbeeldingen van de applicatie:

![Homepage met het afsprakenformulier voor bezoekers.](/img/projects/ps1_project_home.png)
![Overzichtspagina voor ingelogde gidsen met openstaande bezoekaanvragen.](/img/projects/ps1_project_overzicht.png)
![Detailpagina van een specifieke bezoekaanvraag voor een gids.](/img/projects/ps1_project_detail.png)
![Voorbeeld van een e-mailnotificatie aan een gids na toewijzing aan een bezoek.](/img/projects/ps1_project_mail.png)
![Bevestigingspagina na het succesvol indienen van een bezoekaanvraag.](/img/projects/ps1_project_bevestiging.png)

## Conclusie

Dit eerstejaarsproject was een cruciale mijlpaal in mijn ontwikkeling als programmeur. Het bood niet alleen een oplossing voor een reële behoefte van het OPZ, maar stelde mij ook in staat om fundamentele concepten van webontwikkeling en -deployment in de praktijk te brengen en een solide basis te leggen voor complexere projecten in de toekomst.
