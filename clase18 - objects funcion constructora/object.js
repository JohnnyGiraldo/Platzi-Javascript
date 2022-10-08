/* Observaciones
Las funciones de constructor son en realidad solo funciones regulares,
no hay nada especial en ellas. Es solo la new palabra clave que causa el
comportamiento especial que se muestra en los ejemplos anteriores.
Las funciones de constructor aún se pueden llamar como una función 
normal si se desea, en cuyo caso deberá vincular this valor explícitamente.

Declarar una función constructora
Las funciones de constructor son funciones diseñadas para 
construir un nuevo objeto. Dentro de una función constructora, 
la palabra clave this se refiere a un objeto recién creado, 
que se pueden asignar valores a. Las funciones del constructor "devuelven" 
este nuevo objeto automáticamente.

function Cat(name) {
this.name = name;
this.sound = "Meow";
}
Las funciones de constructor se invocan usando la new palabra clave:

let cat = new Cat("Tom");
cat.sound; // Returns "Meow"

Las funciones de constructor también tienen una propiedad prototype 
que apunta a un objeto cuyas propiedades son heredadas automáticamente 
por todos los objetos creados con ese constructor:

Cat.prototype.speak = function() {
console.log(this.sound);
}

cat.speak(); // Outputs "Meow" to the console

Los objetos creados por las funciones de constructor también tienen una
propiedad especial en su prototipo llamado constructor , que apunta a la 
función utilizada para crearlos:

cat.constructor // Returns the `Cat` function

Los objetos creados por las funciones del constructor también se consideran 
"instancias" de la función del constructor por el operador instanceof :

cat instanceof Cat // Returns "true"
*/

function auto(marca, modelo, annio) {
this.marca = marca;
this.modelo = modelo;
this.annio = annio;

}  // si mando a llamar auto en la consola
/*auto
ƒ auto(marca, modelo, annio) {
this.marca = marca;
this.modelo = modelo;
this.annio = annio;
}*/

var autoNuevo = new auto("tesla","model 3", 2020);
// Si mando a llamar autoNuevo en la consola 
/*autoNuevo
auto {marca: 'tesla', modelo: 'model 3', annio: 2020}*/

var autoNuevo2 = new auto("Tesla", "Modelo X", 2018);
var autoNuevo3 = new auto("Toyota", "Corolla", 2020);
// Si mando a llamar autoNuevo2 en la consola me sale
// autoNuevo2  auto {marca: 'Tesla', modelo: 'Modelo X', annio: 2018}
// Si mando a llamar 
// autoNuevo3 auto {marca: 'Toyota', modelo: 'Corolla', annio: 2020}
