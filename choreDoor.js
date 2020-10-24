//Puerta numero 1.
let doorImage1=document.getElementById('door1');
// puerta numero 2.
let doorImage2= document.getElementById('door2');
// puerta numero 3.
let doorImage3=document.getElementById('door3');

// Funciones onclick de cada puerta.
doorImage1.onclick =function(){
    doorImage1.src=botDoorPath;
};

doorImage2.onclick=()=>{
    doorImage2.src=beachDoorPath;
};

doorImage3.onclick=()=>{
    doorImage3.src=spaceDoorPath;
};

// Imagenes secundarias despues de abrir cada puerta.
let botDoorPath='https://content.codecademy.com/projects/chore-door/images/robot.svg';
let beachDoorPath='https://content.codecademy.com/projects/chore-door/images/beach.svg';
let spaceDoorPath='https://content.codecademy.com/projects/chore-door/images/space.svg';

