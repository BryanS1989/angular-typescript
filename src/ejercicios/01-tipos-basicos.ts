

console.log('Hola Mundo!!!');

/*
    ===== Código de TypeScript =====
*/
const NOMBRE = 'Bryan';

let nombre : string = 'Bryan';
let hp : number | string = 95;  // We can set different types
let estaVivo : boolean = true;  



nombre = 'Bryan Steven';
// nombre = 123; <-- TS2322: Type '123' is not assignable to type 'string'.

// hp = 'FULL'; <-- TS2322: Type '"FULL"' is not assignable to type 'number'. (if hp is number only)
hp = 'FULL';

console.log(nombre, hp);