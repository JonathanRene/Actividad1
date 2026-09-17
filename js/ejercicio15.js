// 1. Arreglo global para almacenar los objetos de los estudiantes
let estudiantes = [];

function agregarEstudiante() {
    const inputNombre = document.getElementById('nombre').value;
    const inputCalificacion = document.getElementById('calificacion').value;
    const mensajeError = document.getElementById('mensajeError');

    mensajeError.textContent = '';

    // 2. Validaciones: Verificar que los campos no estén vacíos y que la calificación sea número[cite: 8]
    if (inputNombre.trim() === '' || inputCalificacion.trim() === '') {
        mensajeError.textContent = 'Error: Ningún campo puede estar vacío.';
        return;
    }

    const calificacion = parseFloat(inputCalificacion);
    if (isNaN(calificacion) || calificacion < 0) {
        mensajeError.textContent = 'Error: Ingrese una calificación numérica válida.';
        return;
    }

    // 3. Crear el objeto del estudiante y agregarlo al arreglo[cite: 8]
    const nuevoEstudiante = {
        nombre: inputNombre.trim(),
        calificacion: calificacion
    };
    
    estudiantes.push(nuevoEstudiante);

    // Limpiar los campos para el siguiente registro y actualizar el contador
    document.getElementById('nombre').value = '';
    document.getElementById('calificacion').value = '';
    document.getElementById('contadorEstudiantes').textContent = `Estudiantes agregados: ${estudiantes.length}`;
    
    // Enfocar de nuevo el campo de nombre para mayor rapidez
    document.getElementById('nombre').focus();
}

function calcularResultados() {
    const mensajeError = document.getElementById('mensajeError');
    const inputPromedio = document.getElementById('promedio');
    const inputMejor = document.getElementById('mejorEstudiante');
    const inputPeor = document.getElementById('peorEstudiante');

    mensajeError.textContent = '';

    if (estudiantes.length === 0) {
        mensajeError.textContent = 'Error: Agregue al menos un estudiante antes de calcular.';
        return;
    }

    // 4. Calcular el promedio con reduce()[cite: 8]
    const suma = estudiantes.reduce((total, estudiante) => total + estudiante.calificacion, 0);
    const promedio = suma / estudiantes.length;

    // 5. Encontrar la calificación más alta y más baja usando Math.max y Math.min con spread operator[cite: 8]
    const calificacionMaxima = Math.max(...estudiantes.map(e => e.calificacion));
    const calificacionMinima = Math.min(...estudiantes.map(e => e.calificacion));

    // 6. Buscar el nombre de los estudiantes que tienen esas calificaciones[cite: 8]
    // find() devuelve el primer objeto que cumpla la condición
    const mejorEstudiante = estudiantes.find(e => e.calificacion === calificacionMaxima);
    const peorEstudiante = estudiantes.find(e => e.calificacion === calificacionMinima);

    // 7. Mostrar resultados en las cajas readonly[cite: 8]
    inputPromedio.value = promedio.toFixed(2);
    inputMejor.value = mejorEstudiante.nombre;
    inputPeor.value = peorEstudiante.nombre;
}