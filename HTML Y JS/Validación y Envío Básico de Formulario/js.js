const formulario=document.getElementById("formulario");
const campoNombre=document.getElementById("nombre");
const campoApellidos=document.getElementById("apellidos");
const campoEdad=document.getElementById("edad");
const campoEmail=document.getElementById("email");
const mensajeSalida=document.getElementById("mensaje");

function manejarEnvio(e){
    e.preventDefault();

    const nombre=campoNombre.value.trim();
    const apellidos=campoApellidos.value.trim();
    const edad=campoEdad.value.trim();
    const email=campoEmail.value.trim();

    if (nombre !== "" && apellidos !=="" && edad !== "" && email !== "") {
        mensajeSalida.textContent = `¡Registro exitoso! Bienvenido, ${nombre}.`;
    } else {
        mensajeSalida.textContent = 'ERROR: Todos los campos deben estar llenos...';
    }
}

formulario.addEventListener("submit", manejarEnvio);

