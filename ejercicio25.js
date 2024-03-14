// escribe tu función acá
function terminanConS(lista) {
    return lista.filter(str => str[str.length - 1].toLowerCase() === 's');
  }
// código de prueba
console.log(terminanConS(["pruebas", "arroz", "árbol", "tokens"])) // ["pruebas", "tokens"]
console.log(terminanConS(["beta", "delta", "gama"])) // []
console.log(terminanConS([])) // []