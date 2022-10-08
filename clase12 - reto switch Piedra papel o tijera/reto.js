// Reto piedra Papel o Tijera hecho con swich -------------///

var tijera = 1;
var piedra = 2;
var papel = 3;

var jugador1;
var jugador2 = tijera;

var opciones = ["piedra", "papel", "tijera"];

jugador1 = prompt("¿Qué eliges?\nPiedra: 0\nPapel: 1\nTijera: 2", 0);

alert("Elegiste " + opciones[jugador1]);
alert("jugador2 eligió " + opciones[jugador2]);
 // El prompt()método muestra un cuadro de diálogo que solicita al usuario que ingrese.


switch (true) {
    case jugador1 == 1 && jugador2 == 3:
        alert("Gana el Usuario con 🖖!!")
        break;

    case jugador1 == 2 && jugador2 == 1:
        alert("Gana el Usuario con ✊ !!")
        break;

    case jugador1 == 3 && jugador2 == 2:
        alert("Gana el Usuario  con 🤚!!")
        break;

    case jugador2 == 1 && jugador1 == 3:
        alert("Gana la Maquina con 🖖")
        break;

    case jugador2 == 2 && jugador1 == 1:
        alert("Gana la Maquina con ✊")
        break;

    case jugador2 == 3 && jugador1 == 2:
        alert("Gana la Maquina con 🤚")
        break;

    case jugador2 == 3 && jugador1 == 3:
        alert("Empate con  🤚")
        break;
    case jugador2 == 2 && jugador1 == 2:
        alert("Empate con  ✊")
        break;
    case jugador2 == 3 && jugador1 == 2:
        alert("Empate con  🖖")
        break;
    default:
        alert("No es valida tu jugada")
}