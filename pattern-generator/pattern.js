var timer = 0;
var counter = 0;

console.log("%cMaking It Rain", "color:green;")

for (var i = 0; i < 1000; i++) {
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
    timer += 70;
    counter++;
}