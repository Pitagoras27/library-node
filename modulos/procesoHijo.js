const { exec, spawn } = require('child_process');


// exec -> para ejecutar comandos "en la terminal"
// exec('ls -la', (err, stdout, sterr) => {
exec('node modulos/consola.js', (err, stdout, sterr) => {
    if (err) {
        console.error(err);
        return false;
    }
    console.log(stdout);
})

// spawn para invocar un proceso nuevo de node
let proceso = spawn('ls', ['-la']);
// console.log(proceso.pid);
// console.log(proceso.connected);

// Ejecutando un callback con el envento on
proceso.stdout.on('data', function (dato) {
    console.log('¿Está muerto?');
    console.log(proceso.killed);
    console.log(dato.toString())
});

proceso.on('exit', function () {
    console.log('el proceso terminó');
    console.log(proceso.killed)
})
