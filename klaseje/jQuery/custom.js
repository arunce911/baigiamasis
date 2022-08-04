console.log("test");

// $("body").text("test");
$("#text").text("paragrafas");
$(".heading").text("Heading");

// jQuery eventai


// mouse event

$(".heading").click(function(){
    $(this).hide(3000, function(){
        alert("heading is hidden!")
    });
})

$(".heading").hover(function(){
    $("#text").toggle();
})

// $("#box1").dblclick(function(){
//     $("#box2").fadeToggle(1000);
// })

$("#box1").click(function(){
    $("#box2").slideToggle(1000)
})



$("#animate").click(function(){
    let box = $("#box1");
    box.animate({
        left:'250px',
        opacity:'0.5',
        height:'300px',
        width:'100%',
    },500,),
    box.animate({
        right:'250px',
        opacity:'1',
        height:'150px',
        width:'150px',
    },1000,),
    box.animate({
        width: 'toggle',
    })
})

$("#stop").click(function(){
    $("#box1").stop();
})

$("#changeHeading").click(function(){
    $("#heading1").text("kmtp");
})

$("#addToList").click(function(){
    $("#list").html("<li>vienas</li>");
})

$("#getValue").click(function(){
    let title = $("#title").val();
    $("#heading1").text(title);
})

$("#addToEnd").click(function(){
    $("#heading1").append("end")
})

$("#addBefore").click(function(){
    $("#heading1").before("<h1>naujas</h1>")
})

$("#delete").click(function(){
    $('#list').remove();
})

$("#empty").click(function(){
    $('#list').empty();
})

$("#box1").hover(function(){
    $("#box2").addClass("border");
})

$("#box2").click(function(){
    let width = $(this).css("width");
    alert(width);
    $(this).css("background-color", "#ffffff");
})

$("#heading1").on("click", function(){
    $(this).css("color","red");
})

$(document).ready(function(){
    // rasant jquery mesti i sia funkcija jei darysim atskirai su js.kad maziau maisytusi
})