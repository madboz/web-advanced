    var successCallback = function(data) {
        
        //get latitude, longitute and altitude
        
        var lat = data.coords.latitude;
        var lon = data.coords.longitude;
        var alt = data.coords.altitude;
        
        //print lat, lon and alt
        
        console.log(lat);
        console.log(lon);
        console.log(alt);
        
        //convert lat, lon and alt into numbers out of 255
        
        var lat2 = Math.round((lat + 90) * 1.4166667);
        var lon2 = Math.round((lon + 180) * 0.7083333);
        var alt2;
        
        if (alt == null) {
            
            alt2 = 127;
            
        } else if (alt <= 0) {
            
            alt2 = 255;
            
        } else if (alt > 0 && alt < 500) {
            
            alt2 = Math.round((alt * -0.019375) + 255);
            
        } else if (alt >= 500) {
            
            alt2 = 0;
            
        }
        
        //print adjusted values
        
        console.log(lat2);
        console.log(lon2);
        console.log(alt2);
        
        //access body and concatenate background colour
        
        // $('body').css( 'background-color', 'rgb( ' +lat2+ ',' +lon2+ ',' +alt2+ ')');
        
        var clicked = false;
    
        $('.button').click(function(){
      
          if(clicked == false){
            
            $('.archive').hide();
            $('body').css( 'background-color', 'rgb( ' +lat2+ ',' +lon2+ ',' +alt2+ ')');
            
            clicked = true;
            
          } else {
            
            $('.archive').show();
            $('body').css('background-color','white')
            
            clicked = false;
            
          }
          
          var storedLat = [];
    var storedLon = [];
    var storedAlt = [];
    
    Cookies.set('storedLat','lat2');
    
    Cookies.get('lat2');
    
    if (Cookies.get('lat2')) {
        
        storedLat = JSON.parse(Cookies.get('lat2'));
        storedLon = JSON.parse(Cookies.get('lon2'));
        storedAlt = JSON.parse(Cookies.get('alt2'));
        
        for (var i=0; i < storedLat.length; i++) {
            
            $(".archive").append("<div class='swatch' style='rgb( " +lat2+ ", " +lon2+ "," +alt2+ " )'></div>");
            
        }
    }
    
    $(".archive").click(function(e) {
        
       storedLat.push(lat2);
       storedLon.push(lon2);
       storedAlt.push(alt2)
       
       $(".archive").append("<div class='swatch' style='rgb( " +lat2+ ", " +lon2+ "," +alt2+ " )'></div>");
       
       Cookies.set('storedLat', lat2);
       Cookies.set('storedLon', lon2);
       Cookies.set('storedAlt', alt2);
       
       
    });
            
        });
        
    };

    var failureCallback = function() {
        
        console.log("location failure :'(");
        
    };

    var logLocation = function() {

        //determine if the handset has client side geo location capabilities
        
        if(navigator.geolocation){
            
           navigator.geolocation.getCurrentPosition(successCallback, failureCallback);
           
        }
        else{
            
           alert("Functionality not available :(");
           
        }
        
    };

    logLocation();
    
    

    //storing data
    
    // var storedLat = [];
    // var storedLon = [];
    // var storedAlt = [];
    
    // Cookies.set('storedLat','lat2');
    
    // Cookies.get('lat2');
    
    // if (Cookies.get('lat2')) {
        
    //     storedLat = JSON.parse(Cookies.get('lat2'));
    //     storedLon = JSON.parse(Cookies.get('lon2'));
    //     storedAlt = JSON.parse(Cookies.get('alt2'));
        
    //     for (var i=0; i < storedLat.length; i++) {
            
    //         $(".archive").append("<div class='swatch' style='rgb( " +lat2+ ", " +lon2+ "," +alt2+ " )'></div>");
            
    //     }
    // }
    
    // $(".archive").click(function(e) {
        
    //   storedLat.push(lat2);
    //   storedLon.push(lon2);
    //   storedAlt.push(alt2)
       
    //   $(".archive").append("<div class='swatch' style='rgb( " +lat2+ ", " +lon2+ "," +alt2+ " )'></div>");
       
    //   Cookies.set('storedLat', lat2);
    //   Cookies.set('storedLon', lon2);
    //   Cookies.set('storedAlt', alt2);
       
       
    // });