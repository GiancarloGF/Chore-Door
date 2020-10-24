//Puerta numero 1.
let doorImage1=document.getElementById('door1');
// puerta numero 2.
let doorImage2= document.getElementById('door2');
// puerta numero 3.
let doorImage3=document.getElementById('door3');

// Funciones onclick de cada puerta.
doorImage1.onclick =function(){
    doorImage1.src=openDoor1;
};

doorImage2.onclick=()=>{
    doorImage2.src=openDoor2;
};

doorImage3.onclick=()=>{
    doorImage3.src=openDoor3;};
// Variables globales.

// Imagenes secundarias despues de abrir cada puerta.
let botDoorPath='https://content.codecademy.com/projects/chore-door/images/robot.svg';
let beachDoorPath='https://content.codecademy.com/projects/chore-door/images/beach.svg';
let spaceDoorPath='https://content.codecademy.com/projects/chore-door/images/space.svg';

let numClosedDoors=3;

let openDoor1;
let openDoor2;
let openDoor3;

// Funcion para generar un numero aleatorio.
let randomChoreDoorGenerator=()=>{
    let choreDoor=Math.floor(Math.random()*numClosedDoors);
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


randomChoreDoorGenerator();