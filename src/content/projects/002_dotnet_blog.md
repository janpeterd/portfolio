---
title: .NET blog met Contentful integratie
date: 2023-12-16
projectType: Schoolproject
thumbnail: /img/projects/dotnet_blogpost.png
repo: https://github.com/janpeterd/techBlog
images:
  - /img/projects/dotnet_blog.png
  - /img/projects/dotnet_blogpost.png
technologies:
  - csharp
  - dotnet
  - docker
---

### 1. Inleiding

#### Een Dubbele Focus: .NET Leren en CI/CD Toepassen

Dit project was mijn eerste kennismaking met het **.NET** framework en de programmeertaal **C#**. Naast het aanleren van dit nieuwe ecosysteem, lag de focus op het implementeren van moderne ontwikkelpraktijken. De opdracht was om een webapplicatie te bouwen met een geautomatiseerde **CI/CD-pipeline** en een flexibele content-oplossing.

### 2. Wat is het? Een Toekomstbestendige Blog met een Headless CMS

Het eindresultaat is een volledig functionele tech-blog. Het unieke aan dit project is de ontkoppeling van content en code. In plaats van blogposts hard in de applicatie te coderen, wordt alle content beheerd via **Contentful**, een **headless Content Management System (CMS)**. Dit betekent dat een gebruiker zonder technische achtergrond eenvoudig blogposts kan schrijven, aanpassen en publiceren via een gebruiksvriendelijke webinterface.

![De homepage van de .NET blog, met posts die uit Contentful worden gehaald](/img/projects/dotnet_blog.png)

### 3. De Aanpak: Van Content tot Container

De realisatie van de blog bestond uit drie kerncomponenten: de .NET-applicatie, de koppeling met de CMS, en de automatisering van de deployment.

#### 1. De .NET Applicatie

De webapplicatie zelf is gebouwd in C# met het .NET-framework. Deze is verantwoordelijk voor het weergeven van de blogposts in een schone en leesbare lay-out.

#### 2. Flexibel Contentbeheer met Contentful

Om de content op te halen, heb ik de officiële **.NET SDK van Contentful** gebruikt. Deze SDK fungeert als de brug tussen mijn .NET-applicatie en het Contentful CMS. Wanneer een bezoeker de website opent, haalt de applicatie in real-time de laatste blogposts op uit Contentful en toont deze op de pagina.

![Een detailpagina van een blogpost](/img/projects/dotnet_blogpost.png)

#### 3. Geautomatiseerde Bouw- en Deploymentpijplijn

Met **GitHub Actions** heb ik een CI/CD-workflow opgezet. Deze pipeline automatiseert de volgende stappen bij elke `push` naar de GitHub-repository:

1.  **Bouwen:** Er wordt automatisch een **Docker-container** gebouwd die de .NET-applicatie bevat.
2.  **Publiceren:** De zojuist gebouwde container wordt automatisch geüpload naar **DockerHub**, klaar voor deployment op een server.

### 4. Besluit: Een Succesvolle Integratie van Moderne Technologieën

Dit project was een bijzonder leerzame en succesvolle introductie in de wereld van .NET. Het bood niet alleen een praktische basis in C#, maar ook hands-on ervaring met de kracht van een headless CMS en het belang van een geautomatiseerde CI/CD-pijplijn. Het eindproduct is een uitstekend voorbeeld van hoe deze drie moderne technologieën gecombineerd kunnen worden tot een robuuste, flexibele en onderhoudsvriendelijke webapplicatie.
