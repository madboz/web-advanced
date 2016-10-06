$("body").css("background-color","#C6E2FF");

for (var i = 0; i < 16; i++) {
    $("body").append("<div class='snowflake'></div>");
}

$(".snowflake").each(function(){
    var crystalcount = Math.floor(Math.random()*14) + 6;
    for(var c = 0; c < crystalcount; c++) {
        $(this).append("<div class='crystal'></div>");
    }
    $(this).css("top",Math.floor(Math.random()*1000)+"px");
    $(this).css("left",Math.floor(Math.random()*1000)+"px");
});

$(window).resize(function() {
    $(".snowflake").each(function(){
        $(this).css("top",Math.floor(Math.random()*1000)+"px");
        $(this).css("left",Math.floor(Math.random()*1000)+"px");
    });
});


$(".snowflake").each(function() {
    var rotation = 0;
    var crystallength = $(this).find(".crystal").length;
    $(this).find(".crystal").each(function() {
        var newrotation = "rotate(" + rotation + "deg)";
        $(this).css("transform", newrotation);
        rotation += 180/crystallength;
    })
});


for (var i = 0; i < 1000; i++) {
    $("body").append("<div class='box'></div>");
}

var opacity = 0;

$(".box").each(function() {
    opacity += .001;
    $(this).css("opacity",opacity);
    console.log("found box " + opacity);
});


// $("window").resize(function(){
    
//   $(".snowflake").each(function(){
    
//     var rotation = 0;
//     var crystallength = $(this).find(".crystal").length;
//     $(this).find(".crystal").each(function(){
        
//         var newrotation = "rotate(" + rotation +"deg)";
//         $(this).css("transform", newrotation);
//         rotation += 180/crystallength; 
        
//     })
    
    
// });



// $(".box").slice(200).each(function(){
    
//   opacity += .001
//   $(this).css("opacity", opacity)
//   console.log("found box" + opacity);
    
// });