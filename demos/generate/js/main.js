$("body").css("background-color","#C6E2FF");

for (var e = 0; e < 1000; e++){
    
    $("body").append("<div class='box'></div>");
    
}

for (var i = 0; i < 10; i++){
    
    $("body").append("<div class='snowflake'></div>");
    
}

$(".snowflake").each(function(){
    
    var crystalcount = Math.floor(Math.random()*34) + 6;
    for(var c = 0; c < crystalcount; c++){
        
        $(this).append("<div class='crystal'></div>");
        
    }
    
    $(this).css("top",Math.floor(Math.random()*1000)+"px");
    $(this).css("left",Math.floor(Math.random()*1000)+"px");
    
});

var opacity = 0;

$(".box").each(function(){
    
  opacity += .001
  $(this).css("opacity", opacity)
  console.log("found box" + opacity);
    
});


$(".snowflake").each(function(){
    
    var rotation = 0;
    var crystallength = $(this).find(".crystal").length;
    $(this).find(".crystal").each(function(){
        
        var newrotation = "rotate(" + rotation +"deg)";
        $(this).css("transform", newrotation);
        rotation += 180/crystallength; 
        
    })
    
    
});

$("window").resize(function(){
    
   $(".snowflake").each(function(){
    
    var rotation = 0;
    var crystallength = $(this).find(".crystal").length;
    $(this).find(".crystal").each(function(){
        
        var newrotation = "rotate(" + rotation +"deg)";
        $(this).css("transform", newrotation);
        rotation += 180/crystallength; 
        
    })
    
    
});



// $(".box").slice(200).each(function(){
    
//   opacity += .001
//   $(this).css("opacity", opacity)
//   console.log("found box" + opacity);
    
// });