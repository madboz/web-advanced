// setTimeout(function(){
//     console.log("%cmake", "color:green;");
// }, 1000);

// setTimeout(function(){
//     console.log("%cit", "color:green;");
// }, 2000);

// setTimeout(function(){
//     console.log("%crain", "color:green;");
// }, 3000);


var timer = 0;
var counter = 0;

setTimeout(function(){
    console.log("%cmake", "color:green;");
        setTimeout(function() {
          console.log("%cit", "color:green;");
          setTimeout(function() {
            console.log("%crain", "color:green;")



            setTimeout(function(){

                for (var i = 0; i < 19; i++) {
                setTimeout(function() {
                    var symbol = "";
                    for (var s = 0; s < 70; s++) {
                        if (Math.random()*100 < 1) {
                            symbol += " [$(1)$] ";
                        } else {
                            symbol += " ";
                        }
                    }
                    console.log(symbol, "");
                }, timer);
                timer += 800;
                counter++;

                }



                setTimeout(function(){

                    for (var i = 0; i < 1000; i++) {
                    setTimeout(function() {
                        var symbol = "";
                        for (var s = 0; s < 100; s++) {
                            if (Math.random()*100 < 5) {
                                symbol += " [$(1)$] ";
                            } else {
                                symbol += " ";
                            }
                        }
                        console.log(symbol, "");
                    }, timer);
                    timer += 100;
                    counter++;

                    }

                }, 10)

            }, 1000)

        }, 1000)

    }, 1000);

}, 1000);