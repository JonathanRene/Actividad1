function calcularOperaciones() {
    // 1. Capturar los valores ingresados y referenciar las cajas de resultados
    const inputTexto = document.getElementById('numeros').value;
    const inputMayor = document.getElementById('mayor');
    const inputMenor = document.getElementById('menor');
    const inputPromedio = document.getElementById('promedio');
    const mensajeError = document.getElementById('mensajeError');

    // Limpiar resultados o errores previos
    mensajeError.textContent = '';
    inputMayor.value = '';
    inputMenor.value = '';
    inputPromedio.value = '';

    // 2. Validación: Verificar que el campo de entrada no esté vacío
    if (inputTexto.trim() === '') {
        mensajeError.textContent = 'Error: El campo no puede estar vacío.';
        return;
    }

    // 3. Crear el arreglo separando la cadena por comas con split()[cite: 7]
    const arregloCadenas = inputTexto.split(',');

    // 4. Convertir a números con map(Number) eliminando espacios en blanco[cite: 7]
    const arregloNumeros = arregloCadenas.map(cadena => Number(cadena.trim()));

    // 5. Validación: Verificar que todos sean números válidos (y no entradas como ",,," o letras)[cite: 7]
    // Si la cadena original estaba vacía después del trim o si el resultado es NaN, lanzamos error
    if (arregloNumeros.some(isNaN) || arregloCadenas.some(cadena => cadena.trim() === '')) {
        mensajeError.textContent = 'Error: Ingrese solo números válidos separados por comas.';
        return;
    }

    // 6. Calcular el número mayor y menor usando spread operator (...)[cite: 7]
    const maximo = Math.max(...arregloNumeros);
    const minimo = Math.min(...arregloNumeros);

    // 7. Calcular el promedio sumando con reduce() y dividiendo entre length[cite: 7]
    const suma = arregloNumeros.reduce((acc, valor) => acc + valor, 0);
    const promedio = suma / arregloNumeros.length;

    // 8. Mostrar cada resultado en su respectiva caja de texto readonly sin recargar la página[cite: 7]
    inputMayor.value = maximo;
    inputMenor.value = minimo;
    
    // Mostramos el promedio y usamos toFixed(2) solo si el número tiene muchos decimales
    inputPromedio.value = Number.isInteger(promedio) ? promedio : promedio.toFixed(2);
}