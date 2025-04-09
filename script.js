function getComputerChoice(){
    let choice = Math.floor(Math.random() * 3);
    
    switch(choice){
        case 0:
            return "rock";
        case 1:
            return "paper";

        case 2:
            return "scissors";
    }

}

function getHumanChoice(){
    let choice = prompt("Choose one move(Rock, Paper, Scissors)").toLowerCase();
    while(!validateInput(choice)){
        alert("Wrong Input! Please select a valid option");
        choice = prompt("Choose one move (Rock, Paper, Scissors)").toLowerCase( );
    }
    return choice;
}

function validateInput(value){

    if(value === "rock" || value === "paper" || value === "scissors"){
            return true;
    }

    return false;
}

function playRound(humanChoice, computerChoice){

    switch(humanChoice){
        case "rock":
            if(computerChoice === "rock"){
                console.log("It's tie. No winner!");
                break;
            } else if(computerChoice === "paper"){
                computerScore++;
                console.log("You lose! Paper beats Rock");
                break;
            } else{
                humanScore++;
                console.log("You win! Rock beats Scissors");
                break;
            }
        
        case "paper":
            if(computerChoice === "paper"){
                console.log("It's tie. No winner!");
                break;
            } else if(computerChoice === "scissors"){
                computerScore++;
                console.log("You lose! Scissors beats paper");
                break;
            } else{
                humanScore++;
                console.log("You win! Paper beats rock");
                break;
            }

        case "scissors":
            if(computerChoice === "scissors"){
                console.log("It's tie. No winner!");
                break;
            } else if(computerChoice === "rock"){
                computerScore++;
                console.log("You lose! Rock beats Scissors");
                break;
            } else{
                humanScore++;
                console.log("You win! Scissor beats paper");
                break;
            }
    }


}

function playGame(){

    for(let i = 0; i < 5; i++){
        playRound(getHumanChoice(), getComputerChoice());
        console.log("Your Score: " + humanScore);
        console.log("Computer Score: " + computerScore);
    }

    if(humanScore > computerScore){
        console.log("You won the game. Congratulations!");
    }
    else if(computerScore > humanScore){
        console.log("You lost the game!");
    }else{
        console.log("It's tie.");
    }
}

let humanScore = 0;
let computerScore = 0;

playGame();



