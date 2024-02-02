/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per visualizzare l'output, lancia il file HTML a cui è collegato e apri la console dagli strumenti di sviluppo del browser. 
- Utilizza dei console.log() per testare le tue variabili e/o i risultati delle espressioni che stai creando.
*/


/* ESERCIZIO 1
    Dato il seguente array, scrivi del codice per stampare ogni elemento dell'array in console.
*/
const pets = ['dog', 'cat', 'hamster', 'redfish'];

function stampare(x) {
  for (i = 0; i < x.length; i++) {
    console.log(x[i]);
  }
}

stampare(pets);
console.log('**** ESERCIZO 2*****')

/* ESERCIZIO 2
    Scrivi del codice per ordinare alfabeticamente gli elementi dell'array "pets".
*/

function ordinare(y) {
  y.sort();
  console.log(y);
}

ordinare(pets);
console.log('**** ESERCIZO 3*****')

/* ESERCIZIO 3
    Scrivi del codice per stampare nuovamente in console gli elementi dell'array "pets", questa volta in ordine invertito.
*/

function invertire(z) {
  z.reverse();
  console.log(z);
}

invertire(pets);

console.log('**** ESERCIZO 4*****')
/* ESERCIZIO 4
    Scrivi del codice per spostare il primo elemento dall'array "pets" in ultima posizione.
*/

function sposta(m) {
  var primoElemento = m.shift();
  m.push(primoElemento)
  console.log(m);
}

sposta(pets);

console.log('**** ESERCIZO 5*****')

/* ESERCIZIO 5
    Dato il seguente array di oggetti, scrivi del codice per aggiungere ad ognuno di essi una proprietà "licensePlate" con valore a tua scelta.
*/
const cars = [
  {
    brand: 'Ford',
    model: 'Fiesta',
    color: 'red',
    trims: ['titanium', 'st', 'active'],
  },
  {
    brand: 'Peugeot',
    model: '208',
    color: 'blue',
    trims: ['allure', 'GT'],
  },
  {
    brand: 'Volkswagen',
    model: 'Polo',
    color: 'black',
    trims: ['life', 'style', 'r-line'],
  },
]

function aggiungi(n) {

  for (let i = 0; i < n.length; i++) {
    n[i].licenseplate = 'EX400WK';
  }
}

aggiungi(cars);
console.log(cars);
console.log('**** ESERCIZO 6*****');

/* ESERCIZIO 6
    Scrivi del codice per aggiungere un nuovo oggetto in ultima posizione nell'array "cars", rispettando la struttura degli altri elementi.
    Successivamente, rimuovi l'ultimo elemento della proprietà "trims" da ogni auto.
*/
const nuovoOggetto = {
  brand: 'Audi',
  model: 'serie 4',
  color: 'black',
  trims: ['titanium', 'active'],
};
function nuovaMacchina(q) {
  cars.push(nuovoOggetto);
  // Rimuovi l'ultimo elemento dalla proprietà "trims" di ogni auto
  for (let i = 0; i < cars.length; i++) {
    if (q[i].trims.length > 0) {
      q[i].trims.pop();
    }
  }
}
nuovaMacchina(cars);
console.log(cars);
console.log('**** ESERCIZO 7*****');

/* ESERCIZIO 7
    Scrivi del codice per salvare il primo elemento della proprietà "trims" di ogni auto nel nuovo array "justTrims", sotto definito.
*/
const justTrims = []

function estraiPrimiTrims(autos) {
  const justTrims = autos.map(car => car.trims[0]).filter(Boolean);
  console.log(justTrims);
}

estraiPrimiTrims(cars);
console.log('**** ESERCIZO 8*****');


/* ESERCIZIO 8
    Cicla l'array "cars" e costruisci un if/else statament per mostrare due diversi messaggi in console. Se la prima lettera della proprietà
    "color" ha valore "b", mostra in console "Fizz". Altrimenti, mostra in console "Buzz".
*/

function valutaPrimaLetteraColore(auto) {
  for (let i = 0; i < auto.length; i++) {
    const colorAuto = auto[i].color;
    if (colorAuto.charAt(0).toLowerCase() === 'b') {
      console.log("Fizz");
    } else {
      console.log("Buzz");
    }
  }
}

valutaPrimaLetteraColore(cars);

console.log('**** ESERCIZO 9*****');

/* ESERCIZIO 9
    Utilizza un ciclo while per stampare in console i valori del seguente array numerico fino al raggiungimento del numero 32.
*/
const numericArray = [
  6, 90, 45, 75, 84, 98, 35, 74, 31, 2, 8, 23, 100, 32, 66, 313, 321, 105,
]

function arriva32(a) {
  while(i < a.length && a[i] !== 32) {
    console.log(a[i]);
    i++
  }
}

arriva32(numericArray);
console.log('**** ESERCIZO 10*****');

/* ESERCIZIO 10
    Partendo dall'array fornito e utilizzando un costrutto switch, genera un nuovo array composto dalle posizioni di ogni carattere all'interno
    dell'alfabeto italiano.
    es. [f, b, e] --> [6, 2, 5]
*/
const charactersArray = ['g', 'n', 'u', 'z', 'd'];

const alfabeto = 'abcdefghijklmnopqrstuvwxyz';

function trovaIndice(arrayDiCaratteri) {
  const posizioneArray = arrayDiCaratteri.map(function(char) {
    const index = alfabeto.indexOf(char) + 1;

    switch(index) {
      case 0:
      return 0;
      default: 
      return index;
    }
  });

  console.log(posizioneArray);
}

trovaIndice(charactersArray);
