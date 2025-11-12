# 📚 MÓDULO I: SELECCIÓN Y CONTENIDO (DOM BÁSICO)

Este módulo se enfoca en las habilidades fundamentales para iniciar la manipulación del DOM (Document Object Model): **seleccionar** un elemento en el HTML y **modificar** su contenido o **leer** su valor.

## 🎯 Resumen de Conceptos Clave

| Concepto | Método/Propiedad | Función Principal |
| :---: | :---: | :--- |
| **Selección por ID** | `getElementById()` | Selecciona un elemento por su ID (método rápido). |
| **Selección Única** | `querySelector()` | Selecciona el **primer** elemento que coincida con un selector CSS (clase, etiqueta, etc.). |
| **Selección Múltiple**| `querySelectorAll()` | Selecciona una **lista** de todos los elementos que coincidan con un selector CSS. |
| **Modificar Texto** | `.textContent` | Cambia el contenido a **texto plano** (Opción segura). |
| **Modificar HTML** | `.innerHTML` | Cambia el contenido, permitiendo inyectar **etiquetas HTML** (ej. `<b>`, `<h1>`). |
| **Lectura** | `.textContent` | Permite **obtener el valor** actual de un elemento para usarlo en lógica JS. |

---

## 📝 Detalle de Ejercicios Completados (I.1 a I.5)

### 🚀 I.1: Editor por ID (Texto Simple)

* **Foco DOM:** `document.getElementById()` y `.textContent`.
* **Logro:** Crear un botón que, al ser pulsado, reemplaza el texto de un párrafo específico.

### 🚀 I.2: Contador de Clicks (Introducción a Eventos y Estado)

* **Foco DOM:** `addEventListener('click', ...)` y variables `let`.
* **Logro:** Se mantiene una variable de estado (`contador`) en JavaScript y se actualiza el DOM (`.textContent`) en cada clic, demostrando persistencia de datos.

### 🚀 I.3: Selector Universal

* **Foco DOM:** `document.querySelector('.clase')`.
* **Logro:** Demostrar el uso de selectores CSS. Aunque hay múltiples elementos con la misma clase, solo se selecciona y se modifica el **primero** encontrado.

### 🚀 I.4: Selector Múltiple

* **Foco DOM:** `document.querySelectorAll('.clase')` y `forEach`.
* **Logro:** Seleccionar **todos** los elementos que comparten una clase y recorrer la lista (`NodeList`) para aplicar el mismo cambio (ej. color de fondo) a cada uno.

### 🚀 I.5: Lector de Contenido

* **Foco DOM:** Lectura de `.textContent`.
* **Logro:** Se **lee** el texto de un elemento (el origen) y ese texto capturado se **escribe** como salida en un elemento de destino diferente, reafirmando la doble función del `.textContent`.

---

## ⏭️ Próximo Módulo

El siguiente paso es el **Módulo II: Manejo de Eventos**, donde profundizaremos en el método `addEventListener` para manejar clics, pulsaciones de teclas y envíos de formularios.