let canvas = document.getElementById('canvas')
let tablero = canvas.getContext('2d')
let raquetaY = 150
let pelota = {x: 100, y:200}
tablero.fillStyle = 'white'
dibujaTablero()
mueveRaqueta()
//aca se hace la pelota
tablero.arc(90, 65, 10, 0, Match.PI * 2)
tablero.fill()

function dibujaTablero(){
    dibujarRaqueta()
    for(i=0;i<=400;i= i+15){
        tablero.fillRect(347,5,i,5,10)
    }
}

function mueveRaqueta(){
    document.addEventListener('keydown', function(tecla){
        if(tecla.key == 'ArrowUp'){
            raquetaY = raquetaY - 5
            dibujarRaqueta()
            dibujaTablero()
            dibujaPelota
        }

        if(tecla.key == 'ArrowDown'){
            raquetaY = raquetaY + 5
            dibujarRaqueta()
            dibujaTablero()
            dibujaPelota()
        }
    })
}

function dibujarRaqueta(){
    tablero.clearRect(0,0,700,400)//deja en blanco todo
    if(raquetaY < 0){
        raquetaY = 0
    }
    if(raquetaY > 300){
        raquetaY = 300
    }
    tablero.fillRect(25,raquetaY,20,100)//pinta la raqueta
}

function dibujaPelota(){
    tablero.clearRect(0,0,700,400)//deja en blanco todo
    tablero.beginPath()
    pelota.x = pelota.x + 5
    pelota.y = pelota.y + 7
    tablero.arc(pelota.x, pelota.y, 10, 0, Math.PI * 2)
    tablero.fill()//rellena la pelota
}