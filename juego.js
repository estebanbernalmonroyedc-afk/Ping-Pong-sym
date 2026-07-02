let canvas = document.getElementById('canvas')
let tablero = canvas.getContext('2d')

let raquetaY = 150

// Nuevas variables para mover las raquetas
let subir = false
let bajar = false

let pelota = { x:65 , y:300, velx:5, vely:5 }

tablero.fillStyle = 'white'

mueveRaqueta()
dibujarTablero()

function dibujarTablero(){

    // Movimiento continuo de la raqueta
    if(subir){
        raquetaY = raquetaY - 5
    }

    if(bajar){
        raquetaY = raquetaY + 5
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

        if(tecla.key == 'ArrowUp'){
            subir = true
        }

        if(tecla.key == 'ArrowDown'){
            bajar = true
        }

    })

    document.addEventListener('keyup', function(tecla){

        if(tecla.key == 'ArrowUp'){
            subir = false
        }

        if(tecla.key == 'ArrowDown'){
            bajar = false
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

    tablero.fillRect(25,raquetaY,20,100)

}

function dibujaPelota(){

    tablero.beginPath()

    pelota.x = pelota.x + pelota.velx
    pelota.y = pelota.y + pelota.vely

    // Colisión con la raqueta
    if(
        pelota.x - 10 <= 45 &&
        pelota.x + 10 >= 25 &&
        pelota.y >= raquetaY &&
        pelota.y <= raquetaY + 100
    ){
        pelota.velx = pelota.velx * -1
    }

    // Rebote arriba y abajo
    if(pelota.y >= 396 || pelota.y <= 17){
        pelota.vely = pelota.vely * -1
    }

    // Rebote izquierda y derecha
    if(pelota.x >= 698 || pelota.x <= 10){
        pelota.velx = pelota.velx * -1
    }

    tablero.arc(pelota.x,pelota.y,10,0,Math.PI*2)
    tablero.fill()

}