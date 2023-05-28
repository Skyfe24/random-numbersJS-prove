console.log('JS OK');
// il numero è sempre tra 0 e 0.99999//
const random = 0.999999;
console.log('random number:' + random);

//proviamo con una variabile massima ad esempio 5//

const max= 5;

// così non supererà mai il 5 /
let result = Math.floor(random * max);
console.log ('result:' result);

//aggiungiamo Math.floor prima della parentesi per ELIMINARE LA PARTE DECIMALE