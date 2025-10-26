let imagen=document.getElementById("gato");
let boton=document.getElementById("boton");
let texto=document.getElementById("informacion");

function leerAtributos(){
    //Usa getAttribute() para extraer el valor de 'src'
    let fuente=imagen.getAttribute("src");

     //Usa getAttribute() para extraer el valor de 'alt'
     let textoAlt=imagen.getAttribute("alt");

     //Actualiza el DOM para mostrar los valores capturados
     texto.innerHTML= `
        <p><strong>Fuente (src):</strong> ${fuente}</p>
        <p><strong>Texto Alt:</strong> ${textoAlt}</p>
    `;
}


//Conecta la función al evento 'click' del botón
boton.addEventListener('click', leerAtributos);
