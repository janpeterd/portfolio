---
title: Mijn portfolio
date: 2024-03-26
---

## Mijn portfolio

Mijn portfolio (de website waarop je dit nu leest) heb ik gemaakt met [Sveltekit](https://kit.Svelte.dev/). Dit is een erg intuïtief JavaScript-framework dat ervoor zorgt dat je JavaScript-, HTML- en CSS-code erg makkelijk kan combineren.

In het verleden had ik al eens kort naar Svelte gekeken, maar ik had er nog nooit een project mee gemaakt. Daarom vond ik dit project de perfecte kans om ermee aan de slag te gaan.

## Onderdelen

Mijn portfolio moest een paar onderdelen zeker bevatten. Deze zijn:

- Digitaal cv
- Download cv pdf
- Overzicht van projecten
- Tekst over mezelf

Deze zijn niet zo moeilijk om te maken met gewoon HTML en CSS, maar voor het overzicht van de projecten wou ik toch een makkelijk, bruikbaar en blog-achtig systeem maken.

## Projecten

Alle project-artikels schrijf ik in [Markdown](https://en.wikipedia.org/wiki/Markdown), deze bestanden voeg ik dan toe aan mijn project. Markdown is een systeem om erg makkelijk platte tekst te schrijven en toch gebruik te maken van rijkere elementen, zoals hoofdingen, lijsten, **vette** tekst etc.
Svelte heeft een goede preprocessor die Markdown om kan zetten naar Svelte-componenten genaamd: [mdsvex](https://mdsvex.pngwn.io/docs). Deze gebruik ik in dit project om de Markdown om te zetten naar Svelte-code.

Het moeilijkste onderdeel van dit systeem was het genereren van een overzichtspagina met alle posts en de links naar andere post op de pagina van een artikel.
Om dit te doen heb ik een API-route gemaakt die door middel van JavaScript-code op de server alle Markdown-bestanden in de juiste folder zoekt en deze indexeert in een lijst. Ook maakt dit script een `slug`, dit is het gedeelte dat in de URL verschijnt. Ten slotte haalt het ook de datum waarop de post gemaakt is uit de bestanden. Al deze gegevens worden dan via de API in JSON-formaat teruggegeven.

Wanneer iemand naar [/projects](/projects) surft, wordt deze API aangesproken en worden de resultaten op de pagina getoond.

![Projecten overzicht](/img/projects/portfolio_projects.png)

## Cv

Het maken van een digitale cv was niet erg moeilijk, maar ik heb wel veel tijd moeten spenderen aan het aanpassen van de layout. Omdat dit een website is een geen plat document moet de layout van de cv leesbaar zijn in vele formaten, ook op kleine smartphone-schermen.

Men drukt een cv ook vaak af, daarom heb ik ook extra CSS geschreven, specifiek voor de printer-layout.

![CV webpagina](/img/projects/porfolio_cv.png)
![CV printer weergave](/img/projects/portfolio_print.png)

## Ontwerp

Voor het ontwerp van mijn portfolio wou ik een donkere achtergrond, omdat ik dit zelf aangenamer vind om naar te kijken. Op het begin heb ik veel moeten experimenteren om een mooi design te vinden, maar uiteindelijk heb ik besloten om van radiale-gradiënten gebruik te maken.

Deze gradiënten gaan van een lichte kleur naar doorzichtig. Ook gebruik ik voor dit effect een mask, zodat de gradient niet te groot is. Uiteindelijk heb ik ook besloten om een korrelige foto als achtergrond te gebruiken, omdat ik het effect hiervan wel mooi vond.

![Homepage](/img/projects/portfolio_home.png)

## Logo

Het logo heb ik zelf getekend in [Inkscape](https://inkscape.org/). Deze software is erg handig voor het maken van logo's, omdat het gebruikt wordt voor het maken van SVG's. Dit zijn vector-foto's die oneindig veel vergroot kunnen worden.
Ideaal dus voor een logo dat je in verschillende formaten wilt gebruiken. Ik heb een logo gemaakt met een laptop en een met de letters van mijn voornaam. Deze laatste werkt beter als `favicon`.

![Logo](/img/projects/portfolio_logo.png)
![Logo tekst](/img/projects/portfolio_logotekst.png)

## 3D logo

Door wat rond te kijken en inspiratie op te doen had ik het idee gekregen om
een 3d-versie van mijn logo te maken. Hiervoor heb ik een gratis 3d-model van
een laptop gezocht en een 3d-model van mijn logo gemaakt in **blender**.
![Working on the model](/img/projects/portfolio_blender.png)

Ik ben erg tevreden met het eindresultaat.
![Logo 3d render](/img/projects/portfolio_logorender.png)

Uit nieuwsgierigheid heb ik ook een leuke animatie gemaakt. Ik gebruik het momenteel nergens, maar ik vind het wel erg goed gelukt!

<video src="/img/projects/portfolio_logorender.mp4" loop controls></video>

## Besluit

Met dit project heb ik een portfolio gemaakt, dat ik kan gebruiken om mezelf voor te stellen aan bedrijven en geïnteresseerden.
Door dit te maken heb ik ook bijgeleerd over Svelte en Sveltekit.
