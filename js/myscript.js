
// chiedi all’utente il cognome
// inseriscilo in un array con altri cognomi: ‘Bianchi’, ‘Neri’, ‘Rossi’, ‘Verdi’, ‘Gialli’
// stampa la lista ordinata alfabeticamente
// scrivi anche la posizione "umana" (partendo da 1) della lista in cui il nuovo utente si trova

// const cognomi = ["Rossi", "Neri", "Blu","Verde","Bianco"];
// var cognomeUtente = prompt("Inserisci il tuo cognome!");
// cognomi.push(cognomeUtente)
// console.log(cognomi.sort())

const cognomi = ["Rossi", "Neri", "Blu","Verde","Bianco"];
var cognomeUtente = prompt("Inserisci il tuo cognome!");

for (let i = 0; i < 6; i++) {
  let listaCognomi = console.log(cognomi [i]);
  cognomi.push(cognomeUtente)

  console.log(cognomi.sort() [i])
}








