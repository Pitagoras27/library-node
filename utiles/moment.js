const moment = require('moment');

// Utilidad para el manejo de fechas

let ahora = moment();

console.log(ahora.toString());
console.log(ahora.format('YYYY/MMM/DD - HH:mm'));
console.log(ahora.format('YYYY/MM/DD - HH:mm')); 