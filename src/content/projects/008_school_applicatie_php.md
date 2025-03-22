---
title: Project Digital Innovation PHP
date: 2024-05-21
thumbnail: /img/projects/php_project_projectinfo.png 
---

# De opdracht

In het tweede semester van mijn tweede jaar toegepaste informatica was het tijd om een groot project volledig uit te werken in `PHP`. Voor deze opdracht werden we in groepjes verdeeld en moesten we verder werken vanuit het verslag van een ander groepje uit het eerste semester. Dit verslag bevatte informatie over de opdracht, uitgewerkte prototypes en use cases.

De opdracht die ik met mijn groepje heb uitgewerkt is het maken van een webapplicatie voor de richting _Digital innovation_. Dit is een richting die aangeboden wordt door de campus. Studenten die voor deze richting kiezen behalen alle eindtermen en leerdoelen door het voltooien van projecten. Ze hebben dus erg weinig of geen theoretische vakken.

Onze applicatie moet een centrale plaats vormen waar al deze projecten uitgewerkt kunnen worden.

## Gebruikers

De applicatie moet door vier types van gebruikers gebruikt worden deze zijn:

- `student`
- `docent`
- `administrator`
- `bedrijfscontact`

## Functies

De webapplicatie moet vele verschillende functionaliteiten hebben. Enkele voorbeelden:

- bedrijven moeten projectideeën kunnen doorgeven
- docent moet deze ideeën kunnen accepteren of verwijderen
- docent moet studenten op een project zetten, en rollen veranderen
- docent moet leerdoelen, rollen, projecten kunnen beheren
- studenten kunnen voorgestelde projecten zien en zich opgeven als geïnteresseerde
- studenten kunnen bestanden uploaden voor een project
- studenten kunnen hun tijdsbestedingen registreren voor elk project of andere taak
- studenten kunnen blogposts schrijven en publiceren
- administrator moet genders, gebruikers, logins, etc. kunnen beheren
- en nog veel meer (accountaanvragen, authenticatie, wachtwoordreset, e-mailverzendingen en templates, lokalisatie (Engels en Nederlands)), ...

# Technologieën

De applicatie is geschreven in `PHP` met het [`Laravel`](https://laravel.com/) framework. Als database gebruiken we `MySQL`. Om dynamische webpagina's te voorzien gebruiken we [`Livewire`](https://livewire.laravel.com/). De styling van de webpagina's doen we met behulp van [`TailwindCss`](https://tailwindcss.com/).

# Hosting

De hosting doen we op [Combell](https://www.combell.com/nl/) op een `VM`.

# Samenwerking

De teams waren verdeeld op basis van de examenresultaten van het examen PHP uit het eerste semester. Ik had hier een goede score op behaald, dus ik belandde in een groep met teamgenoten die een gelijkaardige score behaald hadden. Dit zorgt ervoor dat elk teamlid goed begrijpt waar hij mee bezig is en ook de nodig moeite wil doen om dit op een goede manier te implementeren.

Naast de vaardigheden van elk teamlid zijn er nooit grote conflicten geweest die de samenwerking blokkeerde. Ik denk dat we erg goed werken als een team. De taken worden op voorhand duidelijk verdeeld en iedereen voltooid zijn deel. Als bepaalde delen gelijkaardig zijn, dan wordt er samengewerkt en code gedeeld. De taken en verantwoordelijken per taak worden ook allemaal bijgehouden op ons [Jira](https://www.atlassian.com/software/jira)-bord.

## Mijn bijdrage

Ik heb de pagina voor het beheren van de projecten op mij genomen. Dit was een redelijk complexe pagina, want hiervoor moest ik vele verschillende soorten data combineren. Deze data staat in de database over verschillende tabellen verspreid. Ook is het mogelijk om op deze pagina bestanden te uploaden, rollen te veranderen, etc.

Een andere grote pagina die ik op mij heb genomen is de pagina waarop studenten hun tijdregistratie kunnen uitvoeren.

Verder heb ik ook veel gewerkt aan de `Tailwind`-styling van de tabellen op de verschillende webpagina's en heb ik meegewerkt aan het ontwerp van de layout, die op alle pagina's gebruikt wordt.

Ook heb ik de styling van alle dashboard-pagina's verbeterd.

Ten slotte heb ik op andere pagina's meegeholpen aan het oplossen van fouten en problemen.

# Resultaat

Ik schrijf dit artikel op een moment dat het project nog in ontwikkeling is. Op dit moment werken alle functionaliteiten bijna volledig. Er moeten nog wat details uitgewerkt worden. Hier zijn enkele screenshots. De data die nu weergegeven wordt is enkel voor testing.

![Homepage gebruiker zonder authenticatie](/img/projects/php_project_home.png)
![Projectoverzicht voor docent](/img/projects/php_project_projects.png)
![Projectinfo voor docent](/img/projects/php_project_projectinfo.png)
![Leerdoelen overzicht](/img/projects/php_project_learnobj.png)
![Nieuw project toevoegen](/img/projects/php_project_newproject.png)
![Student tijdsregistratie overzicht](/img/projects/php_project_time.png)
![Student tijdsregistratie formulier](/img/projects/php_project_timeform.png)
