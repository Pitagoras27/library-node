const bcrypt = require('bcrypt');

// La función de cifrado de bcrypt nos permite generar contraseñas encriptadas 
// con Salt.
// Según la documentación también funciona con promesas

const password = '1234Segura!';

bcrypt.hash(password, 5, (err, hash) => {
  console.log(hash);

  bcrypt.compare(password, hash, (err, res) => {
    //console.log(err);
    console.log(res);
  })
})