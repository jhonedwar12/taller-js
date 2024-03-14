 // escribe tu respuesta acá
 function removerCeros(lista) {
    if (!lista || !lista.length) {
      return 0;
    }
    let sum = [];
    for (let i = 0; i < lista.length; i++) {
        if(lista[i] !==0){
            sum.push(lista[i]);
        }
    }
    return sum;
  }

// código de prueba
console.log(removerCeros([0, 1, 0, 2, 0, 3])) // [1, 2, 3]
console.log(removerCeros([9, 3, 6, 4])) // [9, 3, 6, 4]
console.log(removerCeros([0, 0, 0])) // []