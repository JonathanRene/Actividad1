function convertirTemperatura() {
    // 1. Capturar el valor ingresado en el campo de texto
    const inputCelsius = document.getElementById('celsius').value;
    const inputFahrenheit = document.getElementById('fahrenheit');
    const mensajeError = document.getElementById('mensajeError');

    // Limpiar resultados o errores previos
    mensajeError.textContent = '';
    inputFahrenheit.value = '';

    // 2. Validaciones: asegurar que no esté vacío
    if (inputCelsius.trim() === '') {
        mensajeError.textContent = 'Error: El campo no puede estar vacío. Ingrese un valor.';
        return; // Detiene la ejecución
    }

    // 3. Validaciones: asegurar que sea un valor numérico[cite: 3]
    const celsius = parseFloat(inputCelsius);
    if (isNaN(celsius)) {
        mensajeError.textContent = 'Error: Por favor, ingrese un valor numérico válido.';
        return; // Detiene la ejecución
    }

    // 4. Realizar la conversión usando la fórmula: F = (C * 9/5) + 32[cite: 3]
    const fahrenheit = (celsius * 9 / 5) + 32;

    // 5. Mostrar el resultado en la caja de texto readonly con el símbolo °F[cite: 3]
    // Se usa toFixed(2) para limitar el resultado a dos decimales
    inputFahrenheit.value = fahrenheit.toFixed(2) + ' °F';
}