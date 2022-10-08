// Ejemplos en los que Boolean devuelve falso:

Boolean(0); // False
Boolean(null); // False
Boolean(NaN); // False
Boolean(undefined); //False
Boolean(false)  // False
Boolean (""); // False

// Ejemplos en los que Boolean devuelve Verdadero:

Boolean(1); // True   para 1 o cualquier número diferente de (0)
Boolean("a"); // True  para cualquier carácter o espacio en blanco  en el String
Boolean([]); // True  Aunque el array esté Vacío.
Boolean({});  // True  Aunque el objeto esté vacío.
Boolean(function(){});// true  Cualquier funcion es verdadera también.

Boolean(-1); // true   Hay que tener cuidado con los números negativos
// cualquier otro número incluso los negativos es true