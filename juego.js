let canvas = document.getElementById('canvas')
let tablero = canvas.getContext('2d')
let raquetaY = 150
let pelota = { x:65 , y: 300,velx:5,vely:5}
tablero.fillStyle = 'white' 
dibujarTablero()
mueveRaqueta()
dibujarRaqueta()
dibujaPelota()

function dibujarTablero(){
    dibujarRaqueta()
    for(i=0;i<=400;i= i + 15){
        tablero.fillRect(347.5,i,5,10)
    }
    dibujaPelota()
    mueveRaqueta()
    requestAnimationFrame(dibujarTablero)
}

function mueveRaqueta(){
    document.addEventListener('keydown', function(tecla){
        if(tecla.key == 'ArrowUp' ){
            raquetaY = raquetaY - 5
            dibujarRaqueta()
            
        }

        if(tecla.key == 'ArrowDown'){
             raquetaY = raquetaY + 5
           
            dibujarRaqueta()   
        }
    })
}


function dibujarRaqueta(){
    tablero.clearRect(0,0,700,400)//deja en blanco todo
    if(raquetaY < 0){
        raquetaY = 0    
    }
    if(raquetaY > 300){
        raquetaY =300
    }
    tablero.fillRect(25,raquetaY,20,100 )//pinta la raqueta
    
}

function dibujaPelota(){
    // tablero.clearRect(0,0,700,400)//deja en blanco todo
    tablero.beginPath()
    pelota.x = pelota.x + pelota.velx
     pelota.y = pelota.y + pelota.vely
     // colision con la raqueta
    if(pelota.x - 10 <= 45 &&
        pelota.x + 10 >= 25 &&
        pelota.y >= raquetaY &&
        pelota.y <= raquetaY + 100
    ){
        pelota.velx = pelota.velx * -1
    }
    //pared abajo
    if(pelota.y >= 396 || pelota.y <= 17 ){
            pelota.vely = pelota.vely * -1
    }
    if(pelota.x >= 698 || pelota.x <= 10 ){
            // pelota.velx = pelota.velx + 2 * -1
            pelota.velx = pelota.velx * -1
    }
        tablero.arc(pelota.x, pelota.y, 10,0, Math.PI * 2)
        tablero.fill() //rellena la pelotañ        

}
