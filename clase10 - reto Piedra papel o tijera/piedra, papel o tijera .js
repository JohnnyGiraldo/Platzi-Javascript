var piedra = 0;
var papel = 1;
var tijera = 2;

var jugador1;
var jugador2 = tijera;

var opciones = ["piedra", "papel", "tijera"];

jugador1 = prompt("¿Qué eliges?\nPiedra: 0\nPapel: 1\nTijera: 2", 0);

alert("Elegiste " + opciones[jugador1]);
alert("jugador2 eligió " + opciones[jugador2]);
if (jugador1 == piedra) {

    if (jugador2 == piedra) {
        alert("EMPATE!");
    } else if (jugador2 == papel) {
        alert("PERDISTE!")
    } else if (jugador2 == tijera) {
        alert("GANASTE!!")
    }
} else if (jugador1 == papel) {

    if (jugador2 == piedra) {
        alert("GANASTE!!");
    }
    if (jugador2 == papel) {
        alert("EMPATE!")
    }
    if (jugador2 == tijera) {
        alert("PERDISTE")
    }
} else if (jugador1 == tijera) {

    if (jugador2 == piedra) {
        alert("PERDISTE!!");
    }
    if (jugador2 == papel) {
        alert("GANASTE!")
    }
    if (jugador2 == tijera) {
        alert("EMPATE!")
    }
} else if (jugador1 >= 3) {
    alert("NO Inventes!!")
}