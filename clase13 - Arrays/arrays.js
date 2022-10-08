var frutas = ["Manzana","Plátano","Cereza","Fresa"];

console.log(frutas);/* Array(4)
0: "Manzana"
1:"Plátano"
2:"Cereza"
3:"Fresa" */

console.log(frutas.length); // length:4

console.log(frutas[0]);  // Manzana

console.log(frutas[2]);  // Cereza


var masFrutas = frutas.push("Uvas");
// Metodo del push nos ayuda agregar otro elemento a nuestro array.

console.log(frutas); // (5) ['Manzana', 'Plátano', 'Cereza', 'Fresa', 'Uvas']

var ultimo = frutas.pop("Uvas")
// Con el metodo pop eliminamos un array de la lista.

console.log(frutas); // (4) ['Manzana', 'Plátano', 'Cereza', 'Fresa']

var nuevaLongitud = frutas.unshift("Mango");
// Con el metodo nshift agregamos un elemento al inicio de la lista
/* Array(5)
0:"Mango"
1:"Manzana"
2:"Plátano"
3:"Cereza"
4:"Fresa"*/

var borrarFruta = frutas.shift("Uvas");
// Con el metodo shift Eliminamos un elemento o varios elementos de mis arrays
// (4) ['Manzana', 'Plátano', 'Cereza', 'Fresa']

var posicion = frutas.indexOf("Cereza");
// Con el metodo indexOf buscamos la posicion de un elemento dentro de los arrays.
/*  > posicion
<- 2  */

frutas[2];
// "Cereza"