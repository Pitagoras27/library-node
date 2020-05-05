// OS permite acceder a elementos de muy bajo nivel y gestinarlo con JS
const os = require('os');

// arquitectura del sistema operativo
console.log(os.arch());
console.log(os.platform());

// núcleos del cpu 
// console.table(os.cpus());

// console.log(os.constants);

const SIZE = 1024;
const kb = bytes => bytes / SIZE
const mb = bytes => kb(bytes) / SIZE
const gb = bytes => mb(bytes) / SIZE

// freemem memoria RAM disponible 
console.log(kb(os.freemem()));
console.log(mb(os.freemem()));
console.log(gb(os.freemem()));

// Memoria RAM total del sistema
console.log(gb(os.totalmem()));

// directorio raíz del usuario
console.log(os.homedir())

// directorio de archivos temporales
console.log(os.tmpdir())

// nombre de la computadora 
console.log(os.hostname());

// Interfaces de red a la que está conectada la computadora
// console.log(os.networkInterfaces());
