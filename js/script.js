// Creare un oggetto che descriva uno studente con le seguenti proprietà: nome, cognome e età. Stampare a schermo attraverso il for in tutte le proprietà.
var utente = {
  'nome': 'federico',
  'cognome': 'caiello',
  'eta\'': 25,
};
for (var caratteristiche in utente) {
  console.log(utente[caratteristiche]);
}


// Creare un array di oggetti di studenti. Ciclare su tutti gli studenti e stampare per ognuno nome e cognome
// Dare la possibilità all’utente attraverso 3 prompt di aggiungere un nuovo oggetto studente inserendo nell’ordine: nome, cognome e età.
