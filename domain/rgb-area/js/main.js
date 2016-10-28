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
    
    
    
    // STORING DATA
    
    //setting a cookie ??
    
    lon3 = [];
    lat3 = [];
    alt3 = [];
        
    if (Cookies.get('xval')) {
        
        xvals = JSON.parse(Cookies.get('xval'));
        yvals = JSON.parse(Cookies.get('yval'));
        
        for (var i=0; i < xvals.length; i++) {
            $(".stage").append("<div class='dot' style='left: " + xvals[i] + "px; top: " + yvals[i] + "px'></div>");
        }
        
    }
    
    $(".stage").click(function(e) {
       xvals.push(e.clientX);
       yvals.push(e.clientY);
       $(".stage").append("<div class='dot' style='left: " + e.clientX + "px; top: " + e.clientY + "px'></div>");
       Cookies.set('xval', xvals);
       Cookies.set('yval', yvals);
    });


    