var articulos = [{
        nombre: "Bici",
        costo: 3000
    },
    {
        nombre: "Tv",
        costo: 2500
    },
    {
        nombre: "Libro",
        costo: 320
    },
    {
        nombre: "Celular",
        costo: 10000
    },
    {
        nombre: "Laptop",
        costo: 20000
    },
    {
        nombre: "Teclado",
        costo: 500
    },
    {
        nombre: "Audifonos",
        costo: 1700
    },
];
//-----------Metodo---Find---------------------//
// Con find buscamos el articulo con sus atributos

var ecuentraArticulo = articulos.find(function (articulo) {
    return articulo.nombre === "Laptop"
});

// colocamos en la consola ecuentraArticulo y nos muestra 
// {nombre: 'Laptop', costo: 20000}

//-----------Metodo---For each---------------------//

articulos.forEach(function (articulo) {
    console.log(articulo.nombre);
    /* nos imprime en la consola
    arrays.js:43 Bici
    arrays.js:43 Tv
    arrays.js:43 Libro
    arrays.js:43 Celular
    arrays.js:43 Laptop
    arrays.js:43 Teclado
    arrays.js:43 Audifonos*/
});

//-----------------Meodo some()-----------------//

var articulosBaratos = articulos.some(function (articulo) {
    return articulo.costo <= 700;

});
// si damos en la consola articulosBaratos nos dice si 
// la condicion es verdadesra o falsa.
// en la consola nos sale true