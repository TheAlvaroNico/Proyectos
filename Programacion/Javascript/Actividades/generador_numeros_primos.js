document.addEventListener("DOMContentLoaded",function(){

    //Declaracion de funciones
    function esPrimo(num){
    
        for(let i= 2;i < num; i++){

            if(num % i==0){

                return false; 
            }
        }

        return true;
    }

    //Parte principal
    const num_1= parseInt(prompt("introduce un numero"))
    const num_2= parseInt(prompt("introduce otro numero"))
    let lst_num =[];
    let max,  min 

    if(num_1>=  num_2){
        max = num_1;
        min = num_2;
    
    }else{
        max = num_2;
        min = num_1;

    }
  
    for(let i= min; i <= max; i++){
        lst_num.push(i);
        if(esPrimo(i)){
            lst_num.push(i)
            
        }

    }

    console.log(lst_num);

});