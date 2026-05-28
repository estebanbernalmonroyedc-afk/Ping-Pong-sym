let tablero = document.getElementById('tablero')
let lienzo = tablero.getContext('2d')

for(i=0; i<=300;i+=20){

//Superior izquierda
    lienzo.beginPath()
    lienzo.strokeStyle = "green"
    lienzo.moveTo(0,i) //X inicial, Y inicial
    lienzo.lineTo(i+20,300) // X final, Y final
    lienzo.stroke()
    lienzo.closePath()

//Superior derecha
    lienzo.beginPath()
    lienzo.strokeStyle = "blue"
    lienzo.moveTo(300,i)
    lienzo.lineTo(300-(i+20),300)
    lienzo.stroke()
    lienzo.closePath()

//Inferior izquierda
    lienzo.beginPath()
    lienzo.strokeStyle = "purple"
    lienzo.moveTo(0,300-i)
    lienzo.lineTo(i+20,0)
    lienzo.stroke()
    lienzo.closePath()

//Inferor derecha
    lienzo.beginPath()
    lienzo.strokeStyle = "gold"
    lienzo.moveTo(300,300-i)
    lienzo.lineTo(300-(i+20),0)
    lienzo.stroke()
    lienzo.closePath()
}