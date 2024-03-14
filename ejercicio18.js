// escribe tu función acá
function max(lista) {
    if (!lista || !lista.length) {
      return null;
    }
    let max = lista[0];
    for (let i = 1; i < lista.length; i++) {
      if (lista[i] > max) {
        max = lista[i];
      }
    }
    return max;
  }
// código de prueba
console.log(max([3, 9, 6])) // 9
console.log(max([67, 35, 54, 26])) // 67
console.log(max([5, 9, 2, 4, 5, 7])) // 9