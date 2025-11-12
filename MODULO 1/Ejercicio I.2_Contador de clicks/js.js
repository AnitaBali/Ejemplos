let tecla=document.getElementById("clic");
let boton=document.getElementById("boton");
let contador=0;

function contarClicks(){
   contador+=1;
   tecla.textContent=contador;

}

boton.addEventListener("click",contarClicks);