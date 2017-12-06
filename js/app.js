
//variables globales 
var jugador1= prompt('hola bienvenido al juego del gato\n cual es tu nombre de jugador', "Tom"); 
var jugador2 = prompt('hola bienvenido al juego del gato\n cual es tu nombre de jugador', "Jerry"); 
var turno = 1; 
var cont = 0; 
var n = 0; 
var posicion;  
var gana = false; 
var gato = "<img src = 'tom.png' />"; 
var raton = "<img src = 'jerry.gif' />"; 
document.getElementById('otro').addEventListener('click', otro); 
 
//que jugador 
juga.innerHTML="truno: " +jugador1; 
 
//tablero 
var tablero = new Array(9); 
 
//obtener los elemenetos html de las celdas 
for (var i = 0;i < 9;i++){ 
    document.getElementsByClassName('gato')[n].addEventListener('click', dibujar); 
    n++; 
} 
 
//funciones 
function dibujar(evento){ 
    //alert(evento.target.id); 
    posicion = evento.target.id.charAt(1)-1; 
    //alert(posicion); 
    if (turno == 1) { 
         
        if (tablero[posicion] == "X" || tablero[posicion] == "O") { 
             
        } 
        else{ 
            this.innerHTML = "X"; 
            this.style.background="#7dcd40"; 
            juga.innerHTML="truno: " +jugador2; 
            tablero[posicion]="X"; 
            turno = 2; 
            cont ++; 
        } 
         
    }else if(turno == 2){ 
        if (tablero[posicion] == "X" || tablero[posicion] == "O") { 
             
        } 
        else{ 
            this.innerHTML = "O"; 
            this.style.background="#ff4842"; 
            juga.innerHTML="truno: " +jugador1; 
            tablero[posicion]="O"; 
            turno = 1; 
            cont ++; 
        } 
    } 
    //llamar a funcion  ganador 
    if (cont >= 3 && cont <=9) { 
        ganador(); 
    } 
    if(cont >= 9 && gana == false){ 
        juga.innerHTML="EMPATE!!! "; 
        cont=100; 
        turno = 3; 
    } 
 
} 
function ganador(){ 
    if ((tablero[0]=="X" && tablero[1]=="X" && tablero[2]=="X") || 
     (tablero[3]=="X" && tablero[4]=="X" && tablero[5]=="X") || 
     (tablero[6]=="X" && tablero[7]=="X" && tablero[8]=="X") || 
     (tablero[0]=="X" && tablero[3]=="X" && tablero[6]=="X") || 
     (tablero[1]=="X" && tablero[4]=="X" && tablero[7]=="X") || 
     (tablero[2]=="X" && tablero[5]=="X" && tablero[8]=="X") || 
     (tablero[0]=="X" && tablero[4]=="X" && tablero[8]=="X") || 
     (tablero[2]=="X" && tablero[4]=="X" && tablero[6]=="X")) { 
        juga.innerHTML="Ganador: " +jugador1+"!!!"; 
        cont = 1000; 
        turno = 3; 
        gana = true; 
         
    } 
    else if((tablero[0]=="O" && tablero[1]=="O" && tablero[2]=="O") || 
     (tablero[3]=="O" && tablero[4]=="O" && tablero[5]=="O") || 
     (tablero[6]=="O" && tablero[7]=="O" && tablero[8]=="O") || 
     (tablero[0]=="O" && tablero[3]=="O" && tablero[6]=="O") || 
     (tablero[1]=="O" && tablero[4]=="O" && tablero[7]=="O") || 
     (tablero[2]=="O" && tablero[5]=="O" && tablero[8]=="O") || 
     (tablero[0]=="O" && tablero[4]=="O" && tablero[8]=="O") || 
     (tablero[2]=="O" && tablero[4]=="O" && tablero[6]=="O")) { 
        juga.innerHTML="Ganador: " +jugador2+"!!!"; 
        cont = 1000; 
        turno = 3; 
        gana = true; 
    } 
    if (tablero[0]=="X" && tablero[1]=="X" && tablero[2]=="X"){ 
            tablero[0].style.background=gato; 
            tablero[1].style.background=gato; 
            tablero[2].style.background=gato; 
        } 
} 
function otro(){ 
    window.location.reload(); 
} 