let rock = false
let paper = false
let scissors = false

let playerrock = false
let playerpaper = false
let playerscissors = false

function start(){

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  let randomInt = getRandomInt(1, 3);
  
  if(randomInt == 1){
    rock = true
    console.log("rock")
  }
  if(randomInt == 2){
    paper = true
    console.log("paper")
  }
  if(randomInt == 3){
    scissors = true
    console.log("scissors")
  }
}

  function sci(){
playerscissors = true
console.log("playersci")
  }
  function roc() {
    playerrock = true
    console.log("playerrock")
  }
  function pap(){
    playerpaper = true
console.log("playerpap")

if(rock == true && playerscissors == true){
    console.log("you lose")
    rock = false
    playerscissors = false
}
if(paper == true && playerscissors == true){
    console.log("you win")
    paper = false
    playerscissors = false
}
if(scissors == true && playerscissors == true){
    console.log("tie")

    scissors = false
    playerscissors = false
}
if(paper == true && playerrock == true){
    console.log("you lose")
    paper = false
    playerrock = false
}
if(rock == true && playerrock == true){
    console.log("tie")
    rock = false
    playerrock = false
}
if(scissors == true && playerrock == true){
    console.log("you win")
    scissors = false
    playerrock = false
}
if(rock == true && playerpaper == true){
    console.log("you win")
    rock = false
    playerpaper = false
}
if(paper == true && playerpaper == true){
    console.log("tie")
    paper = false
    playerpaper = false
}
if(scissors == true && playerpaper == true){
    console.log("you lose")
    scissors = false
    playerpaper = false
}






  }


  // paper 1 beats rock 3
  // scissors 2 beats paper 1
  // rock 3 beats scissors 2
