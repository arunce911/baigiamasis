console.log("test");

function changeHeading(a) {
    document.getElementsByTagName("h1")[a].innerHTML = "Naujas Pavadinimas";
}


// 
function changeSectionColor() {
    document.getElementById("section").style.backgroundColor = "blue";
}

function fillList(item) {
    let listItemText = document.createTextNode(item);
    let childItem = document.createElement("li");
    childItem.appendChild(listItemText);
    document.getElementsByTagName("ul")[0].appendChild(childItem);
}

function list() {
    document.getElementById("list1").innerHTML = <li>pirmas</li>;
}

function addToCart() {
    let item = document.getElementById("input1").value;
    let listItemText = document.createTextNode(item);
    let childItem = document.createElement("li");
    childItem.appendChild(listItemText);
    document.getElementById("cart").appendChild(childItem);
}


function squareRoot() {
    let number = document.getElementById("number").value;

    if (Number(number) > 0) {
        result = Math.sqrt(Number(number));
    }
    else if (Number(number) < 0) {
        result = "Klaida,skaicius neigiamas";
    }
    else {
        result = 0;
    }
    document.getElementById("result").innerHTML = result;
}