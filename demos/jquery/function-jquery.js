$("body").css("background-color", "blue")
$("h1").html("welcome to jquery ! ")
$("body").css("color", "red")

// $("body").css("opacity", 0);
// $("body").hide();

// $("h1").append("hello world")

// $("p").addClass("special")



// var clicks = 0;

// $("h1").click(function(){
    
//    clicks++
//    console.log("clicked " + clicks + " times !");
   
//    if (clicks > 5) {
       
//        console.log("clicked over 5 times")
       
//    } else {
       
//        console.log("clicked less than 5 times")
       
//    }
    
// });



// $("h1").click(function(){
   
//    if($("p").hasClass("special")){
      
//       $("p").removeClass("special")

//    } else {
      
//       $("p").addClass("special")
      
//    }
   
// });



// $("h1").mousemove(function(){
   
//    $("h1").toggleClass("special")
   
// });



// $("h1").mouseenter(function(){
   
//    $("h1").toggleClass("special")
   
// });

// $("h1").mouseleave(function(){
   
//    $("h1").toggleClass("special")
   
// });


$("h1").hover(function(){
   
   $("h1").toggleClass("special")
   
});
