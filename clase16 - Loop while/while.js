/*
ciclo while
Resumen
Crea un bucle que ejecuta una sentencia especificada mientras
 cierta condición se evalúe como verdadera. Dicha condición es 
 evaluada antes de ejecutar la sentencia

 condicion
Una expresión que se evalúa antes de cada paso del bucle. 
Si esta condición se evalúa como verdadera, se ejecuta sentencia. 
Cuando la condición se evalúa como false, la ejecución continúa 
con la sentencia posterior al bucle while.
 */



var estudiantes = ["Maria", "Sergio", "Rosa", "Daniel"];

function saludarEstudiantes(estudiante){
    console.log(`Hola, ${estudiante}`);
}

while(estudiantes.length > 0){
    console.log(estudiantes);
 var estudiante = estudiantes.shift();
saludarEstudiantes(estudiante);
/* Hola, Maria
while.js:4 Hola, Sergio
while.js:4 Hola, Rosa
while.js:4 Hola, Daniel*/
}

/*while(estudiantes.length > 0){
    console.log(estudiantes);
    var estudiante = estudiantes.shift();
   saludarEstudiantes(estudiante);
}*/
/*(4) ['Maria', 'Sergio', 'Rosa', 'Daniel']
while.js:20 Hola, Maria
while.js:24 (3) ['Sergio', 'Rosa', 'Daniel']
while.js:20 Hola, Sergio
while.js:24 (2) ['Rosa', 'Daniel']
while.js:20 Hola, Rosa
while.js:24 ['Daniel']
while.js:20 Hola, Daniel*/