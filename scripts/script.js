'use strict';
//creo una variabile che è il prezzo del biglietto
let ticketPrice = 0;
// - Creo una variabile del prezzo € al km
const kmPrice = 0.21;
// - Creo una variabile sconto minorenni 20%
const discountU18 = 20;
// - Creo una variabile sconto over 65 del 40%
const discountO65 = 40;

// - Creo una variabile e Chiedo tramite prompt all'utente il numero di km da percorrere  (verifico che sia effettivamente un numero e lo converto da stringa)
const userDistance = Number(prompt('Quanti Km vuoi percorrere?'));
console.log(userDistance);
if (isNaN(userDistance) || userDistance <= 0 || userDistance === null) { //Verifico che la distanza inserita sia valida
    alert('ERRORE Inserisci una distanza valida');//Se la distanza non è valida allora esci
} else {
    // - Creo una variabile e Chiedo tramite prompt all'utente l'età  (verifico che sia effettivamente un numero e lo converto da stringa)
    const userAge = Math.floor(Number(prompt('Quanti anni hai?')));//Porto al numero minore se l'utente dovesse inserire un'età con decimali
    console.log(userAge);
    if (isNaN(userAge) || userAge < 0 || userDistance === null) { //Verifico che l'età inserita sia valida
        alert('ERRORE Inserisci un età valida');//Se l'età non è valida esco sennò continuo
    } else {
        // - Verifico se l'utente rientra nella fascia <18 anni, e se rientra allora applico uno sconto del 20% al prezzo del biglietto
        if (userAge < 18) {
            ticketPrice = (userDistance * kmPrice);
            console.log(ticketPrice);
            // - Calcolo il prezzo del biglietto meno lo sconto applicato (in questo caso quello del 20%)
            ticketPrice = Math.round((ticketPrice - (ticketPrice * (discountU18 / 100))) * 100) / 100;
            console.log(ticketPrice);
            alert(`Abbiamo applicato lo sconto del ${discountU18}%. Il prezzo del biglietto è di ${ticketPrice}€`);
            // - Verifico se l'utente rientra nella fascia >65 anni, e se rientra allora applico uno sconto del 40% al prezzo del biglietto
        } else if (userAge > 65) {
            ticketPrice = (userDistance * kmPrice);
            console.log(ticketPrice);
            // - Calcolo il prezzo del biglietto meno lo sconto applicato (in questo caso quello del 40%)
            ticketPrice = Math.round((ticketPrice - (ticketPrice * (discountO65 / 100))) * 100) / 100;
            console.log(ticketPrice);
            alert(`Abbiamo applicato lo sconto del ${discountO65}%. Il prezzo del biglietto è di ${ticketPrice}€`);
            // - Se l'utente non rientra nelle due fasce non applico nessuno sconto 
        } else {
            ticketPrice = (userDistance * kmPrice);
            // - Grazie all' uso di toFixed 2 posso creare l'output fino a 2 cifre decimali in questo caso
            ticketPrice = Math.round(ticketPrice * 100) / 100;
            console.log(ticketPrice);
            alert(`Il prezzo del biglietto è di ${ticketPrice}€`);
        }
    }
}