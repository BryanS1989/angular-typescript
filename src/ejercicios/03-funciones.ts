

console.log('Hola Mundo!!!');

/*
    ===== Código de TypeScript =====
*/

// JS funtion
// function sumar (a, b) {
// Typescript
function sumar (a : number, b : number) : number{
    //return (a + b).toString();
    //return (a + b).toString();  // if we declare return type as number --> TS2322: Type 'string' is not assignable to type 'number'.
    return a + b;
};

// const sumarFlecha = (a, b) => { // const sumarFlecha: (a: any, b: any) => any
//const sumarFlecha = (a : number, b : number ) => {  //  const sumarFlecha: (a: number, b: number) => number
const sumarFlecha = (a : number, b : number ) : number => {  //  const sumarFlecha: (a: number, b: number) => number
    return a + b;
};

// function multiplicar (numero, otroNumero, base) {
// function multiplicar (numero : number, otroNumero? : number, base : number) {   // A required parameter cannot follow an optional parameter.ts(1016)
function multiplicar (numero : number, otroNumero? : number, base : number = 2) {   // A required parameter cannot follow an optional parameter.ts(1016)
    return numero * base;
}

// (JS) const resultado = sumar('Bryan');   // TS2554: Expected 2 arguments, but got 1.
// (JS) const resultado = sumar('Bryan', 'Steven'); // It is not an add op, it is a concat

// (TS) const resultado = sumar('Bryan', 'Steven'); // TS2345: Argument of type '"Bryan"' is not assignable to parameter of type 'number'.
// (TS) const resultado = sumar(10, 'Steven');  // TS2345: Argument of type '"Steven"' is not assignable to parameter of type 'number'.
// const resultado = sumar(10, 20);    // function sumar(a: number, b: number): number
//const resultado = sumar(10, 20);    // Return '30' with: return (a + b).toString();

// const resultado = multiplicar(10, 20);  // function multiplicar(numero: any, otroNumero: any, base: any): number --> TS2554: Expected 3 arguments, but got 2.
// const resultado = multiplicar(5, 10);   // 10 will be param base result will be : 10
// const resultado = multiplicar(5);   //  Result will be 10 because base is 2
// const resultado = multiplicar(5, 0, 10);    // Result : 50

// console.log(resultado); // resultado : BryanSteven

interface PersonajeLOR {
    nombre : string;
    pv : number;
    mostrarHp: () => void;
}

function curar( personaje : PersonajeLOR, curarX : number) : void {
    //personaje.hp += curarX; // Property 'hp' does not exist on type 'PersonajeLOR'.ts(2339)
    personaje.pv += curarX;

    //console.log( personaje );
}

const nuevoPersonaje : PersonajeLOR = {
    nombre : 'Strider',
    pv : 50,
    mostrarHp () {
        console.log( 'Puntos de vida: ', this.pv );
    }
}

curar( nuevoPersonaje, 20 );

nuevoPersonaje.mostrarHp();