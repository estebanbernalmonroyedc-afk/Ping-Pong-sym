let canvas = document.getElementById('canvas')
let tablero = canvas.getContext('2d')

tablero.fillStyle = 'white'
tablero.fillRect(25,25,20,90)
            // (Xinicial,yinicial,ancho,alto)
tablero.fillRect(655,25,20, 90)

//esto es el circulo
tablero.arc(90,65,10,0,Math.PI*2)
tablero.fill()

function dibujaLinea(){
    for(i=0;i<=400;i= i+15){
        tablero.fillRect(347,5,i,5,10)
    }
}