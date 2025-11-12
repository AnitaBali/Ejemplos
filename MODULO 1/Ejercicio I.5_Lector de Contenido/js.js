const titulo=document.getElementById("tituloPrincipal");
const salida=document.getElementById("salida")
const display=document.getElementById("boton");

function leerTexto(){
    const textoLeido=titulo.textContent;
    salida.textContent=`El título original que leímos es: ${textoLeido}`;
    salida.style.backgroundColor="#d49fdbff";
}

display.addEventListener("click", leerTexto);

