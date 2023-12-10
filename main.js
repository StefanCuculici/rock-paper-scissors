let player=null;
let computer=null;
let rock=document.getElementById("rock");
let paper=document.getElementById("paper");
let scissors=document.getElementById("scissors");
let result=document.getElementById("result");
let computerResult=document.getElementById("computer");
let playerWinCount=document.getElementById("playerWinCount");
let computerWinCount=document.getElementById("ComputerWinCount");
let round=document.getElementById("round");
let roundCount=2;
let computerCount=1;
let playerCount=1;


function getComputerInput(random) {

    return Math.floor(Math.random()*random);

}

function game() {

    rock.onclick=function() {

        player=0;
        computer=getComputerInput(3);
        //console.log("Rock");
        win();

    }

    paper.onclick=function() {

        player=1;
        computer=getComputerInput(3);
        //console.log("Paper");
        win();

    }

    scissors.onclick=function() {

        player=2;
        computer=getComputerInput(3);
        //console.log("Scissors");
        win();

    }

}

function win() {

    if(player==computer) {

        console.log("Draw");
        computerResult.innerHTML="";
        result.innerHTML="Draw";
        round.innerHTML=roundCount++;
        
    }

    if(player==0 && computer==1) {

        console.log("Computer has Paper");
        console.log("Lose- Paper beats Rock")
        computerResult.innerHTML="Computer has Paper";
        result.innerHTML="Lose- Paper beats Rock";
        computerWinCount.innerHTML=computerCount++;
        round.innerHTML=roundCount++;

    }

    if(player==1 && computer==2) {
        console.log("Computer has Scissors");
        console.log("Lose- Scissors beats Paper")
        computerResult.innerHTML="Computer has Scissors";
        result.innerHTML="Lose- Scissors beats Paper";
        computerWinCount.innerHTML=computerCount++;
        round.innerHTML=roundCount++;

    }

    if(player==2 && computer==0) {

        console.log("Computer has Rock");
        console.log("Lose- Rock beats Scissors")
        computerResult.innerHTML="Computer has Rock";
        result.innerHTML="Lose- Rock beats Scissors";
        computerWinCount.innerHTML=computerCount++;
        round.innerHTML=roundCount++;

    }

    if(player==0 && computer==2) {

        console.log("Computer has Scissors");
        console.log("Win- Rock beats Scissors")
        computerResult.innerHTML="Computer has Scissors";
        result.innerHTML="Win- Rock beats Scissors";
        playerWinCount.innerHTML=playerCount++;
        round.innerHTML=roundCount++;

    }

    if(player==2 && computer==1) {

        console.log("Computer has Paper");
        console.log("Win- Rock beats Scissors")
        computerResult.innerHTML="Computer has Paper";
        result.innerHTML="Win- Rock beats Scissors";
        playerWinCount.innerHTML=playerCount++;
        round.innerHTML=roundCount++;

    }

    if(player==1 && computer==0) {
        console.log("Computer has Rock");
        console.log("Win- Paper beats Rock")
        computerResult.innerHTML="Computer has Rock";
        result.innerHTML="Win- Paper beats Rock";
        playerWinCount.innerHTML=playerCount++;
        round.innerHTML=roundCount++;

    }

}

game();
