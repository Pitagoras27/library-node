// Los callbacks son funciones pasadas por parámetro ejecutadas una vez se
// termine de ejecutar la función que la contiene

const greeting = (name, callback) => {
  setTimeout(() => {
    console.log(`Hola ${name}`)
    callback(name)
  }, 1500)
}

const goodbye = (name, callback) => {
  setTimeout(() => {
    console.log(`Adios ${name}`)
    callback()
  }, 1000)
}
console.log('Iniciando el proceso!')
greeting('CarlosD', () => {
  goodbye('CarlosD', () => {
    console.log(`Terminando el proceso!`)
  })
})
// Se utilizan para controlar el flujo de la ejecución, es decir si se tiene
// una función asincrona, volverla sincrona. Esto es muy importante en gestión
// de ciertis procesos, consulta a una api, carga de una librería, consulta a BD. etc
