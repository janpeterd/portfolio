---
title: Boekenstapel ASCII generator
date: 2025-05-26
thumbnail: /img/projects/bookstack.png
repo: https://github.com/janpeterd/BookStack
technologies:
  - python
  - git
---

## Inleiding

Het idee om een stapel boeken programmatisch te genereren ontstond toen ik op
[een website](https://sandyuraz.com/books/#-the-stack) een leuke
ASCII-representatie van een boekenstapel zag.

Aangezien ik zelf een liefhebber ben van kleine command-line applicaties en ik
het lezen van boeken tot een van mijn hobbies reken, leek me dit een uitstekend
project om in mijn vrije tijd aan te werken.

## Wat

Het resultaat is een compact (~350 regels code) en licht
command-line-programma (CLI). Hiermee kan de gebruiker boeken toevoegen en
vervolgens een ASCII-weergave van de boekenstapel genereren. Het programma
houdt rekening met het formaat van het boek en het aantal pagina's.

```text
        ┌───────────────────────┐
        │                       │
        │                       │
        │                       │
        │                       │
        │                       │
        │ The Well Of Ascension │
        │   Brandon Sanderson   │
        │                       │
        │                       │
        │                       │
        │                       │
        │                       │
        └─┬─────────────────────┴─┐
          │          A.I          │
          │    Lieven Scheire     │
    ┌─────┴─────────────────┬─────┘
    │                       │
    │                       │
    │                       │
    │                       │
    │   The Final Empire    │
    │   Brandon Sanderson   │
    │                       │
    │                       │
    │                       │
    └─┬─────────────────────┴─┐
      │                       │
      │          WIL          │
      │  Jeroen Olyslaegers   │
      │                       │
──────┴───────────────────────┴───────
\ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \
```

![Bookstack add](/img/projects/bookstack_add.gif)

Bovendien varieert de manier waarop de boeken gestapeld worden bij elke
generatie.

![Bookstack changes each time](/img/projects/bookstack_display.gif)

Daarnaast biedt het programma de mogelijkheid om boekgegevens te importeren en
exporteren, en kan de uitvoer naar een bestand worden weggeschreven.
Ten slotte heb ik een hulpcommando geïmplementeerd dat uitleg geeft over alle
subcommando's, inclusief gebruiksvoorbeelden.

![Bookstack import](/img/projects/bookstack_import.gif)

## Hoe

Het programma is geschreven in Python. Ik heb daarbij gestreefd naar eenvoudige
en goed gestructureerde code. Deze is ook publiek beschikbaar op [mijn Github-account](https://github.com/janpeterd/BookStack)

Het programma werkt zonder externe afhankelijkheden (dependencies), waardoor
het eenvoudig uitvoerbaar is en op vrijwel elk platform draait.
