let canvas = document.getElementById('canvas')
let tablero = canvas.getContext('2d')

let raquetaY = 150
let raqueta2Y = 150

let subir = false
let bajar = false

let subir2 = false
let bajar2 = false

let pelota = { x:65 , y:300, velx:5, vely:5 }

tablero.fillStyle = 'white'

mueveRaqueta()
dibujarTablero()

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

    dibujaPelota()

    requestAnimationFrame(dibujarTablero)
}

function mueveRaqueta(){

    document.addEventListener('keydown', function(tecla){

        // Jugador izquierdo
        if(tecla.key == 'w' || tecla.key == 'W'){
            subir = true
        }

        if(tecla.key == 's' || tecla.key == 'S'){
            bajar = true
        }

        // Jugador derecho
        if(tecla.key == 'ArrowUp'){
            subir2 = true
        }

        if(tecla.key == 'ArrowDown'){
            bajar2 = true
        }

    })

    document.addEventListener('keyup', function(tecla){

        // Jugador izquierdo
        if(tecla.key == 'w' || tecla.key == 'W'){
            subir = false
        }

        if(tecla.key == 's' || tecla.key == 'S'){
            bajar = false
        }

        // Jugador derecho
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

    // Límites jugador izquierdo
    if(raquetaY < 0){
        raquetaY = 0
    }

    if(raquetaY > 300){
        raquetaY = 300
    }

    // Límites jugador derecho
    if(raqueta2Y < 0){
        raqueta2Y = 0
    }

    if(raqueta2Y > 300){
        raqueta2Y = 300
    }

    // Raqueta izquierda
    tablero.fillRect(25,raquetaY,20,100)

    // Raqueta derecha
    tablero.fillRect(655,raqueta2Y,20,100)

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

    // Rebote izquierda y derecha
    if(pelota.x >= 698 || pelota.x <= 10){
        pelota.velx = pelota.velx * -1
    }

    tablero.arc(pelota.x,pelota.y,10,0,Math.PI * 2)
    tablero.fill()

}