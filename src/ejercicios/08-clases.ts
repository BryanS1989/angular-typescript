

console.log('Hola Mundo!!!');

/*
    ===== Código de TypeScript =====

    CLASES BÁSICAS
    ==============
*/

// En las clases, a diferencia de las interfaces, sí podemos implementar las funciones,
//  en la interface solo podríamos indicar qué tipo retornará la función
class HeroeOld {
    // Si no se indica el tipo de acceso de los atributos de la clase estas serán por defecto públicas
    public alterEgo : string;       // private  ->  La propiedad solo es visible dentro de la clase
    public edad : number;           // public   ->  La propiedad es visible desde fuera de la clase
    public nombreReal : string;     // private  ->  Se puede acceder a la propiedad sin crear una instancia de la clase

    // El constructor se llamará cuando se cree una instancia de la clase
    constructor ( alterEgo : string, edad : number ) {
        console.log("Constructor de la clase HeroeOld");

        this.alterEgo = alterEgo;
        this.edad = edad;
    }
}

class PersonaNormal {
    // nombre : string; 
    // direccion : string;

    constructor (
        public nombre : string,
        public direccion : string
    ) {
        console.log( 'Constructor de la clase PersonaNormal' );
    }
}

// Si queremos evitar tener que setear todas las propiedades de la clase deberíamos de 
// añadir las propiedades en el constructor, indicando su tipo de alcance
class Heroe extends PersonaNormal{
    // El constructor se llamará cuando se cree una instancia de la clase
    constructor ( 
        public alterEgo : string, 
        public edad : number, 
        public nombreReal : string 
        // public nombreReal? : string      // Con el ? indicamos que esta propiedad es opcional
    ) {
        super( nombreReal, 'New York, USA' );    // Indicamos super() para llamar al constructor de la clase extendida (PersonaNormal)
        console.log("Constructor de la clase Heroe");
    }
}

const ironman = new Heroe( 'Iron Man', 45, "Tony Stark" ) ;

console.log(ironman);
