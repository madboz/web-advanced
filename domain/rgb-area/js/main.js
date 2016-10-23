// $(document).ready(function(){

// 	// var disp = document.getElementById('disp');

// 	function getCurrentPosition() {

// 		var lat = position.coords.latitude;
// 		var lon = position.coords.longitude;
// 		var alt = position.coords.altitude;

// 		//convert into values out of 255

// 		var lat2 = Math.round(lat * 0.42);
// 		var lon2 = Math.round(lon * 0.71);
// 		var alt2 = Math.round(alt * 0.02)

// 		console.log(lon);
// 		console.log(lat);
// 		console.log(lon2);
// 		console.log(lat2);

// 	}

// 	$("body").css( "background-color", "rgb( "+lat2+", "+lon2+","+alt2+")");

// });



          var successCallback = function(data) {
              
                // console.log('latitude: ' + data.coords.latitude + ' longitude: ' + data.coords.longitude);
                
                var lat = data.coords.latitude;
                var lon = data.coords.longitude;
                var alt = data.coords.altitude;
                
                console.log(lat);
                console.log(lon);
                console.log(alt);
                
                var lat2 = Math.round(lat * 0.42);
                var lon2 = Math.round(lon * 0.71);
                
                console.log("lat2:" + lat2);
                console.log("lon2:" + lon2);
                
                $("body").css( "background-color", "rgb( "+lat2+", "+lon2+", 33)");
                
            };

            var failureCallback = function() {
                
                console.log('location failure :(');
                
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

            