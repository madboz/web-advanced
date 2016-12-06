    // var successCallback = function(data) {
        
    //     //get latitude, longitute and altitude
        
    //     var lat = data.coords.latitude;
    //     var lon = data.coords.longitude;
        
    //     //print lat, lon and alt
        
    //     console.log(lat);
    //     console.log(lon);

    // };

    // var failureCallback = function() {
        
    //     console.log("location failure :(");
        
    // };

    // var logLocation = function() {

    //     //determine if the handset has client side geo location capabilities
        
    //     if(navigator.geolocation){
            
    //       navigator.geolocation.getCurrentPosition(successCallback, failureCallback);
           
    //     }
    //     else{
            
    //       alert("Functionality not available :(");
           
    //     }
        
    // };

    // logLocation();


function getWeather() {
    var location = "10009";

    $.get('https://query.yahooapis.com/v1/public/yql?q=select * from weather.forecast where woeid in (select woeid from geo.places(1) where text="' + location + '")&format=json', function (data) {
        
        /* Check that a place was found (we'll just grab the first) */
        
        if (data.query.results === null) {
            console.log("Location not found: " + location + "!");

        } else {
            
            // logging results
            
            console.log(data.query.results)
            console.log(data.query.results.channel.atmosphere.humidity);
            
            // creating variable for humidity
            
            var humidity = data.query.results.channel.atmosphere.humidity;
            console.log(humidity);
            
            // translate humidity to value out of 
            
            var humidity2 = Math.round(humidity/3);
            console.log(humidity2)
            
            // applying blur
            
            var blur = "blur(" + humidity2 + "px)";
            console.log(blur); //figure out how you want to convert humidity to blur 1:1 etc
            
            $("body").css("-webkit-filter", blur);
            $("body").css("filter", blur);
            $("body").css("background-color","white");
        }

    });
}

getWeather();

// http://stackoverflow.com/questions/8372223/get-zip-code-based-on-lat-long