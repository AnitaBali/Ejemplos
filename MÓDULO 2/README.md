# ⚙️ MÓDULO II: MANEJO DE EVENTOS (INTERACTIVIDAD)

Este módulo es el motor que da vida a tu código, enseñándote a usar **addEventListener()** para hacer que la página reaccione a las acciones del usuario (clics, teclas, etc.).

## 🎯 Resumen de Conceptos Clave

| Concepto | Método/Propiedad | Función Principal |
| :---: | :---: | :--- |
| **Escucha de Eventos** | `addEventListener()` | El método fundamental para conectar una acción con una función JavaScript. |
| **Estado** | `let` | Usar variables para mantener un valor que persiste y se actualiza con cada interacción. |
| **Información del Evento** | `event.target` | Permite saber **exactamente qué elemento** fue pulsado en una lista o grupo. |
| **Eventos de Entrada** | `'keyup'` | Reacciona a la entrada de datos en tiempo real sin necesidad de un botón. |

---

## 📝 Detalle de Ejercicios Planificados (II.1 a II.5)

Los ejercicios están diseñados para avanzar desde la sintaxis básica hasta la gestión de múltiples interacciones y datos.

### 🚀 II.1: Escucha de Clic (Sintaxis Base)

* **Foco:** **`addEventListener('click', ...)`**.
* **Objetivo:** Establecer la conexión básica entre un botón y un cambio visual (`style.backgroundColor`).

### 🚀 II.2: Contador de Clics

* **Foco:** **Variables de Estado** (`let`) y persistencia.
* **Objetivo:** Usar una variable **`let`** para mantener un conteo que se incrementa con cada clic, mostrando la persistencia de datos en el DOM.

### 🚀 II.3: Alternador de Estado (ON/OFF)

* **Foco:** **Lógica Condicional** (`if/else`) y manipulación de clases (`classList`).
* **Objetivo:** Usar una variable booleana (`true`/`false`) para alternar entre dos estados visuales distintos usando estilos CSS predefinidos.

### 🚀 II.4: Captura de Evento (El Objeto `event`)

* **Foco:** Objeto **`event`** y propiedad **`event.target`**.
* **Objetivo:** Tener múltiples botones con un solo `listener`. Al hacer clic, se usa `event.target` para identificar **cuál** de los botones fue presionado y cambiar solo ese elemento.

### 🚀 II.5: Eventos en Múltiples Elementos

* **Foco:** **Iteración** (`querySelectorAll` + `forEach`).
* **Objetivo:** Aprender a asignar un escuchador de eventos individual a **todos** los elementos de una lista generada por `querySelectorAll`, lo cual es vital para listados dinámicos.

---
