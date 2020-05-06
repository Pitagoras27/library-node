// Los callbacks-hell son un un proceso que intenta manejar la asincronía a partir 
// de la ejecución controlada de callbacks. Pero se concidera un antipatrón por 
// causar ilegibilidad y mantenimiento difícil del código

const greeting = (name, callback) => {
  setTimeout(() => {
    console.log(`Hola ${name}`)
    callback(name)
  }, 1500)
}

const talk = callback => {
  setTimeout(() => {
    console.log('Bla bla bla ...')
    callback()
  }, 1000)
}

const goodbye = (name, callback) => {
  setTimeout(() => {
    console.log(`Adios ${name}`)
    callback()
  }, 1000)
}
// console.log('Iniciando el proceso!')
// greeting('CarlosD', () => {
//   talk(() => {
//     talk(() => {
//       talk(() => {
//         goodbye('CarlosD', () => {
//           console.log(`Terminando el proceso!`)
//         })
//       })
//     })
//   })
// })

// En este caso en particular se está llamando una misma función varias veces
// por lo que es posible ejecutarla recursivamente y con esto evitar el callbackhell

const conversation = (nombre, veces, callback) => {
  if (veces >= 0) {
    talk(function () {
      conversation(nombre, --veces, callback);
    });
  } else {
    goodbye(nombre, callback);
  }
}

console.log('Iniciando el proceso!')
greeting('CarlosD', () => {
  conversation('CarlosD', 3, () => {
    goodbye('CarlosD', () => {
      console.log(`Terminando el proceso!`)
    })
  })
})