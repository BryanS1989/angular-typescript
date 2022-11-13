

console.log('Hola Mundo!!!');

/*
    ===== Código de TypeScript =====

    DESESTRUCTURACIÓN DE ARGUMENTOS EN FUNCIONES
    ============================================
*/

export interface Producto {
    desc : string;
    precio : number;
}

const telefono : Producto = {
    desc : 'Nokia A1',
    precio : 150
}

const tableta : Producto = {
    desc : 'iPad Air',
    precio : 350
}

export function calculaImpuestosSobreVenta ( productos : Producto[] ) : [number, number] {

    let total = 0;

    // productos.forEach( (producto, index, productosArr) => {
    // Podemos seleccionar solo el precio del producto:
    productos.forEach( ({ precio }, index, productosArr) => {
        total += precio;
    } );

    return [total, total * 0.15];
}

const articulos = [ telefono, tableta ];

const isv = calculaImpuestosSobreVenta( articulos );
const [ total, impuestoSobreVentas ] = calculaImpuestosSobreVenta( articulos );

// console.log( 'ISV: ', isv );
// console.log( 'Total: ', total );
// console.log( 'Impuesto Sobre Ventas: ', impuestoSobreVentas );