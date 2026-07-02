let canvas = document.getElementById('canvas')
let tablero = canvas.getContext('2d')

let raquetaY = 150
let raqueta2Y = 150

let subir = false
let bajar = false

let subir2 = false
let bajar2 = false

let pelota = { x:350 , y:200, velx:5, vely:5 }

// Marcador
let puntosJugador1 = 0
let puntosJugador2 = 0

let marcador1 = document.getElementById('puntos1')
let marcador2 = document.getElementById('puntos2')

// Control del juego
let pausa = false
let jugando = false

let boton = document.getElementById("miBoton")

tablero.fillStyle = 'white'

mueveRaqueta()
dibujarTablero()

boton.addEventListener("click", iniciarJuego)

function dibujarTablero(){

    // Movimiento jugador izquierdo
    if(subir){
        raquetaY = raquetaY - 5
    }

    if(bajar){
        raquetaY = raquetaY + 5
    }

    // Movimiento jugador derecho
    if(subir2){
        raqueta2Y = raqueta2Y - 5
    }

    if(bajar2){
        raqueta2Y = raqueta2Y + 5
    }

    dibujarRaqueta()

    for(i=0;i<=400;i=i+15){
        tablero.fillRect(347.5,i,5,10)
    }

    if(jugando && !pausa){
        dibujaPelota()
    }else{
        tablero.beginPath()
        tablero.arc(pelota.x,pelota.y,10,0,Math.PI*2)
        tablero.fill()
    }

    requestAnimationFrame(dibujarTablero)
}

function mueveRaqueta(){

    document.addEventListener('keydown', function(tecla){

        if(tecla.key == 'w' || tecla.key == 'W'){
            subir = true
        }

        if(tecla.key == 's' || tecla.key == 'S'){
            bajar = true
        }

        if(tecla.key == 'ArrowUp'){
            subir2 = true
        }

        if(tecla.key == 'ArrowDown'){
            bajar2 = true
        }

    })

    document.addEventListener('keyup', function(tecla){

        if(tecla.key == 'w' || tecla.key == 'W'){
            subir = false
        }

        if(tecla.key == 's' || tecla.key == 'S'){
            bajar = false
        }

        if(tecla.key == 'ArrowUp'){
            subir2 = false
        }

        if(tecla.key == 'ArrowDown'){
            bajar2 = false
        }

    })

}

function dibujarRaqueta(){

    tablero.clearRect(0,0,700,400)

    if(raquetaY < 0){
        raquetaY = 0
    }

    if(raquetaY > 300){
        raquetaY = 300
    }

    if(raqueta2Y < 0){
        raqueta2Y = 0
    }

    if(raqueta2Y > 300){
        raqueta2Y = 300
    }

    tablero.fillRect(25,raquetaY,20,100)

    tablero.fillRect(655,raqueta2Y,20,100)

}

function iniciarJuego(){

    puntosJugador1 = 0
    puntosJugador2 = 0

    marcador1.textContent = puntosJugador1
    marcador2.textContent = puntosJugador2

    pelota.x = 350
    pelota.y = 200

    // Dirección inicial aleatoria
    if(Math.random() < 0.5){
        pelota.velx = 5
    }else{
        pelota.velx = -5
    }

    if(Math.random() < 0.5){
        pelota.vely = 5
    }else{
        pelota.vely = -5
    }

    jugando = true
    pausa = false

}

function reiniciarPelota(){

    pausa = true

    pelota.x = 350
    pelota.y = 200

    if(Math.random() < 0.5){
        pelota.velx = 5
    }else{
        pelota.velx = -5
    }

    if(Math.random() < 0.5){
        pelota.vely = 5
    }else{
        pelota.vely = -5
    }

    setTimeout(function(){

        pausa = false

    },1000)

}

function dibujaPelota(){

    tablero.beginPath()

    pelota.x = pelota.x + pelota.velx
    pelota.y = pelota.y + pelota.vely

    // Colisión con la raqueta izquierda
    if(
        pelota.x - 10 <= 45 &&
        pelota.x + 10 >= 25 &&
        pelota.y + 10 >= raquetaY &&
        pelota.y - 10 <= raquetaY + 100
    ){
        pelota.velx = pelota.velx * -1
        pelota.x = 55
    }

    // Colisión con la raqueta derecha
    if(
        pelota.x + 10 >= 655 &&
        pelota.x - 10 <= 675 &&
        pelota.y + 10 >= raqueta2Y &&
        pelota.y - 10 <= raqueta2Y + 100
    ){
        pelota.velx = pelota.velx * -1
        pelota.x = 645
    }

    // Rebote arriba y abajo
    if(pelota.y >= 396 || pelota.y <= 17){
        pelota.vely = pelota.vely * -1
    }

    // Punto jugador 1
    if(pelota.x >= 700){

        puntosJugador1++
        marcador1.textContent = puntosJugador1

        if(puntosJugador1 == 7){

            jugando = false
            alert("¡Jugador 1 ha ganado!")

        }else{

            reiniciarPelota()

        }

    }

    // Punto jugador 2
    if(pelota.x <= 0){

        puntosJugador2++
        marcador2.textContent = puntosJugador2

        if(puntosJugador2 == 7){

            jugando = false
            alert("¡Jugador 2 ha ganado!")

        }else{

            reiniciarPelota()

        }

    }

    tablero.arc(pelota.x,pelota.y,10,0,Math.PI * 2)
    tablero.fill()

}