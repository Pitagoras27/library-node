// File sistem es un módulo aunque como todos cuenta con su opción sincrona
const fs = require('fs');

const read = (ruta, cb) => {
    fs.readFile(ruta, (err, data) => {
        cb(data.toString());
    })
}

const write = (ruta, contenido, cb) => {
    fs.writeFile(ruta, contenido, (err) => {
        if (err) {
            console.error('No he podido escribirlo', err);
        } else {
            console.log('Se ha escrito correctamente');
        }

    });
}

function borrar(ruta, cb) {
    fs.unlink(ruta, cb);
}

write(__dirname + '/archivo1.txt', 'Soy un archivo nuevo', console.log);
// read(__dirname + '/archivo1.txt', console.log)
// borrar(__dirname + '/archivo1.txt', console.log);