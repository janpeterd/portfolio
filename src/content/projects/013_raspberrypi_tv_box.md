---
title: Raspberry Pi TV-box
date: 2025-02-27
thumbnail: /img/projects/rpi_android_box.jpg
video: /img/projects/rpi_android_box.mp4
technologies:
  - linux
  - vim
---

## Het Doel: Mijn eigen Media Center

Met een bibliotheek aan digitale media, zocht ik naar een
gebruiksvriendelijke manier om deze content te bekijken zonder te investeren
in een nieuwe smart TV of commerciële TV-box. Dit leidde tot het project om
een Raspberry Pi om te toveren tot een volwaardig media center.

### Stap 1: Android TV via LineageOS

Mijn eerdere ervaring met het flashen van custom ROMs op smartphones,
gecombineerd met de kennis dat de Raspberry Pi een vergelijkbare
ARM-processorarchitectuur deelt, bracht me op het idee om te zoeken naar
Android TV ROMs. Mijn zoektocht leidde me naar een geschikte build van
[LineageOS 21 (Android 14 TV)](https://konstakang.com/devices/rpi4/LineageOS21-ATV/) specifiek voor de
Raspberry Pi 4.

Na het zorgvuldig volgen van de installatie-instructies had ik een
functioneel Android TV-systeem draaien op de Raspberry Pi. Films streamen
vanaf mijn server was nu mogelijk, maar de bediening via toetsenbord en muis
was verre van ideaal voor een woonkamer-setup.

### Stap 2: Integratie van een IR-Afstandsbediening

De documentatie van LineageOS bood een oplossing: de mogelijkheid om een
externe infrarood (IR) ontvanger aan te sluiten op de GPIO-pinnen van de
Raspberry Pi. Dit zou bediening via een standaard afstandsbediening mogelijk
maken. Ik bestelde een [TSOP4838 IR-module](https://nl.mouser.com/ProductDetail/Vishay-Semiconductors/TSOP4838?qs=yGXpg7PJZCiwO12kec0Sug%3D%3D&srsltid=AfmBOoot30yr_YHhYU8-1sj4fbinX5nzJg1f9do-iry0CusGCqWZDtZu),
verbond deze met de correcte GPIO-pinnen en schafte een universele
afstandsbediening aan.

![De Raspberry Pi met de aangesloten TSOP4838 IR-sensor.](/img/projects/rpi_android_box.jpg)

### Stap 3: IR-Codes Configureren

De initiële test met de afstandsbediening was echter niet succesvol. De
ontvangen IR-signalen moesten nog correct gemapt worden aan specifieke acties
binnen Android TV. Dit vereiste het aanmaken van een configuratiebestand (een
`.kl` of "key layout" file) dat de hexadecimale IR-codes koppelt aan de
corresponderende Android key events.

Het volgende bestand definieert deze mapping (bijvoorbeeld opgeslagen als
`Vendor_XXXX_Product_XXXX.kl` in de juiste systeemmap):

```plaintext
# Keycode  # Android Key Event
0xc        KEY_POWER
0xd        KEY_MUTE
0x1        KEY_1
0x2        KEY_2
0x3        KEY_3
0x4        KEY_4
0x5        KEY_5
0x6        KEY_6
0x7        KEY_7
0x8        KEY_8
0x9        KEY_9
0x0        KEY_0
0x20       KEY_CHANNELUP
0x21       KEY_CHANNELDOWN
0x10       KEY_VOLUMEUP
0x11       KEY_VOLUMEDOWN
0x24       KEY_RECORD
0x29       KEY_STOP
0x3c       KEY_TEXT
0x55       KEY_LEFT
0x56       KEY_RIGHT
0x50       KEY_UP
0x51       KEY_DOWN
0x57       KEY_OK
0x22       KEY_BACK
0x52       KEY_MENU
0x53       KEY_HOMEPAGE
```

## Het Resultaat

Na het implementeren van deze keymap functioneerde de afstandsbediening naar
wens, wat resulteerde in een intuïtief bedienbaar media center, zoals te zien
in onderstaande demonstratie:

<video style="max-width: 100%; max-height: 600px; display: block; margin: auto;" src="/img/projects/rpi_android_box.mp4" autoplay controls loop aria-label="Demonstratie Raspberry Pi TV-box met afstandsbediening"></video>
<br/>

Dit project toont hoe een Raspberry Pi met wat software-aanpassingen en
minimale hardware-toevoegingen kan transformeren in een functionele en
budgetvriendelijke oplossing voor thuisentertainment.
