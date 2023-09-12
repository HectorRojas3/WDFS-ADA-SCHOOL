/* Utilizando prompt() y alert() simula una calculadora que acepte 2 parámetros numéricos 
y 1 tipo de operación, usa los parámetros y condicionales para calcular el resultado 
y mostrarlo en la consola */

// step 1
const numero1 = parseFloat(prompt("Ingrese el primer numero"));
const numero2 = parseFloat(prompt("Ingrese el segundo numero"));
const operacion = prompt("Ingresa el tipo de operacion que desea realizar (+,-, *, /):")

// step 2
let resultado;

if (operacion === '+') {
    resultado = numero1 + numero2;
} else if (opercion === "-") {
    resultado = numero1 - numero2;
} else if (operacion === "*") {
    resultado = numero1 * numero2;
} else if (operacion === "/") {
    resultado = numero1 / numero2;
} else {
    resultado = "Operacion no valida";
}

//step 3
alert('El resultado de la operacion es: ${resultado}')