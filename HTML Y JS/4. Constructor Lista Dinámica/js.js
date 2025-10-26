let tarea=document.getElementById("texto");
let agregar=document.getElementById("boton");
let lista=document.getElementById("lista");

// 2. Define la función para agregar elementos
function agregarTarea() {
    // 3. Obtiene el texto del campo de entrada
    const textoTarea = tarea.value.trim(); // .trim() elimina espacios en blanco al 
    // inicio/final
    
    // Opcional: Verifica que el campo no esté vacío
    if (textoTarea === '') {
        alert('Por favor, escribe una tarea antes de agregar.');
        return; // Detiene la función si está vacío
    }

    // 4. CREA el nuevo elemento <li>
    const nuevoElementoLista = document.createElement('li');
    
    // 5. Asigna el texto al nuevo elemento <li>
    nuevoElementoLista.textContent = textoTarea; 
    
    // 6. AÑADE el nuevo <li> como hijo del <ul>
    lista.appendChild(nuevoElementoLista);
    
    // 7. Limpia el campo de texto (opcional, pero útil)
    tarea.value = '';
    
    // Opcional: Enfoca el input de nuevo para la siguiente entrada
    tarea.focus();
}

// 8. Conecta la función al evento 'click' del botón
boton.addEventListener('click', agregarTarea);