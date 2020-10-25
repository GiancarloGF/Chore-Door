//Referenciando a los elementos img del HTML.
let doorImage1=document.getElementById('door1');
let doorImage2= document.getElementById('door2');
let doorImage3=document.getElementById('door3');

// Funciones onclick de cada puerta.
doorImage1.onclick =function(){

    // doorImage1.src=botDoorPath;
    // Antes del primer click doorImage1.src===closedDoorPath. En el segundo click  doorImage.src===openDoor1.
    if (!isClicked(doorImage1)&&currentlyPlaying===true) {
        doorImage1.src=openDoor1;
        playDoor(doorImage1);
        // startRound();
    };
};

doorImage2.onclick=function(){
    // doorImage2.src=beachDoorPath;
    // Antes del primer click doorImage2.src===closedDoorPath. En el segundo click  doorImage.src===openDoor2.
    if (!isClicked(doorImage2)&&currentlyPlaying===true){
        doorImage2.src=openDoor2;
        playDoor(doorImage2);
        // startRound();
    };
};

doorImage3.onclick=function(){
    // doorImage3.src=spaceDoorPath;
    // Antes del primer click doorImage3.src===closedDoorPath. En el segundo click  doorImage.src===openDoor3.
    if (!isClicked(doorImage3)&&currentlyPlaying===true){
        doorImage3.src=openDoor3;
        playDoor(doorImage3);
        // startRound();
    };

};

// startButton.onclick = () => {
//     startRound();
//   };




// // Funcion GameOver
let gameOver=function(status){
    
        if (status==='win') {
            startButton.innerHTML='You win! Play again?';
            
        }else{
            startButton.innerHTML='Game over! Play again?';
            
        };

        currentlyPlaying=false;

        
        
    
};
// // Variables globales.

let currentlyPlaying=true;




// // Variable que referencia al div con id='start'.



let startButton=document.getElementById('start');
// Evento para el boton. Cuando se haga click se llama a la funcion que reinicia todo.
startButton.onclick = () => {
    startRound();
  };



// // Imagen de la puerta cerrada.
let closedDoorPath='https://content.codecademy.com/projects/chore-door/images/closed_door.svg';

// // Imagenes secundarias despues de abrir cada puerta.
let botDoorPath='https://content.codecademy.com/projects/chore-door/images/robot.svg';
let beachDoorPath='https://content.codecademy.com/projects/chore-door/images/beach.svg';
let spaceDoorPath='https://content.codecademy.com/projects/chore-door/images/space.svg';

// // Numero de puertas al inicio.
let numClosedDoors=3;

// Funcion para reiniciar todo apretando el boton.
let startRound=function() {
    numClosedDoors=3;
    doorImage1.src=closedDoorPath;
    doorImage2.src=closedDoorPath;
    doorImage3.src=closedDoorPath;

    startButton.innerHTML='Good luck!';
    currentlyPlaying=true;
    
    randomChoreDoorGenerator();
};

// // El nombre de cada puerta abierta en variables.
let openDoor1;
let openDoor2;
let openDoor3;

// // Funcion para generar un numero aleatorio.
let randomChoreDoorGenerator=()=>{
    let choreDoor= Math.floor(Math.random() * numClosedDoors);
    if (choreDoor===0) {
        openDoor1=botDoorPath;
        openDoor2=beachDoorPath;
        openDoor3=spaceDoorPath;

        
    } else if(choreDoor===1) {
        openDoor2=botDoorPath;
        openDoor1=beachDoorPath;
        openDoor3=spaceDoorPath;
        
    }else{openDoor3=botDoorPath;
        openDoor2=beachDoorPath;
        openDoor1=spaceDoorPath;}

};
// Funcion para cuando la puerta abierta aparesca el bot.
let isBot=function(door){
    if (door.src===botDoorPath) {
        return true;
        
    } else {
        return false;
    };
};

// Funcion para limitar el numero de clicks en cada img/puerta.
let isClicked=function(door){
    if (door.src===closedDoorPath) {
        return false;
        
    }else{return true;}; 

};

// // Funcion para disminuir el numero de puertas abiertas y llamar a gameOver().
let playDoor= function(door){
    numClosedDoors--;
    if (numClosedDoors===0) {
        gameOver('win');
}else if(isBot(door)){
        gameOver();
};
};




startRound();
// randomChoreDoorGenerator();
