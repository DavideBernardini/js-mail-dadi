// dado
var dado = Math.floor(Math.random() * 6) + 1;
// scelta pc
var pcchoiche = 3;
// scelta utente
var userchoice = prompt("Scegli un numero da uno a 6")
// risultato 
if (pcchoiche == dado) {
    alert("Il computer ha vinto.")
} else if (userchoice == dado) {
    alert("Hai vinto!")
} else if (userchoice == dado && pcchoice == dado){
   alert("Pareggio.")
} else {
    alert("Nessuno ha vinto.")
}