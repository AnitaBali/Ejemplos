const caja=document.getElementById("campo");
const escritura=document.getElementById("texto");

function mostrarTexto(){
    const textoIngresado = caja.value;
    escritura.textContent=textoIngresado;
}

caja.addEventListener("keyup",mostrarTexto);