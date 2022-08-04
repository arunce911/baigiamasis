console.log("testas");

let name, age;

let price = 40; //skaicius,duomenu tipas
let title = "0"; // tekstas/string
let basket = []; // masyvas

name ="Jonas";

const colors = ['red'];

colors.push('blue');
console.log(colors);


console.log(price);
if(price===0) {
    price +=20;
} else if(price<30){
    console.log("ok");
} else {
    document.write("<h1>Pabaiga</h1>")
}


// kai zinom kiek ratu kartosis ciklas
for(let i=0; i<5; i++) {
    console.log(i);
}

// let i=0;
// naudojam kai nezinom kiek ciklu reiks prasukti
// while(i<7){
    // kodas
// }

console.log(price);

console.log(title+15);


function printName(name){
    let lastName="pavardenis"
    return document.write(name);
}

printName(name);

document.write(lastName);

function sum(a, b){
    return a+b;
}