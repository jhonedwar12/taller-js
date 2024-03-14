 // escribe tu respuesta acá
 function sumarArreglo(lista) {
    if (!lista || !lista.length) {
      return 0;
    }
    let sum = 0;
    for (let i = 0; i < lista.length; i++) {
      sum +=lista[i];
    }
    return sum;
  }

// código de prueba
console.log(sumarArreglo([3, 1, 2])) // 6
console.log(sumarArreglo([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])) // 55
console.log(sumarArreglo([])) // 0