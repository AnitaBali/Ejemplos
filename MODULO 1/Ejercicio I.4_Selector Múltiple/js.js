const texto=document.querySelectorAll(".resaltar");
const display=document.getElementById("boton");

function sombrear(){
    texto.forEach((elemento) => {
        elemento.style.backgroundColor = 'lightcoral';
        elemento.style.color = 'white';
        elemento.textContent += ' (¡Modificado en lote!)';
    });
}

display.addEventListener("click",sombrear);
