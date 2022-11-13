

console.log('Hola Mundo!!!');

/*
    ===== Código de TypeScript =====

    GENÉRICOS
    =========
*/

// Con <T> indicamos que la función puede recibir un argumento de tipo genérico
function queTipoSoy <T> ( argumento : T ) {
    return argumento;
}

let soyString = queTipoSoy( "Hola Mundo" );
let soyNumero = queTipoSoy( 100 );
let soyArreglo = queTipoSoy( [1, 2, 3] );

// Podemos indicarle (p.e. <string> o <number>) el tipo a la función con tipo generico (<T>)
let soyExplicitoString = queTipoSoy<string>( "Hola Mundo" );
let soyExplicitoNumber = queTipoSoy<number>( 100 );