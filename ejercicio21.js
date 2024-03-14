// escribe tu función acá
function pares(lista) {
    return lista.filter(num => num % 2 === 0);
  }
// código de prueba
console.log(pares([1, 2, 3, 4, 5, 6])) // [2, 4, 6]
console.log(pares([])) // []