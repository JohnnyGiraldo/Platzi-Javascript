/* Coerción: es la forma en la que podemos cambiar un tipo de valor a otro,
existen dos tipos de coercion:
coerción implicita= Es cuándo el lenguaje nos ayuda a cambiar el tipo de valor.
coerción explicita= Es cuándo obligamos a que cambie el tipo de valor.*/

var a = 4 + "7";  // ejemplo de operación implicita
var b = 4 * "7"; 
typeof b  // el resultado es "number"

 //---------------------//

var a = 20;   // ejemplo de operación explicita
var b = a + "";

console.log(b);
// resultado es 20 

typeof b;
// resultado es "string"

var d = Number(c);
typeof d /* el resultado es "number, estamos obligando a 
d a convertirse en un dato de tipo numerico*/

var c = String(a);
console.log(c); 
// Nos combierte la letra (a) al numero 20

var d = Number(c);
typeof d  
// El resultado es "number"

