# ComebackSlider
Dit framework geeft je de optie om een slider op je pagina te zetten. Je kan doormiddel van de Config file aanpassingen doen op het gebied van welke afbeeldingen erin moeten, de snelheid van de autoplay en of de autoplay eenmaal wel aan moet. Je kan dit framework makkelijk binnen een paar minuten op je website plaatsen en genieten van je eigen slider. Kijk hieronder hoe je hem instelt en geniet van je eigen slider.

## Welke bestanden heb je nodig
Download de files of clone de github. Pak de onderstaanden bestanden en plaats die in de map hoofd folder.

```shell
imgs/
comebackJS.css
comebackJS.js
comebackJSConfig.js
```

## Slider Opzetten
Zet de volgende link in je head tag:
```shell
<link href="comebackstyle.css" type="text/css" rel="stylesheet">
```
zet de volgende scripts onder aan je body
```shell
<script src="comebackJS.js" type="application/javascript"></script>
<script src="comebackJSConfig.js"></script>
```

Daarna wil je er voor zorgen dat je volgende HTML Layout creeërt
```shell
    <div id="slidercontainer">
        <img id="sliderimg">
        <div id="volgende">
            <i class="arrow right"></i>
        </div>
        <div id="vorige">
            <i class="arrow left"></i>
        </div>
    </div>
```

Daarna ga je naar de comebackJSConfig.js file, dit is de file waar je je eigen instellingen kan toevoegen. Je zult de volgende informatie zien:
```shell
//Config file waarin de gebruiker zijn persoonlijke settings kan invullen
var slider = new comebackslider(); //Oproepen van de slider
var settings = {autoplay: false, updateSpeed: 1000}; // Persoonlijke gegevens
var afbeeldingen = ['img/1.png', 'img/2.png', 'img/3.png']; // Afbeeldingen die in de slider moeten
slider.init(afbeeldingen, settings);
```
Hierboven zie je de config file die jij aan zou kunnen passen met je eigen persoonlijke instellingen.
autoplay kan je aan of uit zetten doormiddel van true/false. Je kan de tijd opgeven hoelang elke afbeelding in beeld moet blijven wanneer autoplay aan is totdat hij doorgaat naar de volgende(in milliseconden). Ook kan je de afbeeldingen veranderen die gebruikt worden dit kan je doen doormiddel van het aanpassen van de fileroutes.

## Demo

http://tiddovermeulen.com/leerportfolio/comeback/index.html


