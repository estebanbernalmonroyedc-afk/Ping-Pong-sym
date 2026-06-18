let canvas = document.getElementById('canvas')
let tablero = canvas.getContext('2d')
var coordY = (canvas.height-100)/2
var coordY2 = (canvas.height-100)/2
tablero.fillStyle = 'white'
tablero.fillRect(25,coordY ,20,100)
            //  (xinicial,yinicial,ancho,alto)

tablero.fillRect(655,coordY2,20,100)

//aca hacemos el circulo
tablero.arc(90, 65, 10, 0, Math.PI * 2)
tablero.fill()
dibujaLinea()


function dibujaLinea(){
    for(i=0;i<=400;i= i + 15){
        tablero.fillRect(347.5,i,5,10)
    }
}

mueveRaqueta()

function mueveRaqueta (){
    document.addEventListener('keydown', (tecla) => {
    if (tecla.key === 'S' || tecla.key === 's'){
            tablero.clearRect(25, 0, 20,400);
            coordY += 20
            tablero.fillRect(25,coordY ,20,100)
    }
    if (tecla.key === 'W' || tecla.key === 'w') {
            tablero.clearRect(25, 0, 20 , 400);
            coordY -= 20
            tablero.fillRect(25,coordY ,20,100)
    }
    if (tecla.key === 'ArrowDown' || tecla.key === 'k') {
            tablero.clearRect(655, 0, 20 , 400);
            coordY2 += 20
            tablero.fillRect(655,coordY2,20,100)
    }
    if (tecla.key === 'ArrowUp' || tecla.key === 'i') {
            tablero.clearRect(655, 0, 20 , 400);
            coordY2 -= 20
            tablero.fillRect(655,coordY2,20,100)
    }

    if (coordY > 300){
        coordY = 300
    }
    if (coordY < 0){
        coordY = 0
    }
    if (coordY2 > 300){
        coordY2 = 300
    }
    if (coordY2 < 0){
        coordY2 = 0
    }
})
}