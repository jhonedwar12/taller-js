// escribe tu función acá
function empiezanConA(lista) {
    return lista.filter(str => str[0].toLowerCase() === 'a');
  }
// código de prueba
console.log(empiezanConA(["beta", "alfa", "Arbol", "gama"])) // ["alfa", "Arbol"]
console.log(empiezanConA(["beta", "delta", "gama"])) // []
console.log(empiezanConA([])) // []