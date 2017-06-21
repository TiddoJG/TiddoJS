//Config file waarin de gebruiker zijn persoonlijke settings kan invullen
var slider = new comebackslider(); //Oproepen van de slider
var settings = {autoplay: false, updateSpeed: 1000}; // Persoonlijke gegevens
var afbeeldingen = ['img/1.png', 'img/2.png', 'img/3.png']; // Afbeeldingen die in de slider moeten
slider.init(afbeeldingen, settings);