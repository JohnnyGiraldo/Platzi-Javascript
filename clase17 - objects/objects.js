/* Objetos JavaScript
Objetos, propiedades y métodos de la vida real
En la vida real, un automóvil es un objeto .
Un automóvil tiene propiedades como peso y color, y métodos como iniciar y detener:
Objeto	Propiedades	Métodos
car.name = Fiat
car.model = 500
car.weight = 850kg
car.color = blanco	
coche.arranque()
coche.conducir()
coche.freno()
coche.parada()
Todos los autos tienen las mismas propiedades , pero los valores de las propiedades
difieren de un auto a otro.Todos los autos tienen los mismos métodos ,
pero los métodos se realizan en momentos diferentes .*/

var miAuto = {
    marca: "Toyota",
    modelo: "Corolla",
    annio: 2020
};
console.log(miAuto);
/* 
Object annio:2020
marca:"Toyota"
modelo:"Corolla"*/
miAuto.marca // Toyota  Para acceder a un solo objeto
miAuto.annio // 2020 

var miAuto = {
    marca: "Toyota",
    modelo: "Corolla",
    annio: 2020,
    detalleDelAuto: function () {
        console.log(`Auto ${this.modelo} ${this.annio}`); // This es una variable que hace referencia a su padre en este caso es el objeto
        console.log(miAuto.detalleDelAuto()); // Manda a llamar Auto Corolla 2020 
    }
};