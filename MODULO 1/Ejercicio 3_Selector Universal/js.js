const nota=document.querySelector(".item-nota");
const boton=document.getElementById("boton");

function cambiarColor(){
    nota.style.backgroundColor="pink";
}

boton.addEventListener("click",cambiarColor);