---
title: IoT muizenval
date: 2023-05-19
thumbnail: /img/projects/iot_muizenval.png
---

## IoT muizenval

<iframe style="max-width: 100%;" width="560" height="315" src="https://www.youtube-nocookie.com/embed/tCBAd3iY1O8?si=9nB02cXizRYY426I" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

In mijn eerste jaar toegepaste informatica heb ik voor het vak _IoTEssentials_ een muizenval gemaakt die volledig automatisch werkt.

De muizenval maakt gebruik van een ultrasone geluidssensor om de afstand tot een potentiële muis te berekenen.
Hiermee kan dan via code beslist worden of the muizenval wel of niet moet sluiten.

Het apparaatje dat alles bestuurt is een [orange PI 3 LTS](http://www.orangepi.org/html/hardWare/computerAndMicrocontrollers/details/orange-pi-3-LTS.html).
Dit is een kleine computer, vergelijkbaar met een _Raspberry Pi_ die Linux draait.
Deze computer voert code uit die ik in **Python** geschreven heb die de bediening van de muizenval voorziet.

Het openen en sluiten van de muizenval gebeurt met een [stappenmotor](https://nl.wikipedia.org/wiki/Stappenmotor)

### Knoppen

Door middel van drukknoppen is het mogelijk om de muizenval te sluiten en te resetten.

### Scherm

De muizenval heeft ook een LCD-scherm om de status van de muizenval en wat extra info (zoals de tijd en het aantal keren dat het is afgegaan) te tonen.
Het scherm dat ik gebruikt heb kwam oorspronkelijk van een [Nokia 5110](https://en.wikipedia.org/wiki/Nokia_5110) GSM.

### Web UI

Het is ook mogelijk om de muizenval te besturen via een website. Deze heb ik met [Django](https://www.djangoproject.com/) gemaakt.

### uBeac IoT-platform

Ook heb ik een integratie voorzien met het IoT-platform [uBeac](https://www.ubeac.io/).
Op dit platform is de status van de muizenval dan zichtbaar, samen met het totaal aantal keren dat de muizenval al is afgegaan.

### Behuizing

Deze componenten heb ik in een houten doos voor wijnflessen gestopt.
Deze doos heb ik in twee compartimenten gesplitst, de voorste voor de muis die binnenkomt en de achterste voor de componenten.
Bovenop de doos staat de stappenmotor die met behulp van een elastiek de doos opent, wanneer de val afgaat begint de motor te draaien en verslapt de elastiek, waardoor de deur sluit.

![Behuizing muizenval](/img/projects/iot_muizenval.png)

### Besluit

Op het einde van de rit was ik blij met het resultaat.
Ondanks al deze moeite is het mij toch niet gelukt een muis te vangen...
