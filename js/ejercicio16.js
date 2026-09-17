// 1. Definición de las Funciones Flecha para cada operación[cite: 9]
const sumar = (a, b) => a + b;
const restar = (a, b) => a - b;
const multiplicar = (a, b) => a * b;
// Para la división verificamos que el divisor (b) no sea cero[cite: 9]
const dividir = (a, b) => b !== 0 ? a / b : 'Error: División por cero';

// 2. Función principal que coordina el flujo[cite: 9]
function calcularOperacion(operacion) {
    const inputNum1 = document.getElementById('numero1').value;
    const inputNum2 = document.getElementById('numero2').value;
    const inputResultado = document.getElementById('resultado');

    // Limpiar el resultado previo
    inputResultado.value = '';

    // 3. Validación: Comprobar que los campos no estén vacíos y sean números[cite: 9]
    if (inputNum1.trim() === '' || inputNum2.trim() === '') {
        // Uso de SweetAlert2 para mostrar el error[cite: 9]
        Swal.fire({
            icon: 'warning',
            title: 'Campos vacíos',
            text: 'Por favor, ingresa ambos números antes de calcular.'
        });
        return;
    }

    const a = parseFloat(inputNum1);
    const b = parseFloat(inputNum2);

    if (isNaN(a) || isNaN(b)) {
        // Uso de SweetAlert2 para mostrar error de validación[cite: 9]
        Swal.fire({
            icon: 'error',
            title: 'Valores inválidos',
            text: 'Asegúrate de ingresar únicamente valores numéricos.'
        });
        return;
    }

    // 4. Invocar la función flecha correspondiente según el botón presionado[cite: 9]
    let resultadoFinal;

    switch (operacion) {
        case 'suma':
            resultadoFinal = sumar(a, b);
            break;
        case 'resta':
            resultadoFinal = restar(a, b);
            break;
        case 'multiplicacion':
            resultadoFinal = multiplicar(a, b);
            break;
        case 'division':
            resultadoFinal = dividir(a, b);
            break;
    }

    // Si el resultado es el error de división, mostramos una alerta también
    if (resultadoFinal === 'Error: División por cero') {
        Swal.fire({
            icon: 'error',
            title: 'Operación no válida',
            text: 'No es posible dividir un número entre cero.'
        });
        inputResultado.value = 'Error';
    } else {
        // Mostrar el resultado en la caja readonly[cite: 9]
        // Se formatea a un máximo de 4 decimales si es necesario para evitar números larguísimos
        inputResultado.value = Number.isInteger(resultadoFinal) ? resultadoFinal : resultadoFinal.toFixed(4);
    }
}