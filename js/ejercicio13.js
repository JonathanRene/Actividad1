function verificarEdad() {
    // 1. Capturar el valor ingresado en el campo de texto
    const inputEdad = document.getElementById('edad').value;
    const inputResultado = document.getElementById('resultado');
    const mensajeError = document.getElementById('mensajeError');

    // Limpiar resultados o errores previos
    mensajeError.textContent = '';
    inputResultado.value = '';

    // 2. Validación: Verificar que el campo de entrada no esté vacío[cite: 6]
    if (inputEdad.trim() === '') {
        mensajeError.textContent = 'Error: El campo no puede estar vacío. Ingrese su edad.';
        return; 
    }

    // 3. Validación: Verificar que el valor ingresado sea un número positivo[cite: 6]
    // Usamos parseInt porque la edad es un número entero
    const edad = parseInt(inputEdad);
    if (isNaN(edad) || edad < 0) {
        mensajeError.textContent = 'Error: Por favor, ingrese un número positivo válido.';
        return; 
    }

    // 4. Evaluar si la edad es suficiente para votar y mostrar el resultado en la caja readonly[cite: 6]
    if (edad >= 18) {
        inputResultado.value = 'Puedes votar'; // Para 18 años o más[cite: 6]
    } else {
        inputResultado.value = 'No puedes votar'; // Para menores de 18 (ej. 16)[cite: 6]
    }
}