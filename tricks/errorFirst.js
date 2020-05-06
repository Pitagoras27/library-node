// Para funciones de tipo callback es una convención pasar el error como primer
// parámetro

const asynchronous = callback => {
  try {
    let a = 10
    setTimeout(() => {
      a += 10
      callback(null, a)
    }, 1000)
  } catch (e) {
    callback(e)
  }
}

asynchronous((err, result) => {
  if (err) {
    console.error(err)
    return false;
    // throw err
  }
  console.log('The result is ->', result)
})