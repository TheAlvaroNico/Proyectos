document.addEventListener("DOMContentLoaded",function(){

function removerCeros(array){
    let newArray = [];
    for(let i=0; i<array.length; i++){
        if(array[i] !== 0){
            newArray.push(array[i]);
        }
    }
    return newArray;
    
    

}   

console.log(removerCeros([0, 1, 0, 2, 0, 3])) // [1, 2, 3]
console.log(removerCeros([9, 3, 6, 4])) // [9, 3, 6, 4]
console.log(removerCeros([0, 0, 0])) // []

})