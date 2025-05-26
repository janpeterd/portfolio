---
title: Stage Lykios
date: 2025-05-24
link: /projects/015_qurio_stage
attachments:
  - /doc/stage/Projectplan stage Lykios 2025 - Jan-Peter Dhallé.pdf
  - /doc/stage/Realisatiedocument stage Lykios 2025 - Jan-Peter Dhallé.pdf
  - /doc/stage/Reflectie stage Lykios 2025 - Jan-Peter Dhallé.pdf
  - /doc/stage/Statusrapport stage Lykios 2025 - Jan-Peter Dhallé.pdf
  - /doc/stage/Functionele User Manual Qurio - Lykios stage 2025.pdf
---

## Lykios

In mijn laatste jaar Toegepaste informatica heb ik gedurende drie maanden
stagegelopen in Geel bij [Lykios](https://lykios.be), een IT-consultancybedrijf
gespecialiseerd in Java en Spring.

![Logo lykios](/img/stage/lykios.png)

Lykios is een jong bedrijf, omdat het recent gesplitst is van een gelijkaardig
bedrijf uit Leuven, [Faros](http://www.faros.be/). Het bedrijf zelf maakt ook
deel uit van twee bedrijfsgroepen: [Xplore Group](https://www.xploregroup.be/nl/) en [De Cronos
Groep](https://cronos-groep.be/).

De werknemers van Lykios werken als consultant voor softwareproject van externe
bedrijven. De activiteiten van deze bedrijven zijn erg uiteenlopend, maar de
gemeenschappelijke factor is dat al deze projecten een Java-component bevatten.

De CEO van Lykios is Nico Rampelbergh. Tijdens de stage was hij ook mijn
stagementor. Nico is een ervaren ontwikkelaar met vele jaren ervaring in
projectwerk en ontwikkeling van Java-applicaties. Hierdoor bezit hij een zee
van kennis, die hij tijdens de stage met plezier met mij deelde. De begeleiding
van Nico maakte de stageperiode erg uniek. Hier wil ik hem voor bedanken.

## Opdracht

Tijdens mijn stage heb ik samen met een andere stagiaire gewerkt aan een
**quizplatform**. Dit is een webapplicatie waarin gebruikers met verschillende
rollen en eventueel gelinkt aan bedrijven quizzen kunnen aan beheren, spelen en
delen. Makers van quizzen kunnen ook statistieken bekijken, links genereren,
...

De opdrachtomschrijving die we van het bedrijf kregen was bewust erg breed en
vaag. Hierdoor hadden we zelf ook een zeg in wat we juist wouden doen. Ook was
er geen verwachting dat we het hele project afgewerkt kregen tegen het einde
van de stage.

De stageperiode werd onderverdeeld in zes sprints van twee weken. De eerste
week was gereserveerd voor opstart en analyse. Aan de start van een sprint
zaten we altijd samen om de taken voor de volgende sprint te bepalen en te
reflecteren over de vorige sprint.

## Start van de stage

De eerste week van de stage was gereserveerd voor de opstart en het analyse van
de opdracht. In deze periode hebben ik eerst en vooral kennisgemaakt met de
medewerkers van Lykios en de andere stagiaire. Hierna zijn we begonnen aan het
analysewerk. Hieronder viel het opstellen van usecases en deze modelleren in
een usecasediagram, het ontwerpen en maken van prototypes, het nadenken over
functionaliteiten en hoe we deze op een hoog niveau het best kunnen
implementeren. Hierna hebben we ook een databasemodel gemaakt.

Dit hebben we ook allemaal samengebracht in een [_projectplan_](/doc/stage/Projectplan.pdf).

![Prototypes in Figma](/img/stage/figma_prototypes.png)

In deze week hebben we ook veel uitleg gekregen over de manier van werken en
werd de cruciale basiskennis overlopen. Hieronder viel ook een korte sessie
over git, die ik erg nuttig vond. Het herhaalde de basis, wat niet veel nieuw
was, maar ging ook snel over tot geavanceerde commando's. Ook kregen we wat
oefeningen om deze te in te oefenen. Na het maken van deze oefeningen heb ik
was mijn kennis van git erg goed en de kennis die ik hieruit geleerd heb, heb
ik tijdens de rest van de stage constant toegepast.

## De eerste sprints

Na de eerste week zijn we aan het programmeerwerk begonnen. In de eerste sprint
hadden we geplant om de authenticatie van de applicatie te maken en de
CI/CD-pipeline te installeren op een laptop via Jenkins.

Aan het begin hadden we soms last van _git-conflicts_ en moest er nog wat
opzoekwerk gebeuren naar de verschillende technologieën die we gebruikten. De
werknemers hebben ons ook geholpen als we vragen hadden.

De eerste sprint was zeker een succes, we hadden alle functionaliteiten die we
gepland hadden afgewerkt en een demo gegeven. Toch verliep het niet vlekkeloos
en hebben we actiepunten opgeschreven die we in de tweede sprint gingen
uitvoeren.

De tweede sprint was al een hele verbetering, het werk verliep vlotter, het
oplossen van _git-conflicten_ ook en vooral het schrijven van testen, iets waar
ik veel nieuws over had geleerd verliep veel beter. Dit is een trend die zich
gedurende de eerste sprints heeft verdergezet.

Het was al snel duidelijk dat het stagebedrijf het **testen** van de applicatie
erg belangrijk vond. In het verleden had ik al wel eens unittests en
integratietests geschreven, maar dit was niets in vergelijking met wat de
medewerkers ons aanraadden om te doen.

Na de eerste aantal sprints hadden we al een goede basis voor het aanmaken van
vragen, quizzen en het spelen van een quiz. Ook hadden we al een volledig
authenticatiemechanisme gebaseerd op _JSON Web Tokens_ (JWT).

## Eerste evaluatie

Ongeveer in de helft van de stageperiode was het tijd voor een tussentijdse
evaluatie. Deze zou niet meetellen voor punten. Toch vond ik dit nuttig, omdat
ik probeer zo goed mogelijk uit feedback te leren. Ik hecht veel belang aan
feedback en reflectie. Dit reflectiemoment was ook erg handig om een idee te
krijgen van de tevredenheid van de medewerkers over mijn gedrag en en
prestaties.

Tijdens het evaluatiemoment heb ik een erg goede beoordeling gekregen. Dit
bevestigde het gevoel dat ik zelf had dat de voortgang en manier van werken
vlot en positief was.

## Quarkus workshop door Red Hat

Tijdens de stage krijgen we ook de kans om een dag naar Leuven te gaan om een
workshop bij te wonen over [Quarkus](https://quarkus.io/). Die dag heb ik
bijgeleerd over het Java-ecosysteem en Quarkus. Hoewel er problemen waren met
de cloudomgeving voor het praktische onderdeel van de workshop vond ik het leuk
en leerrijk.

## Testsessie

Een medewerker raadde ons aan om de applicatie toegankelijk te maken voor de
anderen, zodat er gezocht kon worden naar bugs en eventuele suggesties.
Hiervoor heb ik de applicatie dan voorbereid. Eerst heb ik een hoop kleine
foutjes waar ik al van op de hoogte was opgelost. Vervolgens heb ik de
applicatie publiek toegankelijk gesteld op de laptop.

Uit deze sessie heb ik veel nuttige informatie gehaald. Het was zeker een goede
suggestie die ik in de toekomst ook zal toepassen op andere projecten.

Deze testversie van de applicatie heb ik dan ook tot het einde van de stage
up-to-date gehouden.

## Vervolg en einde van de stage

Dag in en dag uit hebben we verder gewerkt aan de applicatie. Na een sprint of
drie waren alle fundamenten opgezet om het ontwikkelproces vlot te laten
verlopen. De volgende sprints verliepen daarom erg vlot. Vaak moest ik extra
taken uit de backlog halen omdat ik te snel klaar was met al het geplande werk.
Ook het samenwerken ging erg goed. De communicatie met de medewerkers en
medestagiaire was duidelijk en vlot. Over het algemeen waren er erg weinig
problemen.

## Technologie

1. Java 21
2. Spring Boot
3. React
4. React Router v7
5. Jenkins

## Resultaat

Een overzicht van de applicatie en het resultaat is zichtbaar op de
[projectpagina van Qurio](/projects/015_qurio_stage). Of in de bijgevoegde documenten.
