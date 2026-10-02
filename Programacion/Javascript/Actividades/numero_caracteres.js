document.addEventListener("DOMContentLoaded",function(){

    function numeroDeCaracteres(string, char){

        let count = 0;
        for(let i=0; i<string.length; i++){
            if (string[i] == char){
                count++;
            }
        }
        return count;

    }

console.log(numeroDeCaracteres("Hola Mundo", "o")) // 2
console.log(numeroDeCaracteres("MMMMM", "m")) // 0
console.log(numeroDeCaracteres("eeee", "e")) // 4



})