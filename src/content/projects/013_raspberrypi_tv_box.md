---
title: Raspberry Pi TV-box
date: 2025-02-27
thumbnail: /img/projects/rpi_android_box.jpg
---

## Raspberry pi TV-box

Aangezien ik thuis een server heb met wat films op, wou ik een makkelijke
manier hebben om deze films te bekijken. Dit zou makkelijk zijn op een smart TV
of TV-box, maar deze heb ik niet.
Dus heb ik wat zitten rondkijken naar een oplossing voor dit probleem.

### Lineage OS

In het verleden heb ik al eens een andere ROM naar mijn smartphone geflasht en
ik bedacht me dat raspberry pi dezelfde processorarchitectuur heeft als mijn
GSM, dus ben ik gaan rondkijken naar ROMs voor android TV. Zo ben ik uitgekomen
bij een build van [Lineage OS android
14](https://konstakang.com/devices/rpi4/LineageOS21-ATV/).

Na wat lezen en het volgen van de instructies had ik een werkende versie van
Android TV op mijn raspberry pi en kon ik gewoon films kijken! Het probleem was
wel dat het niet zo makkelijk te bedienen was. Op dit moment kon ik het enkel
besturen met een toetsenbord of muis.

### IR afstandsbediening (TSOP4838 IR module)

Tijdens het lezen van de documentatie had ik ook gelezen dat het mogelijk was
om via de externe GPIO-pinnen van de raspberry pi een externe IR-module aan te
sluiten, waardoor het systeem werkt met een afstandsbediening.
Ik heb dus een
[TSOP4838](https://nl.mouser.com/ProductDetail/Vishay-Semiconductors/TSOP4838?qs=yGXpg7PJZCiwO12kec0Sug%3D%3D&srsltid=AfmBOoot30yr_YHhYU8-1sj4fbinX5nzJg1f9do-iry0CusGCqWZDtZu)
IR module besteld en heb deze met de juiste pinnen van de raspberry pi
verbonden. Hierna heb ik in de action een universele afstandsbediening gekocht.

![Raspberry Pi met IR sensor](/img/projects/rpi_android_box.jpg)

### IR codes

Toen ik de afstandsbediening wou testen merkte ik al snel dat het niet werkte.
Het bleek dat ik aan de raspberry pi de juiste IR-codes van de
afstandsbediening moest mappen naar acties binnen Android TV.

Hiervoor heb ik dit bestand aangemaakt.

```
0xc KEY_POWER
0xd KEY_MUTE
0x1 KEY_1
0x2 KEY_2
0x3 KEY_3
0x4 KEY_4
0x5 KEY_5
0x6 KEY_6
0x7 KEY_7
0x8 KEY_8
0x9 KEY_9
0x0 KEY_0
0x20 KEY_CHANNELUP
0x21 KEY_CHANNELDOWN
0x10 KEY_VOLUMEUP
0x11 KEY_VOLUMEDOWN
0x24 KEY_RECORD
0x29 KEY_STOP
0x3c KEY_TEXT
0x55 KEY_LEFT
0x56 KEY_RIGHT
0x50 KEY_UP
0x51 KEY_DOWN
0x57 KEY_OK
0x22 KEY_BACK
0x52 KEY_MENU
0x53 KEY_HOMEPAGE
```

En nu werkt het!

<video style="max-height: 600px" src="/img/projects/rpi_android_box.mp4" height="600" autoplay controls loop />
