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
    console.log("%c3", "color:lightgrey;");
        setTimeout(function() {
          console.log("%c2", "color:grey;");
          setTimeout(function() {
            console.log("%c1", "color:black;")



            setTimeout(function(){

                for (var i = 0; i < 20; i++) {
                setTimeout(function() {
                    var symbol = "";
                    for (var s = 0; s < 350; s++) {
                        if (Math.random()*100 < 1) {
                            symbol += "#";
                        } else {
                            symbol += ".";
                        }
                    }
                    console.log(symbol, "");
                }, timer);
                timer += 100;
                counter++;

            }



                setTimeout(function(){

                    for (var i = 0; i < 20; i++) {
                    setTimeout(function() {
                        var symbol = "";
                        for (var s = 0; s < 350; s++) {
                            if (Math.random()*100 < 10) {
                                symbol += "#";
                            } else {
                                symbol += ".";
                            }
                        }
                        console.log(symbol, "");
                    }, timer);
                    timer += 100;
                    counter++;

                }



                    setTimeout(function(){

                        for (var i = 0; i < 20; i++) {
                        setTimeout(function() {
                            var symbol = "";
                            for (var s = 0; s < 350; s++) {
                                if (Math.random()*100 < 20) {
                                    symbol += "#";
                                } else {
                                    symbol += ".";
                                }
                            }
                            console.log(symbol, "");
                        }, timer);
                        timer += 100;
                        counter++;

                    }



                        setTimeout(function(){

                            for (var i = 0; i < 20; i++) {
                            setTimeout(function() {
                                var symbol = "";
                                for (var s = 0; s < 350; s++) {
                                    if (Math.random()*100 < 40) {
                                        symbol += "#";
                                    } else {
                                        symbol += ".";
                                    }
                                }
                                console.log(symbol, "");
                            }, timer);
                            timer += 100;
                            counter++;

                        }




                            setTimeout(function(){

                                for (var i = 0; i < 20; i++) {
                                setTimeout(function() {
                                    var symbol = "";
                                    for (var s = 0; s < 350; s++) {
                                        if (Math.random()*100 < 40) {
                                            symbol += "#";
                                        } else {
                                            symbol += ".";
                                        }
                                    }
                                    console.log(symbol, "");
                                }, timer);
                                timer += 100;
                                counter++;

                            }




                                setTimeout(function(){

                                    for (var i = 0; i < 20; i++) {
                                    setTimeout(function() {
                                        var symbol = "";
                                        for (var s = 0; s < 350; s++) {
                                            if (Math.random()*100 < 80) {
                                                symbol += "#";
                                            } else {
                                                symbol += ".";
                                            }
                                        }
                                        console.log(symbol, "");
                                    }, timer);
                                    timer += 100;
                                    counter++;

                                }




                                    setTimeout(function(){

                                        for (var i = 0; i < 20; i++) {
                                        setTimeout(function() {
                                            var symbol = "";
                                            for (var s = 0; s < 350; s++) {
                                                if (Math.random()*100 < 99) {
                                                    symbol += "#";
                                                } else {
                                                    symbol += ".";
                                                }
                                            }
                                            console.log(symbol, "");
                                        }, timer);
                                        timer += 100;
                                        counter++;

                                    }




                                    }, 10)

                                }, 10)

                            }, 10)

                        }, 10)

                    }, 10)

                }, 10)

            }, 1000)

        }, 1000)

    }, 1000);

}, 1000);