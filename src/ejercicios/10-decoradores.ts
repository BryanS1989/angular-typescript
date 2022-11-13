

console.log('Hola Mundo!!!');

/*
    ===== Código de TypeScript =====

    DECORADORES
    ===========
    https://www.typescriptlang.org/docs/handbook/decorators.html#class-decorators
*/

function classDecorator <T extends { new (...args: any[]): {}}> (
    constructor : T
) {
    return class extends constructor {
        newProperty = "new property";
        hello = "override";
    }
}

// Al usar el decorador nos salta el siguiente error:
//      "TS1219: Experimental support for decorators is a feature that is subject to 
//          change in a future release. Set the 'experimentalDecorators' option in your 
//          'tsconfig' or 'jsconfig' to remove this warning."
@classDecorator
class MiSuperClase {
    public miPropiedad : string = 'ABC123';

    imprimir () {
        console.log( "Hola Mundo" );
    }
}


console.log( MiSuperClase );

// Esto nos imprime:
// class extends constructor {
//     constructor() {
//         super(...arguments);
//         this.newProperty = "new property";
//         this.hello = "override";
//     }
// }

const miClase = new MiSuperClase();

console.log( miClase.miPropiedad );
// Esto nos imprime
// ABC123