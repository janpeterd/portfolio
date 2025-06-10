---
title: Kubernetes deployment
date: 2023-12-13
projectType: Schoolproject
thumbnail: /img/projects/k8s_argocd.png
repo: https://github.com/janpeterd/milestone2_argocd
images:
  - /img/projects/k8s_argocd.png
  - /img/projects/k8s_prometheus.png
technologies:
  - kubernetes
  - linux
  - docker
  - bash
  - javascript
---

### 1. Inleiding

#### De Opdracht: Van Code naar een Robuuste Infrastructuur

Voor het vak _Linux Webservices_ kregen we de opdracht om een applicatie uit te rollen naar een **Kubernetes**-cluster. De nadruk van dit project lag expliciet niet op de applicatie zelf, maar op het bouwen, configureren en beheren van de onderliggende infrastructuur. Het doel was om een schaalbare, geautomatiseerde en observeerbare omgeving te creëren die klaar is voor productie.

### 2. Wat is het? Een Geautomatiseerde en Gemonitorde Kubernetes-Omgeving

Het eindresultaat is een volledig operationeel Kubernetes-cluster dat een sample-applicatie host. De ware kracht van het project zit echter in de architectuur eromheen:

- **Hoge Beschikbaarheid:** Een **Nginx Ingress** fungeert als load-balancer, die inkomend verkeer efficiënt verdeelt over meerdere instances van de applicatie.
- **Geautomatiseerde Deployments (GitOps):** Met **ArgoCD** is een GitOps-workflow geïmplementeerd. Elke push naar de GitHub-repository met de Kubernetes-configuraties wordt automatisch gedetecteerd en gesynchroniseerd met de cluster.
- **Uitgebreide Monitoring:** **Prometheus** is geïnstalleerd om de gezondheid en prestaties van de cluster en de draaiende applicaties continu te monitoren.

![Het ArgoCD dashboard toont de 'Synced' status van de applicatie](/img/projects/k8s_argocd.png)

### 3. De Aanpak: Bouwen in Lagen

De realisatie van dit project bestond uit verschillende logische stappen, van de basisinfrastructuur tot de geavanceerde operationele tools.

#### 1. De Basis: Applicatie en Containers

Als workload voor de cluster heb ik een simpele applicatie gebouwd bestaande uit een HTML/JavaScript frontend, een NodeJS API, en een MongoDB database. Elk van deze componenten heb ik verpakt in een **Docker-container** en geüpload naar DockerHub, klaar voor deployment.

#### 2. De Omgeving: Cluster Setup met Vagrant

Om een realistische multi-node cluster na te bootsen, heb ik de virtuele machines geconfigureerd met **Vagrant**. Dit maakte het mogelijk om lokaal een consistente en reproduceerbare testomgeving op te zetten.

#### 3. De Kern: Kubernetes en Networking

Vervolgens heb ik de Kubernetes-manifestbestanden geschreven om de applicatie te deployen. De Nginx Ingress Controller werd geconfigureerd om het verkeer correct naar de frontend-service te leiden. Het resultaat is een load-balanced setup, waarbij requests afwisselend door verschillende containers worden afgehandeld.

#### 4. De Kwaliteitslaag: Automatisering en Monitoring

De finale stap was het toevoegen van de operationele tools. ArgoCD werd gekoppeld aan mijn GitHub-repository voor geautomatiseerde CI/CD. Prometheus werd geïnstalleerd en geconfigureerd om metrics te verzamelen, wat essentieel is voor het proactief beheren van de omgeving.

![Het Prometheus dashboard biedt inzicht in de status van de cluster](/img/projects/k8s_prometheus.png)

### 4. Besluit: Een Praktische Duik in Moderne DevOps

Dit project was een zeer waardevolle, hands-on ervaring met de kerncomponenten van moderne cloud-native infrastructuren. Het bood de kans om verder te gaan dan aalleen applicatieontwikkeling en me te verdiepen in de tools en principes die essentieel zijn voor het betrouwbaar en schaalbaar draaien van software. Het succesvol opzetten van een geautomatiseerde en gemonitorde Kubernetes-omgeving was een uitstekende oefening in de vaardigheden die vandaag de dag zeer relevant zijn in de IT-sector.
