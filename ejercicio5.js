function Numero_Likes(x) {
    
    if(x>1000){
        return '1k';
    }else if (x>34000){
        return '34k';
    }else if(x>7000000){
        return '7M';
    }else{
        return x;
    }

}
  
console.log(Numero_Likes(1000));
