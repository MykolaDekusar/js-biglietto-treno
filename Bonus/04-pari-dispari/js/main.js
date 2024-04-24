'use strict';
let totNumber = 0;
let userNumber = 0;
const pcNumber = Math.ceil(Math.random() * 9);//genero numero casuale compreso tra 1 e 9
const pari = "pari";
const dispari = "dispari"
console.log(pcNumber);
// chiedere all'utente se vuole pari o dispari
const userChoice = prompt("Inserisci : pari o dispari?");
if ((userChoice === pari) || (userChoice === dispari)) {  //verifico che l'utente abbia inserito il valore valido
    console.log(userChoice);
    userNumber = prompt("Inserisci un numero compreso tra 1 e 9");
    userNumber = Math.round(Number(userNumber));//trasformo la stringa inserita dall'utente in un numero intero
    if (!(userNumber <= 1) && !(userNumber >= 9) && !(isNaN(userNumber))) {  //verifico che l'utente abbia inserito un numero valido
        console.log(userNumber);
        alert(`Hai scelto ${userChoice} e il numero ${userNumber}, il computer ha giocato ${pcNumber}`);//faccio vedere all'utente cos'ha giocato il computer
        totNumber = userNumber + pcNumber;
        if (totNumber % 2 === 0 && userChoice === pari) {
            alert("Congratulazioni hai vinto!!!");
        } else if (totNumber % 2 !== 0 && userChoice === dispari) {
            alert("Congratulazioni hai vinto!!!");
        } else {
            alert("Mi dispiace ma hai perso!!!");
        }
    } else {
        console.log(userNumber);
        alert("Inserisci un numero valido");
    }
} else {
    console.log(userChoice);
    alert("Errore: Inserisci Pari o Dispari");
}
