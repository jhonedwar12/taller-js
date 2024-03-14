// escribe tu función acá
//G -> C
//C -> G
//T -> A
//A -> U
function transcribir(texto) {
    let transcripcion='';
    for (let i = 0; i < texto.length; i++) {
      if (texto[i] === 'G') {
        transcripcion+= 'C'
      }else if(texto[i]==='A'){
        transcripcion+= 'U'
      }else if(texto[i]==='C'){
        transcripcion+='G'
      }else if(texto[i]==='T'){
        transcripcion+='A'
      }else{}
    }
    return transcripcion;
  }
// código de prueba
console.log(transcribir("ACGT")) // "UGCA"
console.log(transcribir("ACGTGGTCTTAA")) // "UGCACCAGAAUU"