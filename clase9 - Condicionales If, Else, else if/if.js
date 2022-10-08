if (true) {
    console.log("Hola");
}
// Imprime Hola o sea es true, 
// if valida que la condicion dea verdadera

if (false) {
    console.log("Hola");
}
// caso contrario imprime undefined que la
// condicional no está definida.

if (false) {
    console.log("Hola");
} else {
    console.log("Soy Falso");
} // si no se cumple una condición 
// imprime la verdadera.
// Respuesta Soy Falso;

var edad = 24;

if(edad === 18){ // valor extrictamente igual a 18
alert("Puedes votar, será tu primera vez");
} else if( edad > 18) {
    alert("Puedes Votar de Nuevo");
} else {
    alert("aun no puedes votar");
}

/* OPERADOR TERNARIO */

// condition ? true : false;

var numero = 1;

var resultado = numero === 1 ? "Sí soy un uno" : "No, no soy uno";
console.log(resultado);  // imprime = Sí soy un uno

var numero = 4;

var resultado = numero === 1 ? "Sí soy un uno" : "No, no soy uno";
console.log(resultado);  // imprime = No, no soy uno
