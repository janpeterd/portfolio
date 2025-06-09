---
title: IoT muizenval
date: 2023-05-19
projectType: Schoolproject
thumbnail: /img/projects/iot_muizenval.png
video: https://youtu.be/tCBAd3iY1O8
images:
  - /img/projects/iot_muizenval.png
  - /img/projects/iot_muizenval_webui.png
technologies:
  - linux
  - bash
  - python
  - django
---

### 1. Inleiding

#### De Opdracht: Breng een Alledaags Object tot Leven

Als project voor het vak _IoTEssentials_ in mijn eerste jaar, was de opdracht helder: breng een alledaags object tot leven met de kracht van het 'Internet of Things'. Mijn keuze viel op een klassieker: de muizenval, maar dan wel een slimme, geautomatiseerde en verbonden versie. Dit project was een perfecte samensmelting van hardware, software en creativiteit.

### 2. Wat is het? Een 'Smart' en Verbonden Muizenval

Het eindresultaat is een 'smart' muizenval die fysieke componenten, softwarelogica en cloud-connectiviteit combineert. Het is meer dan een mechanisme; het is een autonoom systeem dat:

- **Automatisch detecteert en sluit** met behulp van een ultrasone sensor en een stappenmotor.
- **Statusinformatie toont** op een lokaal LCD-scherm (afkomstig van een oude Nokia 5110).
- **Op afstand bestuurd kan worden** via een op maat gemaakte webinterface.
- **Data doorstuurt naar de cloud** via een integratie met het **uBeac IoT-platform**.

Alle elektronica is netjes ingebouwd in een houten wijnkist, die fungeert als behuizing en val in één.

![De voltooide IoT muizenval in zijn houten behuizing](/img/projects/iot_muizenval.png)

### 3. De Aanpak: Van Hardware tot Cloud

De realisatie van de muizenval was een gelaagd proces, waarbij elke component een specifieke rol speelt.

#### Hardware en Mechanisme

Het hart van de operatie is een **Orange Pi 3 LTS**, een kleine computer vergelijkbaar met een Raspberry Pi, die Linux draait. Deze bestuurt alle componenten:

- De **ultrasonische sensor** meet de afstand en detecteert de aanwezigheid van een muis.
- De **stappenmotor** bedient het sluitingsmechanisme, dat werkt met een slim systeem van een elastiek.
- Fysieke **drukknoppen** en het **LCD-scherm** zorgen voor de lokale bediening en feedback.

#### Software en Connectiviteit

De intelligentie van de val wordt aangedreven door software:

- De kernlogica is geschreven in **Python**. Dit script leest de sensor uit, bestuurt de motor en het scherm.
- Voor de besturing op afstand heb ik een webinterface gebouwd met **Django**.
- De status van de val (aantal keren afgegaan, etc.) wordt naar het **uBeac IoT-platform** gestuurd voor monitoring op afstand.

### 4. Besluit: Een Succesvolle Mislukking

Dit eerstejaarsproject was een fundamentele en ontzettend leuke ervaring. Het was de perfecte, praktische introductie in de wereld van IoT, waarbij hardware, software en netwerkconnectiviteit samenkomen.

De ironie? Ondanks alle technologische inspanningen en de succesvolle implementatie van alle features, is het me nooit gelukt een muis te vangen. Het project was technisch een groot succes, maar als muizenvanger een complete mislukking.

Bekijk hieronder de demonstratie van de muizenval in actie.

<iframe style="max-width: 100%;" width="560" height="315" src="https://www.youtube-nocookie.com/embed/tCBAd3iY1O8?si=9nB02cXizRYY426I" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
