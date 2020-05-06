// En node las variables de entorno se definen en process.env.VARIBLE_NAME
// Al ser una variable fuera del sistema ésta se escribe en mayúsculas por convención

var name = process.env.NAME || 'Carlos'
var web = process.env.WEB || 'No tengo Web!!!'

console.log(`My name is ${name}`)
console.log(`y mi web es: ${web}`)

// Para asignar esos valores a esas variables de entorno para node lo ejecuto
// asignando un valor a ese nombre de variable:
// NAME=CarlosDev WEB:loquesea.com node conceptos/entorno.js