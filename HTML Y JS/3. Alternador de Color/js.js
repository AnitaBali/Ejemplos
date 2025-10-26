let contenedor=document.getElementById("caja");
let display=document.getElementById("boton");

function cambiarColor(){
    // Obtiene el color actual de la propiedad style
    // NOTA: Para obtener el color de la hoja de estilos (CSS), se usa 
    // getComputedStyle, 
    // pero para iniciación, este método funciona si el color inicial 
    // se establece directamente o en la propiedad style.
    // Usaremos 'blue' como referencia inicial.
    let colorActual=contenedor.style.backgroundColor;

        if (colorActual=="blue"){
            caja.style.backgroundColor="red";
        } else{
            caja.style.backgroundColor="blue";
        }
    }

//Conecta la función al evento 'click' del botón
boton.addEventListener('click', cambiarColor);

