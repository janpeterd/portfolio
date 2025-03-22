---
title: Carpooling-applicatie voor Axxes
date: 2025-02-20
thumbnail: /img/projects/carpool_events.png
---

## Project 4.0

In het laatste jaar toegepaste informatica, krijgen alle studenten een vak om
een groot project te realiseren in teamverband. Het team bestaat uit studenten
uit verschillende specialisaties. De opdracht is telkens afkomstig van een bedrijf.

Mijn team bestond uit 6 medestudenten, waaronder internationale studenten. Het
was ook erg divers qua specialisaties en telde 3 studenten
applicatieontwikkeling, 2 studenten AI en één student cybersecurity.

Onze opdrachtgever was [Axxes](https://axxes.com/), een IT consultancy bedrijf
voornamelijk gebaseerd in Antwerpen.

![Logo](/img/projects/carpool_logo.webp)

## Opdracht: Carpool applicatie

De opdracht was een webapplicatie die het proces van carpooling naar evenementen
vereenvoudigd voor medewerkers van Axxes. Hiervoor wilden ze dat we een
AI-systeem maakten dat gebruikers groepeert op basis van locatie, maar ook
rekening houdt met de persoonlijke voorkeuren van de gebruiker.

## Planningsfase

In het eerste semester van dit jaar hebben we gewerkt aan de planning van dit
project. Hierbij hebben we een document opgesteld, waarin we verschillende
technologieën vergelijken. Na het afwegen van verschillende factoren hebben we
besloten volgende technologieën te gebruiken:

- Java Spring Boot backend
- Nextjs frontend
- Python FastAPI
- Auth0 authenticatie
- Mapbox API (kaartpagina)
- Google maps APIs (locatieberekeningen)
- Google Cloud Storage (foto uploads)
- MySQL database
- Kubernetes, EKS cluster op AWS
- Gitlab (VCS, CI/CD)

Ook hebben we modellen gemaakt van de infrastructuur, database-layout en een
use-case diagram.

Hiernaast hebben we ook al UI-prototypes gemaakt voor alle pagina's in
[Figma](http://figma.com/).

![Prototypes in Figma](/img/projects/carpool_prototypes.png)

Aan het eind van deze fase hebben we onze plannen gepresenteerd voor een werknemer van Axxes.

Het hele concept kan je [hier](/doc/projects/Carpool-Project-Plan.pdf) terugvinden.

## Realisatiefase

De realisatiefase bestond uit 3 sprints van telkens een schoolweek. Tijdens
deze sprints werkten we hele dagen aan dit project op school.

Binnen dit project heb ik mij vooral beziggehouden met het bouwen van de
backend. Hierbij heb ik het database-model gerealiseerd in Java en voor elke
entiteit volledige CRUD operaties API-endpoints gemaakt.

Hierbij heb ik ook het notificatiesysteem gemaakt, dat zowel e-mails verstuurt
alsook notificaties verstuurt via een websocketsverbinding.

Naast de backend heb ik ook de frontend van het notificatiesysteem gemaakt, dat
verbind via websockets met de backend en luistert naar globaal kanaal en een
kanaal voor de ingelogde gebruiker. Op deze manier is het versturen van meldingen naar
alle gebruikers en specifieke gebruikers mogelijk.

![Live notification](/img/projects/carpool_live_notification.png)
![notifications list](/img/projects/carpool_notifications.png)

Het verzenden van e-mails heb ik handmatig gemaakt in java spring-boot. Voor de
opmaak van de e-mails heb ik gebruik gemaakt van
[Thymeleaf](https://www.thymeleaf.org/)-templates.

![Some emails](/img/projects/carpool_emails.png)

Ook heb ik gewerkt aan de authenticatie van de frontend en de backend. Hiervoor
gebruikten we [auth0](https://auth0.com/). In de java backend heb ik api-routes
beveiligd, sommige heb ik beschikbaar gemaakt voor ingelogde gebruikers, andere
voor specifieke gebruikers (door de JWT te bekijken) en anderen op basis van
rol (admin).
In de frontend heb ik een _Guard_-component gemaakt om admin-routes af te
schermen voor alle gebruikers die de admin-rol niet hebben.

Tussendoor heb ik ook geholpen met het programmeren en opmaak van verschillende
component binnen de UI. En het oplossen van verschillende fouten in de applicatie en interface.

Ook heb ik geholpen met de deployment van de applicatie, waaronder het
schrijven en bouwen van Docker-containers, meehelpen aan de
kubernetes-cluster en CI/CD-pipeline op Gitlab.

![Pipeline](/img/projects/carpool_pipeline.png)

We hebben als team hard gewerkt gedurende deze drie weken, maar hierdoor is
onze communicatie en samenwerking erg sterk geworden. Hierdoor hebben we aan
het einde van deze fase een heel erg mooi resultaat kunnen afleveren aan Axxes.

![Team](/img/projects/carpool_team.jpg)

## Conclusie

Zowel als team als op persoonlijk vlak ben ik erg trots op het resultaat. Het
is een functionele applicatie die goed presteert op apparaten van verschillende
formaten en die tal van handige functies biedt.

Toen we onze applicatie een laatste keer presenteerde voor onze begeleider en
een medewerker van Axxes waren ze erg onder de indruk en hebben we bijna
uitsluitend lovende reacties gekregen.

![event system](/img/projects/carpool_events.png)
![rides](/img/projects/carpool_rides.png)
![admin events](/img/projects/carpool_admin_events.png)
![carpool events w search](/img/projects/carpool_events_search.png)
