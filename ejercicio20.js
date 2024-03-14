// escribe tu función acá
function password(input) {
    let output = input.replace(/ /g, ''); // eliminar espacios en blanco
    output = output.toLowerCase(); // convertir mayúsculas a minúsculas
    const reemplazar = {
      a: '4',
      e: '3',
      i: '1',
      o: '0',
    };
    for (const char in reemplazar) {
      const replacement = reemplazar[char];
      output = output.replace(new RegExp(char, 'g'), replacement);
    }
    return output;
  }
// código de prueba
console.log(password("hola")) // "h0l4"
console.log(password("esta es una prueba")) // "3st43sun4pru3b4"
console.log(password("")) // ""