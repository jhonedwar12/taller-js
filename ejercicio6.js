// escribe tu respuesta acá
function fizzBuzz(x) {
    
    if(x % 3 == 0 && x % 5 == 0){
        return "fizzbuzz";
    }else if (x % 3 == 0 ){
        return  "fizz";
    }else if(x % 5 == 0){
        return "buzz";
    }else{
        return x;
    }

}
// código de prueba
console.log(fizzBuzz(6)); // "fizz"
console.log(fizzBuzz(20)); // "buzz"
console.log(fizzBuzz(30)); // "fizzbuzz"
console.log(fizzBuzz(8)); // 8