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
const pets = ['dog', 'cat', 'hamster', 'redfish']
/*soluzione*/


for (let i = 0; i < pets.length; i++) {
  console.log (pets[i]);

}


/* ESERCIZIO 2
    Scrivi del codice per ordinare alfabeticamente gli elementi dell'array "pets".

*/

/* soluzione*/

pets.sort();

console.log(pets);




/* ESERCIZIO 3
    Scrivi del codice per stampare nuovamente in console gli elementi dell'array "pets", questa volta in ordine invertito.
*/
/*soluzione******************************************************/

/*pets.reverse();
console.log(pets);*/

/* ESERCIZIO 4
    Scrivi del codice per spostare il primo elemento dall'array "pets" in ultima posizione.
*/
/*soluzione*********************************************/

/*per togliere il primo elemento 
const primoPet = pets.shift();

/ per aggiungere il primo elemento alla fine del array
pets.push(primoPet); 

console.log(pets);  */



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
//soluzione *****************************************************************************
function generatargacasuale() {
  return Math.random().toString(36).toUpperCase();
}

for (let i = 0; i < cars.length; i++) {
  cars[i].targa = generatargacasuale();
}

console.log(cars); //stampa targhe , ma con numeri e lettere sbagliate da rivedere!!!!!!!!!!!!!!!!!



/* ESERCIZIO 6
    Scrivi del codice per aggiungere un nuovo oggetto in ultima posizione nell'array "cars", rispettando la struttura degli altri elementi.
    Successivamente, rimuovi l'ultimo elemento della proprietà "trims" da ogni auto.
*/

//soluzione***********************************************************************************

const nuovooggetto = {
  brand: 'tesla',
  model: 'cybertruck',
  color: 'grigio',
  trims: ['wer', 'qwer', 'df'],
};

//aggiungo in ultima posizione
cars.push(nuovooggetto);

//ora nell'array "cars" itero
for (let i = 0; i < cars.length; i++) {
  
  const car = cars[i];

  if (car.trims && car.trims.length > 0) {
    // Rimuovo ultimo elemento dalla proprietà "trims"
    car.trims.pop();
  }
}

console.log(cars);

/* ESERCIZIO 7
    Scrivi del codice per salvare il primo elemento della proprietà "trims" di ogni auto nel nuovo array "justTrims", sotto definito.
*/

//soluzione******************************************************************************
const justTrims = []

for (let car of cars) {
  if (car.trims && car.trims.length > 0) {
    justTrims.push(car.trims[0]); // metto il primo elemento di "trims" a "justTrims"
  }
}

console.log(justTrims);







/* ESERCIZIO 8
    Cicla l'array "cars" e costruisci un if/else statament per mostrare due diversi messaggi in console. Se la prima lettera della proprietà
    "color" ha valore "b", mostra in console "Fizz". Altrimenti, mostra in console "Buzz".
*/

/* soluzione_____________________________*/

for (let i = 0; i < cars.length; i++) {
  const car = cars[i];
  if (car.color.charAt(0).toLowerCase() === 'b') {
    console.log('Fizz'); 
  } else {
    console.log('Buzz'); 
  }
}

/* ESERCIZIO 9
    Utilizza un ciclo while per stampare in console i valori del seguente array numerico fino al raggiungimento del numero 32.
*/
const numericArray = [
  6, 90, 45, 75, 84, 98, 35, 74, 31, 2, 8, 23, 100, 32, 66, 313, 321, 105,
]

/* ESERCIZIO 10
    Partendo dall'array fornito e utilizzando un costrutto switch, genera un nuovo array composto dalle posizioni di ogni carattere all'interno
    dell'alfabeto italiano.
    es. [f, b, e] --> [6, 2, 5]
*/
const charactersArray = ['g', 'n', 'u', 'z', 'd']
