// no es necesario importarlo ya que está global en node
// const p = require('process');

process.on('beforeExit', () => {
    console.log('el proceso va a terminar');
});

process.on('exit', () => {
    console.log('Ale, el proceso acabó');
    // una vez ejecutado el evento exit el proceso de node sale del eventLoop
    setTimeout(() => {
        console.log('Esto no se va a ver nunca');
    }, 0);
});

setTimeout(() => {
    console.log('Esto se va a ver');
}, 0);

// Evento para capturar errores no cachados
process.on('uncaughtException', (err, origen) => {
    console.error('Vaya se nos ha olvidado capturar un error');
    setTimeout(() => {
        console.log('Esto viene desde las excepciones');
    }, 0);
});

// el error es capturado por uncaughtException por lo que no rompe la ejecución
// del programa
funcionQueNoExiste();

console.log('Esto si el error no se recoje, no sale');
