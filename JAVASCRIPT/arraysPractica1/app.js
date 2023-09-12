/* Comencemos con una práctica básica de arrays .

En esta tarea, nos gustaría que crearas un array de tres elementos, 
almacenados dentro de una variable llamada myArray. Los artículos pueden ser lo que quieras, 
¿qué tal tus comidas o bandas favoritas?

A continuación, modifica los dos primeros elementos del array 
utilizando una notación y asignación de corchetes simples [].

Luego agrega un nuevo elemento al comienzo de la matriz.

Luego crea una variable de tipo string donde puedas leer todos los elementos de tu array , 
separados por guiones -

🎉

Practica avanzada. Crea un array con varios elementos de diferentes tipos. 
La regla es que por lo menos un elemento pertenezca a cada tipo de dato primitivo que acabamos de ver. 
Recuerdas cuales eran? 🤓 */

// step 1
const myArray = ["Hector", 1993, true];

// step 2
myArray[0] = "Jonatan";
myArray[1] = 1994;

// step 3
const newElement = "Hermano";
myArray.unshift(newElement); //para agregar un nuevo elemento al comienzo de la matriz se usa el metodo .unshift()

//console.log(myArray); //output: ['Hermano', 'Jonatan', 1994, true]

// step 4
const hyphenSpacedString = myArray.join("-"); //el metodo .join() permite unir todos los elementos de la matriz en una sola cadena

console.log(myArray); //output: ["Hermano-Jonatan-1994-true"]
