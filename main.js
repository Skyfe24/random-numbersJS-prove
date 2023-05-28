console.log('JS OK');
// il numero è sempre tra 0 e 0.99999//
const random = Math.random();
console.log('random number:' + random);

// 1) proviamo con una variabile massima ad esempio 5 MA NON VOGLIAMO ESCA 5//

const max= 5;

// così non supererà mai il 5 /
let result = Math.floor(random * max);
//console.log ('result:' + result);//

//aggiungiamo Math.floor prima della parentesi per ELIMINARE LA PARTE DECIMALE

// 2) proviamo con una variabile massima ad esempio 5 //
 result = Math.floor(random * max)+ 1; //aggiungiamo + 1 così andrà ad escludere 1 unità in più in questo caso 6//
//console.log ('result:' + result);//

// 2) proviamo con una variabile massima ad esempio 5 ma vogliamo partire MINIMO DA 1 //
result = Math.floor(random * max) + 1; //aggiungiamo + 1 così andrà ad escludere 1 unità in più in questo caso 6//
console.log ('result:' + result);