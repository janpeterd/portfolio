---
title: Microservices-applicatie Formule 1
date: 2024-12-22
thumbnail: /img/projects/formula1_frontend_gp_page.png
repo: https://github.com/janpeterd/formula1-microservices
video: https://www.youtube.com/watch?v=SGmIv60Sp4Q
technologies:
  - java
  - spring
  - react
  - typescript
  - javascript
  - postgresql
  - git
---

## De Opdracht: Een Microservices Architectuur in de Praktijk

In het kader van het vak _Advanced Programming Topics_ lag de focus op het
doorgronden en toepassen van de microservices-architectuur. De opdracht was
dan ook het ontwerpen en realiseren van een applicatie die deze
architecturale principes demonstreert. Ik koos ervoor een **Formule 1
informatieplatform** te ontwikkelen, gericht op het beheren en presenteren
van data over coureurs, teams, circuits en Grand Prix-evenementen.

## Architectuur: Gedistribueerd en Geschaald

![Diagram van de microservices-architectuur](/img/projects/formula1_architecture_diagram.png)

De kern van de applicatie is een microservices-architectuur waarbij alle
services autonoom opereren en met elkaar communiceren binnen een
[Kubernetes](https://kubernetes.io/)-netwerk. Elke service beschikt over een
eigen, geïsoleerde database. Externe toegang is beperkt tot de frontend
applicatie en een centrale API Gateway, die als enige ingangspunten dienen.
Voor authenticatie en autorisatie is Google OAuth2 geïntegreerd.

Het ontwikkelproces startte met het containeriseren van alle componenten met
[Docker](https://www.docker.com/). Vervolgens heb ik de
`docker-compose.yaml`-configuratie getransformeerd naar
Kubernetes-manifestbestanden, die lokaal getest en gevalideerd werden met
[Minikube](https://minikube.sigs.k8s.io/).

## Componenten: Services, Gateway en Frontend

Het volledige systeem bestaat uit **zeven afzonderlijke projecten**: vijf
backend microservices, een API Gateway, en een React-gebaseerde frontend.

### De Microservices: Alle backend services en de API Gateway zijn ontwikkeld

met [Spring Boot](https://spring.io/projects/spring-boot/):

- `circuit-service`: Beheer van circuitinformatie.
- `driver-service`: Beheer van coureursdata.
- `gp-service`: Beheer van Grand Prix-evenementen en resultaten.
- `team-service`: Beheer van teaminformatie.
- `image-service`: Een generieke service voor het uploaden en serveren van
  afbeeldingen, vergelijkbaar met een S3-bucket functionaliteit.

Binnen het Kubernetes-netwerk wisselen deze services data uit via
API-requests. Om onafhankelijkheid van database-specifieke ID's te garanderen
en consistentie over services heen te bewaren, worden alle entiteiten
geïdentificeerd met een unieke `UUID`.

Een belangrijk aspect van de ontwikkeling was het waarborgen van de
betrouwbaarheid van elke service. Hiervoor heb ik **uitgebreide unit tests
geschreven voor alle service-klassen** binnen elk project. Deze tests maken
gebruik van _mock data_ om de antwoorden van afhankelijke services te
simuleren, waardoor elke service geïsoleerd getest kon worden.

## Frontend: Een Moderne Gebruikersinterface

![Homepage van de Formule 1 frontend applicatie](/img/projects/formula1_frontend_home_page.png)

De frontend is gebouwd met [React](https://react.dev/) en gestyled met
[TailwindCSS](https://tailwindcss.com/), gebruikmakend van de
componentenbibliotheek [Shadcn/ui](https://ui.shadcn.com/).
Formuliervalidatie wordt afgehandeld door [Zod](https://zod.dev/). Google
OAuth2 is geïntegreerd voor gebruikersauthenticatie, waarmee admin-specifieke
pagina's en functionaliteiten beveiligd zijn.

Bekijk hier enkele schermen van de applicatie:
![Grand Prix detailpagina](/img/projects/formula1_frontend_gp_page.png)
![Overzichtspagina van coureurs](/img/projects/formula1_frontend_drivers_page.png)
![Formulier voor het beheren van Grand Prix data](/img/projects/formula1_frontend_gp_form.png)

## Geavanceerde Functionaliteiten

Om de robuustheid en het operationele aspect van de applicatie te versterken,
heb ik enkele extra features geïmplementeerd:

### Uitgebreide Monitoring Een complete monitoring-stack is opgezet met:

- [Prometheus](https://prometheus.io/) voor het verzamelen van metrics.
- [Grafana](https://grafana.com/) voor het visualiseren van deze metrics in
  dashboards.
- [cAdvisor](https://github.com/google/cadvisor) voor container-specifieke
  monitoring.
- [Node Exporter](https://github.com/prometheus/node_exporter) voor het
  exporteren van host-level metrics. Enkel de Grafana-pod is extern
  toegankelijk; de overige monitoringcomponenten opereren uitsluitend binnen
  het Kubernetes-netwerk.

### Rate Limiting

Op de API Gateway is **rate limiting** geïmplementeerd om misbruik te
voorkomen. Deze limiet is gebaseerd op het `IP-adres` van de gebruiker en
maakt gebruik van een [Redis](https://redis.io/) key-value database om
request-counts bij te houden.

## Conclusie: Een Leerzaam en Succesvol Project

Dit project was bijzonder waardevol omdat het een diepgaande combinatie van
infrastructuur/hosting-aspecten en applicatieontwikkeling vereiste – twee
domeinen die mijn sterke interesse hebben. Het bood tevens een uitstekende
gelegenheid om mijn kennis van Kubernetes op te frissen en verder te
verdiepen.

Ik ben zeer tevreden met het eindresultaat. Deze tevredenheid werd gedeeld
door de docent, wat resulteerde in een **beoordeling van 20/20** voor deze
opdracht.
