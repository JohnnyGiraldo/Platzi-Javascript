/* Reto ===  Generar una funcion constructora y hacer un loop para 
poder dar una lista de 30 carros que se vallan construllendo 
solos*/

// Inicializo las variables

let autos = [];
let cantidadAutos = 0;
let cantRegistrados = 0;
// crear la funcion constructora

function Auto(marca, modelo, color) {
    this.marca = marca;
    this.modelo = modelo;
    this.color = color;
}
// Le solicito al usuario cuántos autos va a registrar

cantidadAutos = prompt('Cuántos autos desea registrar');
// ejecuto el ciclo mientras la cantidad de autos registrados 
// sea menor a la cantidad de autos que el usuario desea registrar.

while (cantRegistrados < cantidadAutos) {
    let marca = prompt('marca');
    let modelo = prompt('modelo');
    let color = prompt('color');

    // paso las variables de scope local a la funcion constructora
    var autoNuevo = new Auto(marca, modelo, color);

    //Afrego el auto a mi arreglo de autos
    autos.unshift(autoNuevo);
    // Incremento la cantidad de autos registrados en 1
    cantRegistrados++;
}
//retorno a la consola el arreglo con todos los autos
// registrados por el Usuario.