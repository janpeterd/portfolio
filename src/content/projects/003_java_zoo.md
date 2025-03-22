---
title: Zoo application in Java
date: 2023-05-18
thumbnail: /img/projects/java_project_zoo.png
---

## Zoo application in Java

![Project zoo homepagina](/img/projects/java_project_zoo.png)
![Overzicht van verschillende zoos binnen de applicatie](/img/projects/java_project_zoos.png)

In dit project heb ik voor het eerst een applicatie gemaakt volgens de principes van [objectgeoriënteerd programmeren](https://nl.wikipedia.org/wiki/Objectgeori%C3%ABnteerd).
Dit heb ik gedaan in Java met het [Spring Boot framework](https://spring.io/projects/spring-boot/).

Dit framework volgt het [MVC](https://en.wikipedia.org/wiki/Model%E2%80%93view%E2%80%93controller) design-pattern.

### MVC

Binnen objectgeoriënteerde MVC verdeel je je systeem op in verschillende modellen die elk attributen en methodes hebben.

- In mijn applicatie heb ik deze modellen gemaakt:
  - `AnimalWorld`
  - `Person`
  - `Staff`
  - `Visitor`
  - `Zoo`

Dan is er nog een controller nodig, om bij, bijvoorbeeld de klik op een knop, de juiste informatie te tonen op het scherm en code uit te voeren.

### Templating met Thymeleaf

Na het schrijven van alle modellen en achterliggende logica wil ik deze modellen weergeven op een webpagina.
Om de brug tussen Java en HTML te overbruggen heb ik het [Thymeleaf](https://www.thymeleaf.org/) _templating engine_ gebruikt.

Deze templates of **views** zijn de webpagina's die getoond worden.
