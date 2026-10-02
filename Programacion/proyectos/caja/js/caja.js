function toggleBox(){
    
    if(box.style.display == "none"){
        box.style.display = "block";
        button.textContent = "Ocultar Caja";
    }else{
        box.style.display = "none";
        button.textContent = "Mostrar Caja";
        
    }
}

const box = document.querySelector(".cuadrado");
const button = document.querySelector(".boton");


button.addEventListener("click", function(){
    toggleBox();
});

