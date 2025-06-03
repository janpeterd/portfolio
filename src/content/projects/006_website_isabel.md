---
title: Website Isabel Dhallé
date: 2022-10-27
thumbnail: /img/projects/isabeldhalle.png
link: https://isabeldhalle.be
technologies:
  - python
  - django
  - git
  - docker
  - javascript
  - linux
  - bash
---

## Aanleiding

Toen mijn zus Isabel, violiste aan het conservatorium van Antwerpen, me vroeg
om een website voor haar te maken, stond ik aan het begin van mijn studie
Toegepaste Informatica. Deze vraag markeerde het begin van een leerzaam traject
en mijn eerste "echte" webproject.

## Initiële Versie: HTML & CSS

Met de verse kennis van HTML en CSS uit mijn eerstejaarsvakken ging ik aan de
slag. De eerste versie van [isabeldhalle.be](https://isabeldhalle.be) werd
volledig handmatig gecodeerd. Hoewel functioneel, bracht dit een belangrijk
nadeel met zich mee: elke wijziging vereiste handmatige aanpassingen in de code
en een nieuwe deployment. Dit was omslachtig en niet gebruiksvriendelijk voor
Isabel.

## Evolutie naar Django: Een MVC-aanpak

Om Isabel de mogelijkheid te geven haar website zelfstandig te beheren, besloot
ik de site om te bouwen naar een dynamische webapplicatie met een
Model-View-Controller (MVC) architectuur. De keuze viel op **Django**, een
krachtig Python-framework.

![over mij-pagina](/img/projects/isabel_about.png)
![concertenpagina](/img/projects/isabel_concerts.png)
![contactpagina](/img/projects/isabel_contact.png)

Deze transitie was een significante uitdaging. Concepten als MVC, databases,
ORM, en templating waren destijds nieuw voor mij en zouden pas later in mijn
studie uitgebreid aan bod komen. Door intensief documentatie te bestuderen en
te experimenteren, slaagde ik erin de website succesvol te migreren. De nieuwe
versie bevatte belangrijke functionaliteiten zoals:

- Een **beheersysteem voor concerten**, waarmee Isabel zelf concertdata kon
  toevoegen, wijzigen en verwijderen.
  ![admin](/img/projects/isabel_manage.png)

- Een **Markdown-editor** voor het bewerken van de "Over Mij"-pagina, wat
  rich text opmaak mogelijk maakte op een gebruiksvriendelijke manier.
  ![admin](/img/projects/isabel_richtext.png)

- Volledige **tweetaligheid** (Nederlands en Frans), zodat de content voor
  een breder publiek toegankelijk werd.

Dit project bood een vroege, diepgaande kennismaking met backend-ontwikkeling
en het implementeren van concrete gebruikersfeatures.

## Hosting en Deployment

Ook het online brengen van de Django-applicatie was een leerproces. Ik
verdiepte me in domeinnamen, DNS, Virtual Private Servers (VPS), webservers
(zoals Nginx/Gunicorn), en het beveiligen van een server. Uiteindelijk koos ik
voor DigitalOcean als hostingprovider, waar ik de applicatie succesvol heb
gedeployd.

## Leerresultaten en Stabiliteit

Dit project was fundamenteel voor mijn ontwikkeling als programmeur. Het bood
niet alleen praktische ervaring met HTML, CSS, Python en Django, maar ook met
de volledige ontwikkelcyclus, van initiële vraag tot deployment en onderhoud.
De opgedane kennis en het probleemoplossend vermogen gaven me een waardevolle
voorsprong in latere projecten en studies.

Een bewijs van de robuustheid van de gekozen technologieën en de opzet is dat
de website ondertussen al jaren stabiel online staat, met minimaal onderhoud,
weinig tot geen downtime en zonder noemenswaardige problemen.

![Isabel monitoring](/img/projects/isabel_status.png)

De website is nog steeds actief en te bezoeken via
[isabeldhalle.be](https://isabeldhalle.be).
