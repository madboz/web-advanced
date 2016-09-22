var timer = 4000;
var counter = 0;

setTimeout(function(){

    console.log("%cmake", "color:green;");
    setTimeout(function() {

        console.log("%cit", "color:green;");
        setTimeout(function() {

            console.log("%crain", "color:green;")
            for (var i = 0; i < 20; i++) {
                
                setTimeout(function() {
                    
                    var snow = "";
                    for (var s = 0; s < 100; s++) {
                        
                        if (Math.random()*100 < 2) {
                            snow += "[*(1)*]";
                        } else {
                            snow += "    ";
                        }
    
                    }
        
                    console.log(snow, "");
                
                }, timer);
                timer += 200;
                counter++;
            }

          }, 1000)

      }, 2000);

}, 3000);

var value1 = prompt("Choose a number between 0 and 255:");

var value2 = prompt("Choose a number between 0 and 255:");

var value3 = prompt("Choose a number between 0 and 255:");










// for (var i = 0; i < 20; i++) {
//     setTimeout(function() {
//         var snow = "";
//         for (var s = 0; s < 100; s++) {
//             if (Math.random()*100 < 2) {
//                 snow += "[*(1)*]";
//             } else {
//                 snow += "    ";
//             }
    
//         }
//         console.log(snow, "");
//     }, timer);
//     timer += 200;
//     counter++;
// }

