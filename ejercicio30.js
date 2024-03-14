// escribe tu función acá
function numAsteriscos(matriz) {
    return matriz.reduce((contador, arr) => contador + numAsteriscos(arr), 0);
  }

// código de prueba
console.log(numAsteriscos([
    ['*', '', '*'],
    ['', '*', ''],
    ['*', '', '*']
  ]))
  // 5