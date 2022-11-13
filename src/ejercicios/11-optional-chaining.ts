

console.log('Hola Mundo!!!');

/*
    ===== Código de TypeScript =====

    ENCADENAMIENTO OPCIONAL
    =======================
*/

interface Pasajero {
    nombre : string;
    hijos? : string[];      // Indicamos que la propiedad es opcional con ?
}

const pasajero1 : Pasajero = {
    nombre : 'Fernando'
}

const pasajero2 : Pasajero = {
    nombre : 'Melissa',
    hijos : [
        'Natalia',
        'Gabriel'
    ]
}

function imprimeHijos ( pasajero : Pasajero ) : void {
    const cuantosHijos = pasajero.hijos?.length || 0;    // El ? indica que intente evaluar si pasajeros tiene la propiedad hijos

    console.log( cuantosHijos );
}

imprimeHijos( pasajero2 );  // Esto imprime 2 ya que tiene 2 hijos
imprimeHijos( pasajero1 );  // Uncaught TypeError: Cannot read properties of undefined (reading 'length'), al corregirlo con ? se imprime ahora undefined