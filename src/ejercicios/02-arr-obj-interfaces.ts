

console.log('Hola Mundo!!!');

/*
    ===== Código de TypeScript =====
*/

/* Arrays y Objects */
// let habilidades = [];   // let habilidades: any[]   <-- try to avoid any

// let habilidades = ['Bash', 'Counter', 'Healing'];   // let habilidades: string[]
// let habilidades = ['Bash', 'Counter', 'Healing', 100];  // let habilidades: (string | number)[]
// let habilidades : (boolean | string | number) [] = ['Bash', 'Counter', 'Healing', 100];
// let habilidades : string[] = ['Bash', 'Counter', 'Healing', 100];   // Type 'number' is not assignable to type 'string'.ts(2322)

let habilidades : string[] = ['Bash', 'Counter', 'Healing'];

interface Personaje {
    nombre : string;
    hp : number;
    habilidades : string[];
    puebloNatal? : string;  // ? means that 'puebloNatal' is optional
};

const personaje : Personaje = {
    nombre : 'Strider',
    hp : 100,
    habilidades : ['Bash', 'Counter', 'Healing'],
};

personaje.puebloNatal = 'Pueblo Paleta';

console.table( personaje );