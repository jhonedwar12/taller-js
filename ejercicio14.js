// escribe tu respuesta acá
function sumarArreglo(lista,lim_inf, lim_sup) {
    if (!lista || !lista.length) {
      return 0;
    }
    let sum = 0;
    for (let i = lim_inf; i <= lim_sup; i++) {
        sum= sum+ lista[i];
    }
    return sum;
  }

// código de prueba
console.log(sumarArreglo([1, 2, 3], 1, 2)) // 5
console.log(sumarArreglo([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 3, 6)) // 22
console.log(sumarArreglo([7, 8, 9], 0, 0)) // 0