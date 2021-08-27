
let cognomeUtente = prompt("Quale è il tuo cognome?");
let listaCognomi = ["Rossi", "Bianchi", "Neri", "Gialli"];

listaCognomi.push(cognomeUtente);

for (let i = 0; i < listaCognomi.length; i++){
    if (listaCognomi[i].charAt(0).toUpperCase() != listaCognomi[i].charAt(0) )
    listaCognomi[i] = listaCognomi[i].charAt(0).toUpperCase() + listaCognomi[i].slice(1);
}

if (cognomeUtente.charAt(0).toUpperCase() != cognomeUtente.charAt(0) ){
    cognomeUtente = cognomeUtente.charAt(0).toUpperCase( + cognomeUtente.slice(1))
}

let listaCognomiOrdinata = listaCognomi.sort();

console.log("Ecco la lista ordinata:" + listaCognomi)
for (let j = 0; j < listaCognomiOrdinata; j++){
    console.log(nuovaListaCognomi[j]);
}


let posizioneCognome = listaCognomiOrdinata.indexOf(cognomeUtente) + 1;
console.log("Il cognome inserito  è in posizione " + posizioneCognome + ".")









