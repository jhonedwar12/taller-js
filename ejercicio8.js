// escribe tu respuesta acá
function sumarRango(numeroInicial, numeroFinal) {
    if (numeroInicial > numeroFinal) {
      return 0;
    } else {
      let suma = 0;
      for (let i = numeroInicial; i <= numeroFinal; i++) {
        suma += i;
      }
      return suma;
    }
  }
// código de prueba
console.log(sumarRango(0, 10)) // 55
console.log(sumarRango(12, 14)) // 39
console.log(sumarRango(5, 5)) // 0