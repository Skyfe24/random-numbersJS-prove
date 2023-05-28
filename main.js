console.log('JS OK');
// il numero è sempre tra 0 e 0.99999//
const random = Math.random();
console.log('random number:' + random);

// 1) proviamo con una variabile massima ad esempio 5 MA NON VOGLIAMO ESCA 5//

const min= 2;
const max= 7;

// così non supererà mai il 5 /
let result = Math.floor(random * max);
//console.log ('result:' + result);//

//aggiungiamo Math.floor prima della parentesi per ELIMINARE LA PARTE DECIMALE

// 2) proviamo con una variabile massima ad esempio 5 //
 result = Math.floor(random * (max+ 1)); //aggiungiamo + 1 così andrà ad escludere 1 unità in più in questo caso 6//
//console.log ('result:' + result);//

// 3) proviamo con una variabile massima ad esempio 5 ma vogliamo partire MINIMO DA 1 //
result = Math.floor(random * max) + 1; //aggiungiamo + 1 ma dopo così come minimo uscirà sempre 1//
//console.log ('result:' + result);//

// 4) proviamo con una variabile massima ad esempio 5 
//ma vogliamo partire MINIMO DA 1 ed ESCLUDERE IL MASSIMO (5) //

result = Math.floor(random * (max - 1)) + 1; //aggiungiamo + 1 ma fuori così non può uscire - di 1 ma diamo -1 al max così che non possa mai uscire 6//
//console.log ('result:' + result);

// 5) proviamo a generare un numero casuale da MIN a MAX escludendo il MAX

result = Math.floor(random * (max - min)) + min; //col + min ci assicuriamo che il minimo esca, sottraendolo prima al max evitiamo di sforare tanto lo abbiamo già alzato per il minimo//
//console.log ('result:' + result);


// 6) proviamo a generare un numero casuale da MIN a MAX includendo il MAX
result = Math.floor(random * (max + 1 - min)) + min; //col + min ci assicuriamo che il minimo esca, sottraendolo prima al max evitiamo di sforare tanto lo abbiamo già alzato per il minimo, come prima alziamo di 1 per avere il MAX incluso//
console.log ('result:' + result);