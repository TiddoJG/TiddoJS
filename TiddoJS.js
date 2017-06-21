var comebackslider = function () {
    
    /**
     * Default settings voor de slider
     */
    var defaultSettings = {
        autoplay: false,
        updateSpeed: 500, //In milliseconds
        sliderimg: 'sliderimg'
    };
    
    var sliderAfbeeldingen = []; // Array waar de afbeeldingen komen wanner de init is gestart.
    var sliderinhoud = document.getElementById(defaultSettings.sliderimg); 
    var imgnummer = 0; // om bij te houden bij welke image je bent.
    var i = 0; // Om mee te rekenen in de loop
    
    var imgchange = function() {
        if(i > (imgnummer -1)){
            i = 0;
        }
        sliderinhoud.src = afbeeldingen[i];
        i++; // optellen van de variable i
        console.log(i); // Laten zien waar tie bij het tellen is in de console
    };
        // check if the user has set variables, and replace values if they are not equal to the default settings
    var mergeObjects  = function(object1, object2) {
        for (var attrname in object1) {
            if(object2.hasOwnProperty(attrname)) {
                object1[attrname] = object2[attrname];
            }
        }
    };
    // vorige - arrow
    var vorige = function () {
        console.log('vorige');
        if(i == 0){
            
        }
        else{
            i--;
            sliderinhoud = afbeeldingen[i];
            console.log(i);
        }
    };
    // volgende - arrow
    var volgende = function () {
        console.log('volgende');
        if(i > (imgnummer -2)){
            
        }
        else{
            i++;
            sliderinhoud.src = afbeeldingen[i];
            console.log(i);
        }
    }
    var init = function(ingesteldenAfbeeldingen, ingesteldenSettings) {
        if(typeof ingesteldenAfbeeldingen !== 'undefined'){
            sliderAfbeeldingen = ingesteldenAfbeeldingen;
            imgnummer = sliderAfbeeldingen.length;
            mergeObjects(defaultSettings, ingesteldenSettings || {});
            
            if(imgnummer > 0){
                sliderinhoud.src = afbeeldingen[0];
            }
            else{
                alert('Er zijn geen afbeeldingen ingesteld.')
            }
            
            //arrows
            document.getElementById("vorige").addEventListener("click", vorige);
            document.getElementById("volgende").addEventListener("click", volgende);
            
            if(defaultSettings.autoplay == true){
                timer = setInterval(imgchange, defaultSettings.updateSpeed);
            }
        }
        
    };

    //Return the functions that should be accessible from the outside. The rest is only accessible from within the object
    return {
        init: init
    };
};