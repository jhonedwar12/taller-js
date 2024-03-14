function contrasenaValida(password) {
    return password === '2Fj(jjbFsuj' || password === 'eoZiugBf&g9';
  }

console.log(contrasenaValida("2Fj(jjbFsuj")) // true
console.log(contrasenaValida("eoZiugBf&g9")) // true
console.log(contrasenaValida("hola")) // false
console.log(contrasenaValida("")) // false