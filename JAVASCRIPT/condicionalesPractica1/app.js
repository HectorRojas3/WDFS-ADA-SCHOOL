/* Ahora pasemos a otra tarea. Aquí te pasamos una cadena para trabajar.

let myString = 'Javascript+es+super+cool' ;

1. Convierta la cadena en un array, eliminando los caracteres + en el proceso.
2. Guarde el resultado en una variable llamada myArray.
3. Almacene la longitud del array en una variable llamada arrayLength.
4. Almacene el último elemento del array en una variable llamada lastItem.
5. Crea un nuevo array que tenga los elementos ordenados en orden inverso que myArray. 
Almacenalos en un una variable llamada myInverseArray.
6. Agrega un elemento al final de myInverseArray. */

// steps 1 & 2
let myString = 'Javascript+es+super+cool';

//con el metodo .split() dividimos la cadena en un array y le pasamos el parametro + 
let myArray = myString.split('+');

//console.log(myArray);
//output: ["Javascript", "es", "super", "cool"]

// step 3
//la propiedad lenght nos permite obtener la longitud del array, y almacenar el resultado en una nueva variable
let arrayLength = myArray.length;

//console.log(arrayLength);
//output: 4

// step 4
//primero obtenemos la longitud del array y le restamos uno para obtener el ultimo elemento del array
let lastIndex = myArray.length -1;

//seguido de eso podemos acceder al ultimo elemento y mostrarlo por consola
let lastItem = myArray[lastIndex];

//console.log(lastItem);
//output: "cool"

//step 5
//para crear un nuevo array usando los elementos del array original se usa el metodo .slice()
//luego se usa el metodo .reverse() para ordenar los elementos al inverso. 
let myInverseArray = myArray.slice().reverse();

console.log(myInverseArray);
//output: ["cool", "super", "es", "Javascript"]

//step 6
//para agregar un elemento al final de un array se usa el elemento .push()
myInverseArray.push('completado');

console.log(myInverseArray);
//output: ["cool", "super", "es", "Javascript", "completado" ]