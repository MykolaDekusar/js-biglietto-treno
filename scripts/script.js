'use strict';
// - Creo una variabile e Chiedo tramite prompt all'utente il numero di km da percorrere  (verifico che sia effettivamente un numero e lo converto da stringa)
let userDistance = prompt('Quanti Km vuoi percorrere?');
console.log(userDistance);
userDistance = parseInt(userDistance);
console.log(userDistance);
if (isNaN(userDistance) || userDistance < 0) {
    alert('ERRORE Inserisci una distanza valida');
}
// - Creo una variabile e Chiedo tramite prompt all'utente l'età  (verifico che sia effettivamente un numero e lo converto da stringa)
let userAge = prompt('Quanti anni hai?');
console.log(userAge);
userAge = parseInt(userAge);
console.log(userAge);
if (isNaN(userAge) || userAge < 0) {
    alert('ERRORE Inserisci un età valida');
}

// - Creo una variabile del prezzo € al km
// - Creo una variabile sconto minorenni 20%
// - Creo una variabile sconto over 65 del 40%

// - Verifico se l'utente rientra nella fascia <18 anni, e se rientra allora applico uno sconto del 20% al prezzo del biglietto

// - Verifico se l'utente rientra nella fascia >65 anni, e se rientra allora applico uno sconto del 40% al prezzo del biglietto

// - In tutti i casi creo un output del prezzo del biglietto in forma umana con max 2 cifre decimali 