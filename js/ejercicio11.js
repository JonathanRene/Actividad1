function convertirDistancia() {
    // 1. Capturar el valor ingresado en el campo de texto
    const inputKilometros = document.getElementById('kilometros').value;
    const inputMillas = document.getElementById('millas');
    const mensajeError = document.getElementById('mensajeError');

    // Limpiar resultados o errores previos antes de cada intento
    mensajeError.textContent = '';
    inputMillas.value = '';

    // 2. Validación: Asegurar que el campo no esté vacío[cite: 4]
    if (inputKilometros.trim() === '') {
        mensajeError.textContent = 'Error: El campo no puede estar vacío. Ingrese un valor.';
        return; 
    }

    // 3. Validación: Verificar que el valor ingresado sea numérico[cite: 4]
    const kilometros = parseFloat(inputKilometros);
    if (isNaN(kilometros)) {
        mensajeError.textContent = 'Error: Por favor, ingrese un valor numérico válido.';
        return; 
    }

    // 4. Realizar la conversión usando la fórmula: M = K * 0.621371[cite: 4]
    const millas = kilometros * 0.621371;

    // 5. Mostrar el resultado en la caja de texto readonly[cite: 4]
    // Se utiliza toFixed(5) para redondear a 5 decimales, como en el ejemplo del documento (10 km -> 6.21371)[cite: 4]
    // Number() elimina los ceros sobrantes al final si los hay
    inputMillas.value = Number(millas.toFixed(5)) + ' mi';
}