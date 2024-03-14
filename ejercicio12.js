 // escribe tu respuesta acá
 function multiplicarArreglo(lista) {
    if (!lista || !lista.length) {
      return 0;
    }
    let sum = 1;
    for (let i = 0; i < lista.length; i++) {
      sum *=lista[i];
    }
    return sum;
  }
// código de prueba
console.log(multiplicarArreglo([4, 1, 2, 3])) // 24
console.log(multiplicarArreglo([1, 2, 3, 4, 5, 6, 7, 8])) // 40320
console.log(multiplicarArreglo([])) // 1