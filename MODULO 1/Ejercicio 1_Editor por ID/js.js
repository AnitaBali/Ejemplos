let mensajeTexto=document.getElementById("mensaje");
let display=document.getElementById("boton");

function cambiarTexto(){
    mensajeTexto.textContent="¡Mensaje cambiado con éxito!";

}

display.addEventListener("click",cambiarTexto);