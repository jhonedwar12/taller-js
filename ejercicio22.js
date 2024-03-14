// escribe tu función acá
function posiciones(lista) {
    return lista.reduce((posiciones, num, index) => {
      if (num % 2 === 0) {
        posiciones.push(index);
      }
      return posiciones;
    }, []);
  }
// código de prueba
console.log(posiciones([1, 2, 3, 4, 5, 6])) // [1, 3, 5]
console.log(posiciones([])) // []