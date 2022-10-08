


// Hoisting es cuándo las variables y las funciones se declaran
// antes que se procese cuálquier tipo de código y solo pasa con 
// versiones pasadas de JS de Emascript 5 hacia abajo y solo sucede
// con dos palabras claves que son variable y function.
// las nuevas versiones de Emascript 6 en adelante presentaron dos 
// nuevas variables que son que son const y let.


var miNombre;  // Primer paso es  Declararla
miNombre = "Johnny";  // segundo paso es Inicializarla

console.log(miNombre);

var miNombre = undefined;
console.log(miNombre);
miNombre = "Johnny";

var miNombre = undefined;
console.log(miNombre + "soy ese hoisting");
miNombre = "Johnny";


hey();

function hey() {
    console.log("Hola" + miNombre);
}

var miNombre = "Johnny"