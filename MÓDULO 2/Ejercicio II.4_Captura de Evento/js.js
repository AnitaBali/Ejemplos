const caja=document.getElementById("contenedor");
const salida=document.getElementById("salida");

function manejarClick(e){

    if(e.target.classList.contains("boton")){
        const botonPulsado=e.target;
        const nombre=botonPulsado.textContent;

        salida.textContent=`Has elegido la opción ${nombre}!`;
    }

}

caja.addEventListener("click",manejarClick);
