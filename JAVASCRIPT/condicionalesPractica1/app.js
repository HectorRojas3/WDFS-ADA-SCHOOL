/* Un restaurante te ha pedido que escribas una expresión condicional 
en la que verifique si una persona tiene edad para comprar una cerveza.
Como lo harias? */

const edad = parseFloat(prompt("Ingrese su edad"));
//const permisoValido = edad >= 18;
if (edad < 18) {
    alert("Es prohibido vender alcohol a menores de edad")
}else {
    alert("Cuantos six quiere?")
}
