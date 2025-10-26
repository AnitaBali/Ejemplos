// 1. Selecciona los nodos del DOM
const alerta = document.getElementById('alerta');
const botonCancelar = document.getElementById('btnCancelar');

// 2. Variable para almacenar la ID única del temporizador
let temporizadorID; 

// 3. Define la función que se ejecutará si el tiempo expira
function ocultarAlerta() {
    // Oculta el elemento cambiando su estilo
    alerta.style.opacity = '0'; 
    alerta.style.height = '0';
    alerta.style.padding = '0';
    alerta.style.border = 'none';
    console.log("Alerta oculta automáticamente.");
}

// 4. Inicia el temporizador (3000 milisegundos = 3 segundos) y GUARDA su ID
temporizadorID = setTimeout(ocultarAlerta, 3000); 
console.log(`Temporizador iniciado con ID: ${temporizadorID}`);


// 5. Define la función para cancelar el temporizador
function cancelarOcultamiento() {
    // Usa clearTimeout con la ID guardada para detener la ejecución programada
    clearTimeout(temporizadorID); 
    
    // Muestra al usuario que se canceló
    alerta.textContent = "¡Ocultamiento CANCELADO! La alerta permanece.";
    alerta.style.backgroundColor = '#5cb85c'; // Color verde para indicar éxito
    
    // Deshabilita el botón para que no se pueda volver a cancelar
    botonCancelar.disabled = true; 
    
    console.log("Temporizador cancelado.");
}

// 6. Conecta la función de cancelación al evento 'click' del botón
botonCancelar.addEventListener('click', cancelarOcultamiento);