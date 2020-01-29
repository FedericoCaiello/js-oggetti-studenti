// Creare un oggetto che descriva uno studente con le seguenti proprietà: nome, cognome e età. Stampare a schermo attraverso il for in tutte le proprietà.
// var utente = {
//   'nome': 'Federico',
//   'cognome': 'Caiello',
//   'eta\'': 25,
// };
// for (var caratteristiche in utente) {
//   console.log(utente[caratteristiche]);
// }
// Creare un array di oggetti di studenti. Ciclare su tutti gli studenti e stampare per ognuno nome e cognome
// var studenti = [
// {
//   'nome': 'Federico',
//   'cognome': 'Caiello',
//   'cose': 'macchina'
// },
// {
//   'nome': 'Marco',
//   'cognome': 'Stefanini',
//   'cose': 'macchina'
// },
// {
//   'nome': 'Lorenzo',
//   'cognome': 'Petrollini',
//   'cose': 'chiavi'
// }
// ];
// console.log(studenti);
//
// for (var i=0; i < studenti.length; i++){
//   console.log(studenti[i].nome + studenti[i].cognome);
// }
// Dare la possibilità all’utente attraverso 3 prompt di aggiungere un nuovo oggetto studente inserendo nell’ordine: nome, cognome e età.
var array = [{
  'nome': 'Federico',
  'cognome': 'Caiello',
  'eta\'': 25
},{
  'nome': prompt('inserisci il tuo nome'),
  'cognome': prompt('inserisci il tuo cognome'),
  'eta': parseInt(prompt('inserisci la tua eta'))
}];
for (var chiave in array) {
  console.log(chiave, array[chiave]);
  for (var i=0; i<array[chiave].length; i++) {
    console.log('posizione' + i + ' ' + array[chiave][i]);
  }
}
