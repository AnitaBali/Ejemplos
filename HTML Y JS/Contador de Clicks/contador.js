//Variable contador
let cuenta=0;

//Seleccion de los nodos del DOM
let botonClick=document.getElementById("boton");
let numeroClick=document.getElementById("contador");

//Defina la función de lógica
function incrementarContador(){
    cuenta+=1;

    numeroClick.textContent=cuenta;
}

botonClick.addEventListener("click",incrementarContador);