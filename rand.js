
aichoice;
playerchoice;

aiscore = 0;
playerscore = 0;
   
   
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

function theend(){
    document.getElementById("end").style.display = "block"
}

function match(){

   

        if (playerchoice=="rock"){

            document.getElementById("plrrock").style.opacity = "1";

            if (aichoice=="rock"){ // tie
                console.log("tie");
                document.getElementById("tie").style.opacity = "1";
                document.getElementById("bottie").style.opacity= "1";
                document.getElementById("bot").style.opacity = "0";

                document.getElementById("airock").style.opacity = "1";
                }
            if(aichoice=="paper"){// lose
                console.log("AI wins");
                document.getElementById("aiwin").style.opacity = "1";
                document.getElementById("botwin").style.opacity= "1";
                document.getElementById("bot").style.opacity = "0";

                document.getElementById("aipaper").style.opacity = "1";
            } 
           if(aichoice=="scissors"){ // win
                console.log("Player wins"); 
                document.getElementById("youwin").style.opacity = "1";
                document.getElementById("botlose").style.opacity= "1";
                document.getElementById("bot").style.opacity = "0";

                document.getElementById("aiscissors").style.opacity = "1";
            }

        }

        if(playerchoice=="paper"){

            document.getElementById("plrpaper").style.opacity = "1";

            if (aichoice=="rock"){ // tie
                console.log("player wins");
                document.getElementById("youwin").style.opacity = "1";
                document.getElementById("botlose").style.opacity= "1";
                document.getElementById("bot").style.opacity = "0";

                document.getElementById("airock").style.opacity = "1";
                }
            if(aichoice=="paper"){// lose
                console.log("tie");
                document.getElementById("tie").style.opacity = "1";
                document.getElementById("bottie").style.opacity= "1";
                document.getElementById("bot").style.opacity = "0";

                document.getElementById("aipaper").style.opacity = "1";
            } 
           if(aichoice=="scissors"){ // win
                console.log("ai wins"); 
                document.getElementById("aiwin").style.opacity = "1";
                document.getElementById("botwin").style.opacity= "1";
                document.getElementById("bot").style.opacity = "0";

                document.getElementById("aiscissors").style.opacity = "1";
            }
    }


        if(playerchoice=="scissors"){

            document.getElementById("plrscissors").style.opacity = "1";

            if (aichoice=="rock"){ // tie
                console.log("ai wins");
                document.getElementById("aiwin").style.opacity = "1";
                document.getElementById("botwin").style.opacity= "1";
                document.getElementById("bot").style.opacity = "0";

                document.getElementById("airock").style.opacity = "1";
                }
            if(aichoice=="paper"){// lose
                console.log("player wins");
                document.getElementById("youwin").style.opacity = "1";
                document.getElementById("botlose").style.opacity= "1";
                document.getElementById("bot").style.opacity = "0";

                document.getElementById("aipaper").style.opacity = "1";
            } 
           if(aichoice=="scissors"){ // win
                console.log("tie"); 
                document.getElementById("tie").style.opacity = "1";
                document.getElementById("bottie").style.opacity= "1";
                document.getElementById("bot").style.opacity = "0";

                document.getElementById("aiscissors").style.opacity = "1";
            }
        }

    }



function gameover(){

    document.getElementById("paperplayer").style.display = "none";
    document.getElementById("rockplayer").style.display = "none";
    document.getElementById("scissorplayer").style.display = "none";
    document.getElementById("selecttitle").style.display = "none";
    

}

function reseting(){
    document.getElementById("youwin").style.opacity = "0";
    document.getElementById("aiwin").style.opacity = "0";
    document.getElementById("tie").style.opacity = "0";

    document.getElementById("end").style.display = "none"

    document.getElementById("paperplayer").style.display = "block";
    document.getElementById("rockplayer").style.display = "block";
    document.getElementById("scissorplayer").style.display = "block";
    document.getElementById("selecttitle").style.display = "block";
    playerchoice = "";
    aichoice = "";

    document.getElementById("botlose").style.opacity= "0";
    document.getElementById("botwin").style.opacity= "0";
    document.getElementById("bottie").style.opacity= "0";
    document.getElementById("bot").style.opacity = "1";

    document.getElementById("plrrock").style.opacity = "0";
    document.getElementById("plrpaper").style.opacity = "0";
    document.getElementById("plrscissors").style.opacity = "0";

    document.getElementById("airock").style.opacity = "0";
    document.getElementById("aipaper").style.opacity = "0";
    document.getElementById("aiscissors").style.opacity = "0";



}



function roc(){
playerchoice="rock";
console.log("player chose rock");
start();
match();
gameover();
theend();
}
function pap() {
playerchoice="paper";
console.log("player chose paper"); 
start(); 
match();
gameover();
theend();
}
function sci(){
playerchoice="scissors";
console.log("player chose scissors");
start();
match();
gameover();
theend();
}


   


  // paper 1 beats rock 3
  // scissors 2 beats paper 1
  // rock 3 beats scissors 2
