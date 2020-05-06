// Dada que esta manera de importar modulos aun no está soportada por node
// se tiene que agregar la extensión mjs. Y ejecutarlo en consola con node
// con el siguiente comando: node --experimental-modules index.mjs

import greeting from './module.mjs';

console.log(greeting.greeting())