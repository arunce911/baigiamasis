







$(document).ready(function(){
    $("#menu-button").click(function(){
        $(this).toggleClass("active");
        $("#line-1").toggleClass("active");
        $("#line-2").toggleClass("active");
        $("#line-3").toggleClass("active");
        $("#menu").slideToggle("slow");
      });

    $("#popup1").dblclick(function(){
        $("#popup2").fadeToggle(1000);
     })
    
     $("#box1").click(function(){
        let box = $("#spacebox");
        box.animate({
            height:'100%',
        },500,)})
        
        $("#box2").click(function(){
            let box = $("#spacebox");
            box.animate({
                width:'100%',
            },500,)

    })




})