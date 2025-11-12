const box=document.getElementById("contenedor");
const display=document.getElementById("boton");
let estado=false;

function alternarEstado(){
    if (estado===false){
        //Si esta OFF lo cambiamos a TRUE
        estado=true;
        box.textContent = 'ESTADO: ON';
        box.classList.remove("off");
        box.classList.add("on");
    
    } else{
        //Si esta OFF lo cambiamos a TRUE
        estado=false;
        box.textContent = 'ESTADO: OFF';
        box.classList.remove('on'); 
        box.classList.add('off');     
    }
}

display.addEventListener("click",alternarEstado);