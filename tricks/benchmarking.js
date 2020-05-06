// métricas importantes para validar el rendimiento de los procesos!

const asynchronous = () => {
  return new Promise(resolve => {
    setTimeout(() => {
      console.log('finished asynchronous process!')
      resolve()
    }, 1000)
  })
}

console.time('all process')

console.time('bucle 1')
let sumValue = 0
for (let i = 0; i < 1000000; i++) {
  sumValue += 1
}
console.timeEnd('bucle 1')

console.time('bucle 2')
let sumValue2 = 0
for (let i = 0; i < 100000000; i++) {
  sumValue2 += 1
}
console.timeEnd('bucle 2')

// temporalizador con proceso asíncrono
console.time('asincrono')
console.log('start asynchronous process!')
asynchronous()
  .then(() => {
    console.timeEnd('asincrono')
  })

console.timeEnd('all process')
