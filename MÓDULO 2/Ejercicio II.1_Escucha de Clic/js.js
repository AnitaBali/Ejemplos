const contenedor=document.getElementById("caja");
const display=document.getElementById("boton");

function cambiarColor(){
    contenedor.style.backgroundColor="rgba(198, 247, 247, 1)"
    
}

display.addEventListener("click",cambiarColor);