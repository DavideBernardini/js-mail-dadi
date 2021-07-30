// Chiedere all'utente l'email
var useremail = prompt("Inserisci la tua email");
// Email consentite
var consentedemails = ["mariorossi@yahoo.com", "luigiverdi@libero.it", "paolobianchi1990@gmail.com", "aldoneri78@yandex.com"]
// Controllare che la mail inserita sia consentita
var access = "Accesso negato"
for ( var i = 0; i < consentedemails.length; i++ ) {
    if ( consentedemails[i] == useremail ) {
        access = "Accesso consentito"
    }
}
document.getElementById("access_message").innerHTML = access;