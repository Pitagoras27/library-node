// modulo http para crear y conectarse con servidores externos desde node
const http = require('http');

const router = (req, res) => {
    console.log('Nueva petición!');
    console.log(req.url);

    switch (req.url) {
        case '/hola':
            let saludo = serverSend();
            res.writeHead(201, { 'Content-Type': 'text/plain' })
            res.write(saludo);
            res.end();
            break;

        default:
            res.write('Error 404: No se lo que quieres');
            res.end();
    }
}

http.createServer(router).listen(3000);

const serverSend = () => 'Respuesta del server desde path hola';

console.log("Escuchando http en el puerto 3000");