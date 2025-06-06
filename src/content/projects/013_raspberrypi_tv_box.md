---
title: Raspberry Pi TV-box
projectType: Persoonlijk project
date: 2025-02-27
thumbnail: /img/projects/rpi_android_box.jpg
images:
  - /img/projects/rpi_android_box.jpg
video: /img/projects/rpi_android_box.mp4
technologies:
  - linux
---

### 1. Inleiding

#### Het Doel: Een Eigen, Budgetvriendelijk Media Center

Met een groeiende bibliotheek aan digitale media wilde ik een gebruiksvriendelijke manier om deze content op mijn tv te bekijken. In plaats van te investeren in een nieuwe smart-tv of een commerciële TV-box, besloot ik een project te starten dat perfect paste bij mijn interesse in technologie: een Raspberry Pi omtoveren tot een volwaardig en intuïtief media center.

### 2. Het Project: Van Single-Board Computer tot TV-Box

Het eindresultaat is een op maat gemaakte TV-box die een Raspberry Pi 4 als hart gebruikt. Dit compacte systeem draait een volwaardige versie van Android TV en is volledig te bedienen met een standaard infrarood (IR) afstandsbediening, wat een naadloze woonkamerervaring biedt. Het project combineert software-installatie met een minimale, maar cruciale, hardware-aanpassing.

![De Raspberry Pi met de aangesloten TSOP4838 IR-sensor.](/img/projects/rpi_android_box.jpg)

### 3. De Aanpak: Een Stapsgewijze Realisatie

Het realiseren van dit project bestond uit drie duidelijke stappen, van de softwarebasis tot de fijnafstelling van de hardware.

#### Stap 1: De Softwarebasis Leggen met LineageOS

Mijn ervaring met het flashen van custom ROMs op smartphones bracht me op het idee om Android TV op de Raspberry Pi te installeren. Ik vond een geschikte build van **[LineageOS 21 (Android 14 TV)](https://konstakang.com/devices/rpi4/LineageOS21-ATV/)** en na een succesvolle installatie had ik een werkend systeem. De eerste uitdaging diende zich echter al snel aan: bediening met muis en toetsenbord was onpraktisch voor een media center.

#### Stap 2: De Hardware-Integratie met een IR-Sensor

De oplossing lag in het toevoegen van een infraroodontvanger. Ik bestelde een **TSOP4838 IR-module** en verbond deze met de GPIO-pinnen van de Raspberry Pi. Dit zou de Pi in staat stellen om signalen van een universele afstandsbediening te ontvangen.

#### Stap 3: De Brug Tussen Hard- en Software Configureren

Na de fysieke installatie werkte de afstandsbediening nog niet. De ontvangen IR-signalen moesten nog "vertaald" worden naar commando's die Android begrijpt. Dit vereiste het aanmaken van een custom **Key Layout (`.kl`) bestand**. In dit bestand wordt elke unieke hexadecimale code van een knop op de afstandsbediening gekoppeld aan een specifieke Android-actie.

Dit configuratiebestand definieert de mapping:

```plaintext
# Keycode  # Android Key Event
0xc        KEY_POWER
0xd        KEY_MUTE
0x10       KEY_VOLUMEUP
0x11       KEY_VOLUMEDOWN
0x50       KEY_UP
0x51       KEY_DOWN
0x55       KEY_LEFT
0x56       KEY_RIGHT
0x57       KEY_OK
0x22       KEY_BACK
0x53       KEY_HOMEPAGE
# ... en zo verder voor andere knoppen
```

### 4. Het Eindresultaat: Een Intuïtief Media Center

Na het implementeren van de keymap was de TV-box compleet. De afstandsbediening functioneerde perfect, wat resulteerde in een naadloos en intuïtief bedienbaar media center. De onderstaande video demonstreert de soepele werking van het eindproduct.

<video style="max-width: 100%; max-height: 600px; display: block; margin: auto;" src="/img/projects/rpi_android_box.mp4" autoplay controls loop aria-label="Demonstratie Raspberry Pi TV-box met afstandsbediening"></video>
<br/>

Dit project is een perfect voorbeeld van hoe een betaalbare Raspberry Pi, met de juiste software en een kleine hardware-toevoeging, kan worden getransformeerd tot een krachtige en praktische oplossing voor thuisentertainment.
