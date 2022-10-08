/*Bucles JavaScript
Los bucles son útiles si desea ejecutar el mismo código una y otra vez,
 cada vez con un valor diferente.
 Diferentes tipos de bucles
JavaScript admite diferentes tipos de bucles:

for- recorre un bloque de código varias veces
for/in- recorre las propiedades de un objeto
for/of- recorre los valores de un objeto iterable
while- recorre un bloque de código mientras una condición específica es verdadera
do/while- también recorre un bloque de código mientras una condición específica es verdadera*/

var estudiantes = ["Maria", "Sergio", "Rosa", "Daniel"];

function saludarEstudiantes(estudiante) {
   console.log(`Hola, ${estudiante}`);

for (var i = 0; i < estudiantes.length; i++) { // for- recorre un bloque de código varias veces
    saludarEstudiantes(estudiantes[i])
}
}
/*  loops.js:4 Hola, Maria
    loops.js:4 Hola, Sergio
    loops.js:4 Hola, Rosa
    loops.js:4 Hola, Daniel
*/

var estudiantes = ["Maria", "Sergio", "Rosa", "Daniel"];

function saludarEstudiantes(estudiante) {
    console.log(`Hola, ${estudiante}`);
}
for (var estudiante of estudiantes){
    saludarEstudiantes(estudiante);// con esta funcion nos saluda a todos los estudiantes

    /* Hola, Maria
    loops.js:30 Hola, Sergio
    loops.js:30 Hola, Rosa
    loops.js:30 Hola, Daniel*/
}

