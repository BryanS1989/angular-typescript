import { Producto, calculaImpuestosSobreVenta } from "./06-desestructuracion-funcion";

console.log('Hola Mundo!!!');

/*
    ===== Código de TypeScript =====

    IMPORTACIONES Y EXPORTACIONES
    =============================
*/

const carritoCompras : Producto[] = [
    {
        desc : 'Telefono 1',
        precio : 100
    },
    {
        desc : 'Telefono 2',
        precio : 150
    }
];

const [ total, isv ] = calculaImpuestosSobreVenta ( carritoCompras );

console.log( 'Total: ', total );
console.log( 'ISV: ', isv );