// escribe tu respuesta acá
function contarRango(x, y) {
    if (x >= y) {
      return 0;
    } else {
      let contador = 0;
      for (let i = x + 1; i < y; i++) {
        contador++;
      }
      return contador ;
    }
  }



// código de prueba
console.log(contarRango(1, 9)) // 7
console.log(contarRango(1332, 8743)) // 7410
console.log(contarRango(5, 6)) // 0