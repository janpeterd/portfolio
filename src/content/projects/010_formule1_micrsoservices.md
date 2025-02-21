---
title: ⭐ Microservices-applicatie Formule 1
date: 2024-12-22
---

- [Project demo](https://www.youtube.com/watch?v=SGmIv60Sp4Q)
- [Github repository](https://github.com/janpeterd/formula1-microservices)

## Opdracht

![Frontend Formula 1: Grand Prix page](/img/projects/formula1_frontend_gp_page.png)
![Frontend Formula 1: Drivers page](/img/projects/formula1_frontend_drivers_page.png)
![Frontend Formula 1: GP form](/img/projects/formula1_frontend_gp_form.png)

In het vak _Advanced Programming Topics_ hebben we geleerd over de
microservices-architectuur. We kregen daarom ook de opdracht om een applicatie
te maken volgens deze architectuur. Ik heb gekozen voor een simpele **Formule
1** applicatie, die informatie over chauffeurs, teams en circuits bijhoudt.

## Microservices

![Diagram architectuur](/img/projects/formula1_architecture_diagram.png)

In mijn microservices-architectuur communiceren alle services met elkaar binnen
een [kubernetes](https://kubernetes.io/url)-netwerk. Elke service heeft zijn eigen database.
Enkel de frontend en de api-gateway zijn blootgesteld voor externe gebruikers.

Hiernaast maakt mijn applicatie ook gebruik van Google OAuth2 voor authenticatie.

Toen ik het project startte ben ik begonnen met alles in
[Docker](https://www.docker.com/) te maken. Later besloot ik om het ook in
kubernetes te maken, dus heb ik mijn docker-compose.yaml bestand omgevormd naar
configuratiebestanden voor kubernetes. Deze heb ik lokaal getest met
[Minikube](https://minikube.sigs.k8s.io/).

## Services

De applicatie die ik gebouwd heb bestaat uit **7 verschillende projecten**
waaronder 5 _services_, 1 api-gateway en 1 react-project.

De services die ik gebouwd heb zijn:

- `circuit-service`
- `driver-service`
- `gp-service`
- `team-service`
- `image-service` (uploaden en hosten van foto's, zoals `S3`)

Zowel de services als de api-gateway maken gebruik van [spring boot](https://spring.io/projects/spring-boot/).

Binnen het netwerk, kunnen deze services data van elkaar gebruiken door
api-requests te maken. Alle objecten worden geïdentificeerd met een
unieke `UUID`, in plaats van een database id, omdat elke service zijn eigen
database gebruikt.

Hiernaast heb ik voor alle **service-klassen** binnen de verschillende
projecten **voor alle functies unit tests geschreven**. Hierbij heb ik gebruik
gemaakt van _mock data_ voor het nabootsen van antwoorden van de overige
services.

## Frontend

![Frontend Fromula 1](/img/projects/formula1_frontend_home_page.png)

De frontend heb ik gebouwd in [React](https://react.dev/), met behulp van
[Shadcn/ui](https://ui.shadcn.com/) en
[TailwindCSS](https://tailwindcss.com/). Alle formulieren worden gevalideerd
met [zod](https://zod.dev/). Ik heb hier ook Google-login geïmplementeerd.
Alle admin-pagina's zijn daarom ook beveiligd met deze login.

## Extra functies

Naast alle bovenstaande functies, heb ik ook nog wat extra's toegevoegd. Zoals
erg uitgebreide monitoring functionaliteit met behulp van:

- [Prometheus](https://prometheus.io/)
- [Grafana](https://grafana.com/)
- [Cadviser](https://github.com/google/cadvisor)
- [Node exporter](https://github.com/prometheus/node_exporter)

Enkel de grafana-pod is blootgesteld aan het internet, de rest van de pods zijn enkel binnen het
kubernetes-netwerk bereikbaar.

Nog een extraatje dat ik heb geïmplementeerd is **rate limiting** op de
api-gateway. Deze limit op het `ip-adres` van de gebruiker en maakt gebruik van
een [Redis](https://redis.io/) KV-database.

## Besluit

Ik vond dit een erg fijn project om aan te werken, omdat het een combinatie van
hosting/infrastructuur en applicatieontwikkeling bevat. Beide zaken vind ik
interessant en doe ik graag.

Het was ook al even geleden, sinds ik een kubernetes-cluster opgezet had en het
was daarom een goede opfrisser van deze vaardigheden.

Ik ben daarom ook erg blij met het resultaat, en
ik was niet de enige, want ik kreeg van de leraar een **20/20** voor deze opdracht!
