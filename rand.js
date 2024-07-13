const aichoice = "unknown";

const playerchoice = "unknown";

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
}
function pap() {
    playerchoice="paper";
console.log("player chose paper");  
}
function sci(){
playerchoice="scissors";
console.log("player chose scissors");

}

   


  // paper 1 beats rock 3
  // scissors 2 beats paper 1
  // rock 3 beats scissors 2
