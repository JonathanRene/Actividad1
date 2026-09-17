// 1. CLOSURE Y SCOPE[cite: 10]
// manejarTareas es un closure que encapsula la lógica de agregar y eliminar tareas[cite: 10].
const manejarTareas = (function() {
    
    // Scope Local: estas funciones y variables solo existen aquí adentro[cite: 10].
    function obtenerTareas() {
        // Recuperamos del Local Storage y usamos JSON.parse para convertir el texto a arreglo[cite: 10]
        let tareasJSON = localStorage.getItem("tareas");
        return tareasJSON ? JSON.parse(tareasJSON) : [];
    }

    function guardarTareas(tareas) {
        // Usamos JSON.stringify para convertir el arreglo a texto y guardarlo[cite: 10]
        localStorage.setItem("tareas", JSON.stringify(tareas));
    }

    // Retornamos los métodos públicos (Closure)[cite: 10]
    return {
        agregarTarea: function(tarea) {
            let tareas = obtenerTareas();
            tareas.push({ texto: tarea, completada: false });
            guardarTareas(tareas);
        },
        eliminarTarea: function(index) {
            let tareas = obtenerTareas();
            tareas.splice(index, 1);
            guardarTareas(tareas);
        },
        obtenerTodas: function() {
            return obtenerTareas();
        }
    };
})();

// 2. FUNCIÓN PARA MOSTRAR LAS TAREAS EN PANTALLA[cite: 10]
function renderizarTareas() {
    const lista = document.getElementById("listaTareas");
    lista.innerHTML = ""; // Limpiamos la lista actual

    // Obtenemos las tareas usando nuestro closure
    const tareas = manejarTareas.obtenerTodas();

    // Recorremos el arreglo para crear los elementos en el HTML
    tareas.forEach((tarea, index) => {
        const li = document.createElement("li");
        li.textContent = tarea.texto;

        // Botón de eliminar para cada tarea[cite: 10]
        const btnEliminar = document.createElement("button");
        btnEliminar.textContent = "Eliminar";
        btnEliminar.className = "btn-eliminar";
        // Al hacer clic, llamamos a la función de confirmación pasando el índice
        btnEliminar.onclick = () => confirmarEliminacion(index);

        li.appendChild(btnEliminar);
        lista.appendChild(li);
    });
}

// 3. FUNCIÓN PARA AGREGAR DESDE EL BOTÓN HTML[cite: 10]
function agregarNuevaTarea() {
    const inputTarea = document.getElementById("nuevaTarea");
    const textoTarea = inputTarea.value.trim();

    if (textoTarea === "") {
        Swal.fire({ icon: 'warning', title: 'Oops...', text: 'Escribe una tarea antes de agregarla.' });
        return;
    }

    manejarTareas.agregarTarea(textoTarea);
    inputTarea.value = ""; // Limpiamos el input
    renderizarTareas(); // Actualizamos la vista
}

// 4. FUNCIÓN CON SWEETALERT PARA CONFIRMAR ELIMINACIÓN[cite: 10]
function confirmarEliminacion(index) {
    Swal.fire({
        title: '¿Estás seguro?',
        text: "¡No podrás revertir esto!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#e74c3c',
        cancelButtonColor: '#3498db',
        confirmButtonText: 'Sí, eliminar',
        cancelButtonText: 'Cancelar'
    }).then((result) => {
        if (result.isConfirmed) {
            manejarTareas.eliminarTarea(index); // Eliminamos del Local Storage[cite: 10]
            renderizarTareas(); // Actualizamos la vista
            Swal.fire('¡Eliminada!', 'Tu tarea ha sido borrada.', 'success');
        }
    });
}

// Cargar las tareas automáticamente al abrir o recargar la página[cite: 10]
document.addEventListener("DOMContentLoaded", renderizarTareas);