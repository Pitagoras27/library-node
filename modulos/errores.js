// EN node es importante cachar los errores ya que node detiene la
// ejecución al detectar un error no importando si no está en el hilo de ejecución principal
// errores no cachados en funciones asincronas rompen la ejecución del programa

const otraFuncion = () => {
    serompe()
}

const serompe = () => 3 + z

// En funciones asincronas el error debe ser capturado desde esa misma función ya
// que si no es así romperá la ejecución ya q el event loop no lo está escuchando por 
// no estar en el hilo principal
const seRompeAsincrona = cb => {
    setTimeout(() => {
        try {
            return 3 + z;
        } catch (err) {
            console.error('Error en mi función asícnrona');
            cb(err);
        }
    })
}

try {
    //otraFuncion();
    seRompeAsincrona(err => console.log(err.message));
} catch (err) {
    console.error('Vaya, algo se ha roto...');
    console.error(err);
    console.log('Pero no pasa nada, lo hemos capturado');
}

console.log('esto de aqui está al final');