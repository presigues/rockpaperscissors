
aichoice;
playerchoice;
   
   
function start(){

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  let randomInt = getRandomInt(1, 3);
  
 switch(randomInt){
    case 1:
    aichoice="rock";
    console.log("ai chose rock");
    break;
    case 2:
    aichoice="paper";
    console.log("ai chose paper");
    break;
    case 3:
    aichoice="scissors";
    console.log("ai chose scissors");
    break;
 }

}


function roc(){
playerchoice="rock";
console.log("player chose rock");
start();
}
function pap() {
playerchoice="paper";
console.log("player chose paper"); 
start(); 
}
function sci(){
playerchoice="scissors";
console.log("player chose scissors");
start();

}

   


  // paper 1 beats rock 3
  // scissors 2 beats paper 1
  // rock 3 beats scissors 2
