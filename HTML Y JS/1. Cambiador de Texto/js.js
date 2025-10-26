//Seleccionamos el texto a cambiar
let titulo=document.getElementById("texto");

//Seleccionar el boton
let boton=document.getElementById("cambiar");

//Función para cambiar el texto
function cambiarTexto(){
    titulo.textContent="Hola Teddy!";
}

//Asignar funcion al evento click
boton.addEventListener('click',cambiarTexto);

