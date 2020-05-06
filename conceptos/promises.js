
const greeting = name => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(`Hola ${name}`)
    }, 1500)
  })
}

const talk = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Bla bla bla ...')
    }, 2000)
  })
}
const goodbye = name => {
  return new Promise((resolve, reject) => {
    if (!name) return reject(new Error('error!'))
    setTimeout(() => {
      resolve(`Adios ${name}`)
    }, 1000)
  })
}
console.log('Iniciando el proceso!')
greeting('CarlosDev')
  .then(res => {
    console.log(res)
    return talk()
  })
  .then(res => {
    console.log(res)
    return talk()
  })
  .then(res => {
    console.log(res)
    return goodbye('CarlosDev')
  })
  .then(res => {
    console.log(res)
    console.log('Proceso concluido')
  })
  .catch(res => console.log(res))