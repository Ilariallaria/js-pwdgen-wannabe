// Chiedi all’utente il suo nome,
// poi chiedi il suo cognome,
// poi chiedi il suo colore preferito
// Infine scrivi sulla pagina nomecognomecolorepreferito21


const userName = prompt("Inserisci il tuo nome");
console.log(userName);

const userLastName = prompt("Inserisci il tuo Cognome");
// console.log(userLastName);

const userColor = prompt("Inserisci il tuo colore prefertito");
// console.log(userColor);

const userPassword = userName + userLastName + userColor + 21;

const userMessage = 'La tua Password è: ' + userPassword ;
// console.log(userMessage)

document.getElementById('result').innerHTML = userMessage;

