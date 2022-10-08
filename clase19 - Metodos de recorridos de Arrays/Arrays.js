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
// Primer metodo es filter que va a generar un nuevo array

var articulosFiltrados = articulos.filter(function (articulo) {
    return articulo.costo <= 500
});
// En la consola le damos  articulosFiltrados y me trae
// los artículo que valen menos de 500
/*
(2) [{…}, {…}]
0
: 
{nombre: 'Libro', costo: 320}
1
: 
{nombre: 'Teclado', costo: 500}
length
: 
2
*/
// -------------------------------

//---- segundo metodo es map---------//

var nombreArticulos = articulos.map(function (articulo) {
    return articulo.nombre
});
// si pedimos nombreArticulos en la consola nos trae de vuelta 
// los 7 artículos que tenemos : (7) ['Bici', 'Tv', 'Libro', 'Celular',
// 'Laptop', 'Teclado', 'Audifonos']