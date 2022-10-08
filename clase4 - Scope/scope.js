//scope global

var miNombre = "Johnny";


function nombre(){
    var miApellido = "Giraldo";
    console.log(miNombre + " " + miApellido); // Scope local
}
nombre();

miApellido;

// el scope local puede acceder al scope global

// el scope global no puede acceder al scope local