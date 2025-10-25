// 1. Selecciona los nodos del DOM
const caja = document.getElementById('miCaja');
const boton = document.getElementById('btnAlternar');

// 2. Define la función para alternar la clase
function alternarClase() {
    
    // 3. ¡La clave! classList.toggle() añade la clase 'activo' si no está,
    // y la quita si ya está.
    caja.classList.toggle('activo'); 
    
    // Opcional: Actualizar el texto del div para mostrar el estado actual
    if (caja.classList.contains('activo')) {
        caja.textContent = 'Estado: ON';
    } else {
        caja.textContent = 'Estado: OFF';
    }
}

// 4. Conecta la función al evento 'click' del botón
boton.addEventListener('click', alternarClase);