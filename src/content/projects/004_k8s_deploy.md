---
title: Kubernetes deployment
date: 2024-03-18
---

## Kubernetes deployment

Voor het vak _Linux Webservices_ heb ik een application uitgerold naar een [Kubernetes](https://kubernetes.io/)-cluster.
Deze cluster heb ik dan klaargemaakt voor veel verkeer door gebruik te maken van een load-balancer ([Nginx ingress](https://docs.nginx.com/nginx-ingress-controller/)).
Ook heb ik [ArgoCD](https://argoproj.github.io/cd/) geïnstalleerd, waardoor de cluster automatisch vernieuwd wordt bij een push naar GitHub.
Om de cluster te monitoren heb ik [Prometheus](https://prometheus.io/docs/introduction/overview/) geïnstalleerd.

De nadruk van dit project lag niet op de applicatie zelf, maar de infrastructuur erachter.

### Applicatie

De applicatie die ik gedeployed heb ik bestaat uit een simpel HTML-bestand als frontend met een Javascript-script dat data uit de database haalt.
Ook heb ik een [NodeJS](https://nodejs.org/en)-API gemaakt die data uit de Mondgodb-database teruggeeft.
En ten slotte heb ik gebruik gemaakt van Mongodb als database en heb ik een script geschreven dan mijn naam in de database zet.

Van elk van deze onderdelen heb ik een Docker-container gebouwd en deze geüpload naar DockerHub.

### Cluster

Ik heb een echte cluster nagebootst met virtuele computers.
De configuratie van deze VMs heb ik gedeclareerd met [Vagrant](https://www.vagrantup.com/).

Hierna heb ik de configuratiebestanden van de cluster geschreven.

![Resultaat, merk op dat het container ID verschilt. Dit is door de load-balancer.](/img/projects/k8s_result.png)
![Prometheus monitoring](/img/projects/k8s_prometheus.png)
![Argo CD](/img/projects/k8s_argocd.png)
