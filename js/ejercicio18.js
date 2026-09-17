// 1. Seleccionar los elementos importantes del DOM[cite: 11]
const input = document.getElementById('nuevoElemento');
const botonAgregar = document.getElementById('agregarBtn');
const lista = document.getElementById('lista');

// 2. Función para agregar un nuevo elemento a la lista[cite: 11]
function agregarElemento() {
    // Obtiene el valor del input y elimina espacios innecesarios[cite: 11]
    const texto = input.value.trim(); 

    if (texto !== '') {
        // Crear un nuevo elemento 'li'[cite: 11]
        const li = document.createElement('li');
        
        // Añadimos clases de Bootstrap al li para que se vea como lista y alinee el botón a la derecha[cite: 11]
        li.className = 'list-group-item d-flex justify-content-between align-items-center fw-medium';
        
        // Crea el nodo de texto y lo agrega al li[cite: 11]
        const textoNodo = document.createTextNode(texto);
        li.appendChild(textoNodo); 

        // 3. Crear el botón de eliminar[cite: 11]
        const botonEliminar = document.createElement('button');
        botonEliminar.textContent = 'Eliminar';
        // Clases de Bootstrap para un botón pequeño y rojo[cite: 11]
        botonEliminar.className = 'btn btn-danger btn-sm'; 
        
        // Evento para eliminar el li al hacer clic en el botón[cite: 11]
        botonEliminar.addEventListener('click', function() {
            li.remove(); 
        });

        // 4. Añadir el botón al li y finalmente el li a la lista (ul)[cite: 11]
        li.appendChild(botonEliminar);
        lista.appendChild(li);

        // 5. Limpiar el campo de texto para seguir añadiendo[cite: 11]
        input.value = '';
        input.focus(); // Regresa el cursor al input
    } else {
        // Muestra una alerta si el usuario intenta agregar un texto vacío[cite: 11]
        Swal.fire({
            icon: 'warning',
            title: 'Campo vacío',
            text: 'Escribe algo para agregar a la lista.' // Texto solicitado en la práctica[cite: 11]
        });
    }
}

// 6. Asignar la función al botón de agregar mediante un EventListener[cite: 11]
botonAgregar.addEventListener('click', agregarElemento);

// (Opcional) Permitir agregar elementos presionando la tecla "Enter"
input.addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        agregarElemento();
    }
});