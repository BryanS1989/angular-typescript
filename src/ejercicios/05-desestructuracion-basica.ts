

console.log('Hola Mundo!!!');

/*
    ===== Código de TypeScript =====

    DESESTRUCTURACIÓN DE OBJETOS
*/

interface Reproductor {
    volumen : number;
    segundo : number;
    cancion : string;
    detalles : Detalles;

}

interface Detalles {
    autor : string;
    anyo : number;
}

const reproductor : Reproductor = {
    volumen : 90,
    segundo : 36,
    cancion : "mes",
    detalles : {
        autor : "Ed Sheeran",
        anyo : 2015
    }
}

//const { volumen, segundo, cancion, detalles } = reproductor;
//const { autor } = detalles;

//const { volumen, segundo, cancion, detalles:{ autor } } = reproductor;

// Si tuvieramos otra variable llamada autor:
const autor = 'Otro Autor';

// Tenemos que renombrar nuestra nueva constante autor para poder hacer la desestructuración
// Ahora si indicamos autorDetalle contendrá el valor de la propiedad autor de dentro de detalle:
const { volumen, segundo, cancion, detalles:{ autor : autorDetalle } } = reproductor;

// console.log("El volumen actual es: ", reproductor.volumen);
console.log("El volumen actual es: ", volumen);

//console.log("El segundo actual es: ", reproductor.segundo);
console.log("El segundo actual es: ", segundo);

// console.log("La canción actual es: ", reproductor.cancion);
console.log("La canción actual es: ", cancion);

// console.log("El autor es: ", reproductor.detalles.autor);
// console.log("El autor es: ", detalles.autor);
// console.log("El autor es: ", autor);
console.log("El autor es: ", autorDetalle);


/*
    DESESTRUCTURACIÓN DE ARRAYS
*/
const dbz : string[] = ['Goku', 'Vegeta', 'Trunks'];
// La desestructuración de arrays se basa en las posiciones de los elementos del arreglo
const [ dbzGoku, dbzVegeta, dbzTrunks ] = dbz;
const [ , , soloTrunks ] = dbz;

console.log('Personaje 1 : ', dbzGoku);
console.log('Personaje 2 : ', dbzVegeta);
console.log('Personaje 3a : ', dbzTrunks);
console.log('Personaje 3b : ', soloTrunks);

