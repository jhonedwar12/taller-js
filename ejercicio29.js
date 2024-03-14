// escribe tu función acá
function numAsteriscos(lista) {
    return lista.reduce((contador, texto) => contador + (texto === '*' ? 1 : 0), 0);
  }
// código de prueba
console.log(numAsteriscos(['', '*', '', '*'])) // 2
console.log(numAsteriscos(['*', '*', '*'])) // 3
console.log(numAsteriscos([])) // 0