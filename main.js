console.log('JS OK');
// il numero è sempre tra 0 e 0.99999//
const random = Math.random();
console.log(random);

//proviamo con una variabile massima ad esempio 5//

const max= 5;

// così non supererà mai il 5 /
let result = Math.floor(random * max);
console.log (result);

//aggiungiamo Math.floor per ELIMINARE LA PARTE DECIMALE