---
title: .NET blog met Contentful integratie
date: 2024-03-18
---

## .NET blog met Contentful integratie

![Resultaat .NET blog](/img/projects/dotnet_blog.png)
![Voorbeeld van een blog-post](/img/projects/dotnet_blogpost.png)

Dit project was de eerste keer dat ik met [.NET](https://nl.wikipedia.org/wiki/.NET) en C# heb gewerkt.
Naast het werken met dit nieuwe framework lag de focus van dit project ook op de **CI/CD-pipeline**, door gebruik te maken van [GitHub Actions](https://docs.github.com/en/actions).
Door middel van [Contentful CMS](https://www.contentful.com/) was de blog ook erg toegankelijk en bruikbaar voor een organisatie of persoon zonder een technische achtergrond.

### Contentful CMS

Ik heb de .NET SDK van Contentful gebruikt om de blog-posts binnen de .NET-applicatie op te halen.
Deze SDK is de verbinding tussen mijn website en Contentful.

Contentful is een CMS, dit staat voor **Content Management System**.
Dit betekent dat het een robuust en gebruiksvriendelijk systeem is voor het beheren van content.
In mijn geval was deze content de blog-posts die ik op de website weergeef, inclusief foto's, etc.

### GitHub Actions

Met GitHub Actions heb ik ervoor gezorgd dat er een Docker-container met de website gebouwd wordt bij elke push naar de GitHub-repository.
Deze werd ook automatisch geüpload naar DockerHub.
