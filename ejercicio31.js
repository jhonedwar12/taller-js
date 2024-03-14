// escribe tu función acá
function distancia(palabra1, palabra2) {
    if (palabra1.length !== palabra2.length) {
      throw new Error('Las cadenas deben tener la misma longitud');
    }
  
    return [...palabra1].reduce((contador, letra, i) => contador + (letra !== palabra2[i] ? 1 : 0), 0);
  }
// código de prueba
console.log(distancia("hola", "hola")) // 0
console.log(distancia("sol", "tol")) // 1
console.log(distancia("carro", "correr")) // 3