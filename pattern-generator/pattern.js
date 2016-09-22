var timer = 4000;
var counter = 0;

setTimeout(function(){
    console.log("%cmake", "color:green;");
}, 1000);

setTimeout(function(){
    console.log("%cit", "color:green;");
}, 2000);

setTimeout(function(){
    console.log("%crain", "color:green;");
}, 3000);

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