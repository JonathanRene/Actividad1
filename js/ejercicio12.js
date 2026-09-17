function convertirMoneda() {
    // 1. Capturar el valor ingresado en el campo de texto
    const inputMXN = document.getElementById('mxn').value;
    const inputUSD = document.getElementById('usd');
    const mensajeError = document.getElementById('mensajeError');

    // Limpiar resultados o errores previos
    mensajeError.textContent = '';
    inputUSD.value = '';

    // 2. Validación: Asegurar que el campo no esté vacío
    if (inputMXN.trim() === '') {
        mensajeError.textContent = 'Error: El campo no puede estar vacío. Ingrese una cantidad.';
        return; 
    }

    // 3. Validación: Verificar que el valor sea numérico y positivo[cite: 5]
    const mxn = parseFloat(inputMXN);
    if (isNaN(mxn) || mxn <= 0) {
        mensajeError.textContent = 'Error: Por favor, ingrese un valor numérico positivo.';
        return; 
    }

    // 4. Definir la tasa de cambio y realizar la conversión[cite: 5]
    // 1 USD = 18.18 MXN aprox, por lo que usamos 0.055[cite: 5]
    const tasaCambio = 0.055;
    const usd = mxn * tasaCambio;

    // 5. Mostrar el resultado en la caja readonly[cite: 5]
    // Se utiliza toFixed(2) para que el ejemplo de 500 MXN muestre 27.50 USD[cite: 5]
    inputUSD.value = usd.toFixed(2) + ' USD';
}