---
title: Project Digital Innovation PHP
date: 2024-05-21
thumbnail: /img/projects/php_project_projectinfo.png
images:
  - /img/projects/php_project_home.png
  - /img/projects/php_project_projectinfo.png
  - /img/projects/php_project_time.png
technologies:
  - php
  - laravel
  - git
---

## De Uitdaging: Een Centrale Hub voor Projectgestuurd Onderwijs

In het tweede semester van mijn tweede jaar Toegepaste Informatica stond een omvangrijk `PHP`-project centraal. In teamverband kregen we de opdracht om voort te bouwen op een analyse- en ontwerprapport dat door een ander team in het eerste semester was opgesteld. Dit rapport bevatte de initiële projectinformatie, uitgewerkte prototypes en use cases.

Ons team kreeg de taak een webapplicatie te ontwikkelen specifiek voor de onderwijsrichting **Digital Innovation** binnen onze campus. Kenmerkend voor deze richting is dat studenten alle eindtermen en leerdoelen behalen door het succesvol afronden van projecten, met minimale of geen traditionele theorielessen. Onze applicatie moest dienen als een centrale, digitale omgeving waarbinnen al deze projecten beheerd, gedocumenteerd en gevolgd konden worden.

## Doelgroepen en Kernfunctionaliteiten

De te ontwikkelen webapplicatie moest toegankelijk zijn voor vier verschillende gebruikerstypes, elk met eigen rechten en mogelijkheden:

- **Student:** Kan projecten bekijken, interesse tonen, bestanden uploaden, tijd registreren, en blogposts publiceren.
- **Docent:** Beheert projectideeën (accepteren/verwijderen), wijst studenten toe aan projecten, beheert rollen, leerdoelen en projectdetails.
- **Administrator:** Heeft volledige controle over gebruikersbeheer (inclusief genders, logins), systeembrede instellingen, en andere administratieve taken.
- **Bedrijfscontact:** Kan projectideeën indienen ter overweging door docenten.

De applicatie moest een breed scala aan functionaliteiten ondersteunen, waaronder:

- **Projectmanagement:** Indienen, goedkeuren, en beheren van projecten en projectideeën.
- **Gebruikers- en Rollenbeheer:** Toewijzen van studenten aan projecten en beheren van specifieke rollen binnen teams.
- **Content Management:** Uploaden van projectbestanden, schrijven en publiceren van blogposts.
- **Tijdsregistratie:** Gedetailleerd bijhouden van bestede tijd per project of taak door studenten.
- **Beheer van Onderwijscomponenten:** Creëren en beheren van leerdoelen en rollen.
- **Systeembeheer:** Accountaanvragen, authenticatie (login, wachtwoordherstel), e-mailnotificaties (met templates), en meertaligheid (Engels en Nederlands).

## Technische Stack en Hosting

Voor de realisatie van dit project hebben we gekozen voor de volgende technologieën:

- **Backend:** `PHP` met het robuuste [`Laravel`](https://laravel.com/) framework.
- **Database:** `MySQL` voor dataopslag.
- **Frontend Dynamiek:** [`Livewire`](https://livewire.laravel.com/) om interactieve interfaces te bouwen zonder complexe JavaScript-frameworks.
- **Styling:** [`TailwindCSS`](https://tailwindcss.com/) voor een utility-first benadering van het ontwerp.

De applicatie wordt gehost op een Virtual Machine (VM) via [Combell](https://www.combell.com/nl/).

## Samenwerking en Teamdynamiek

De teamindeling was gebaseerd op de resultaten van het PHP-examen uit het eerste semester. Dit resulteerde in een team waarin elk lid een solide basiskennis van PHP bezat en gemotiveerd was om kwalitatief werk te leveren.

De samenwerking binnen ons team verliep uitstekend. Er waren geen significante conflicten die de voortgang belemmerden. Taken werden vooraf duidelijk verdeeld, en elk teamlid nam verantwoordelijkheid voor zijn of haar toegewezen onderdelen. Waar overlap was of vergelijkbare functionaliteiten ontwikkeld moesten worden, werkten we nauw samen en deelden we code. Alle taken, verantwoordelijkheden en de voortgang werden nauwgezet bijgehouden op ons [Jira](https://www.atlassian.com/software/jira)-bord.

## Mijn Specifieke Bijdragen

Binnen dit project heb ik me geconcentreerd op de volgende kernonderdelen:

- **Ontwikkeling van de projectbeheerpagina:** Dit was een complexe module die data uit diverse databasetabellen moest samenvoegen en presenteren. Functionaliteiten zoals het uploaden van bestanden en het aanpassen van rollen waren hierin geïntegreerd.
- **Implementatie van de tijdsregistratiemodule voor studenten:** Hiermee kunnen studenten hun gewerkte uren per project of taak registreren.
- **Frontend Styling:** Ik heb significant bijgedragen aan de `TailwindCSS`-styling van datatabellen op diverse pagina's en was medeverantwoordelijk voor het ontwerp van de overkoepelende layout die consistent door de hele applicatie wordt gebruikt.
- **Verbetering van Dashboard Pagina's:** De visuele presentatie en gebruiksvriendelijkheid van diverse dashboard-pagina's heb ik verfijnd.
- **Algemene Bugfixing en Ondersteuning:** Daarnaast heb ik actief meegeholpen aan het identificeren en oplossen van bugs en problemen op andere pagina's.

## Huidige Status en Voorlopige Resultaten

Op het moment van schrijven is het project nog in de afrondende ontwikkelingsfase. De meeste kernfunctionaliteiten zijn geïmplementeerd en operationeel. Enkele details en verfijningen worden momenteel nog uitgewerkt. Onderstaande screenshots geven een impressie van de applicatie (de getoonde data is uitsluitend voor testdoeleinden).

![Homepage voor niet-geauthenticeerde gebruikers](/img/projects/php_project_home.png)
![Projectoverzicht voor docenten](/img/projects/php_project_projects.png)
![Detailpagina van een project voor docenten](/img/projects/php_project_projectinfo.png)
![Overzicht van leerdoelen](/img/projects/php_project_learnobj.png)
![Formulier voor het toevoegen van een nieuw project](/img/projects/php_project_newproject.png)
![Overzicht van tijdsregistraties voor studenten](/img/projects/php_project_time.png)
![Formulier voor het invoeren van tijdsregistratie door studenten](/img/projects/php_project_timeform.png)
