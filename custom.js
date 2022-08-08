let boxes = document.querySelectorAll('.color-container > div');
let color;
function randomColor() {
    for (let i = 0; i < boxes.length; i++) {
        color = '#' + Math.random().toString(16).substr(-6);
        boxes[i].style.backgroundColor = color;
        boxes[i].textContent = color;
    }
};

let userForm = document.getElementById("newUser");
let userTable = document.getElementById("table");

let nameInput = document.getElementById("name");
let surnameInout = document.getElementById("surname");
let birthInput = document.getElementById("birthOfYear");

let userCounter = 1;

userForm.addEventListener("submit", function (e) {
  userTable.style.display = "block";
  e.preventDefault();

  let name = nameInput.value;
  let surname = surnameInout.value;
  let birthOfYear = birthInput.value;

  let row = table.insertRow();

  let couterCell = row.insertCell();
  couterCell.textContent = userCounter;

  let nameCell = row.insertCell();
  nameCell.textContent = name;

  let surnameCell = row.insertCell();
  surnameCell.textContent = surname;

  let ageCell = row.insertCell();
  ageCell.textContent = new Date().getFullYear() - parseInt(birthOfYear);

  userCounter++;
});


$(document).ready(function () {
    $("#menu-button").click(function () {
        $(this).toggleClass("active");
        $("#line-1").toggleClass("active");
        $("#line-2").toggleClass("active");
        $("#line-3").toggleClass("active");
        $("#menu").slideToggle("slow");
    });

    $("#popup1").click(function () {
        $("#popup2").fadeToggle(1000);
    })

    $("#box-height").click(function () {
        let box = $("#spacebox");
        box.animate({
            height: '100%',
            opacity: '1',
        });

    });

    $("#box-width").click(function () {
        let box = $("#spacebox");
        box.animate({
            width: '100%',
            opacity: '1'
        }, 500);
    });

    $("#box-center").click(function () {
        let box = $("#spacebox");
        box.animate({
            left: '45%',
            bottom: '35%'

        }, 500);
    });

    $("#box-position").click(function () {
        let box = $("#spacebox");
        box.animate({
            left: '100',
            bottom: '100'
        }, 500);
    });


    $("#box-empty").click(function () {
        let box = $("#spacebox");
        box.animate({
            left: '0',
            top: '0',
            height: '100',
            width: '100',
            opacity: '1'
        }, 1000)
    });

    $("#clean").click(function () {
        $("#Form").empty();
      });
      
      $("#clean").click(function () {
        $("#name").val("");
        $("#surname").val("");
        $("#birthOfYear").val("");
      });
})
