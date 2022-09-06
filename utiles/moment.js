const { format  } = require('date-fns');

// Utilidad para el manejo de fechas con librería format

let dateFormat = format(new Date(2022, 09, 06), 'yyyy-MM-dd')

console.log(dateFormat);
