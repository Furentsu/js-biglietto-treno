// Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
//  *  Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
//  *  a - il prezzo del biglietto è definito in base ai km (0.21 € al km)
//  *  b - va applicato uno sconto del 20% per i minorenni
//  *  c - va applicato uno sconto del 40% per gli over 65.
    
//  *  L'output del prezzo finale va messo fuori in forma umana 
//  *  (con massimo due decimali, per indicare centesimi sul prezzo).

let age = parseInt(prompt("Digitare l'età del passeggero:"));
let distance = parseInt(prompt("Digitare il numero di chilometri da percorrere:"));

const ticketPrice = distance * 0.21;

let discount;

if (0 < age && age < 18) {
    discount = (ticketPrice * 20) / 100;
}   else if (18 <= age && age < 65) {
    discount = 0;
}   else if (65 <= age && age <= 100) {
    discount = (ticketPrice * 40) / 100;
}   else if (Number.isNaN(age) || Number.isNaN(distance)) {
    alert("Si prega di inserire solo numeri positivi");
}

document.getElementById("ticketPrice").innerHTML = ticketPrice.toFixed(2) + "&euro;";
document.getElementById("discount").innerHTML = discount.toFixed(2) + "&euro;";
document.getElementById("discountedPrice").innerHTML = (ticketPrice - discount).toFixed(2) + "&euro;";