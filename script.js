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

// function getHumanChoice(){
//     let choice = prompt("Choose one move(Rock, Paper, Scissors)").toLowerCase();
//     while(!validateInput(choice)){
//         alert("Wrong Input! Please select a valid option");
//         choice = prompt("Choose one move (Rock, Paper, Scissors)").toLowerCase( );
//     }
//     return choice;
// }

function validateInput(value){

    if(value === "rock" || value === "paper" || value === "scissors"){
            return true;
    }

    return false;
}

function playRound(humanChoice, computerChoice){
    const infoText = document.querySelector("#information-text");
    switch(humanChoice){
        case "rock":
            if(computerChoice === "rock"){
                infoText.textContent = "It's tie. No winner!";
                break;
            } else if(computerChoice === "paper"){
                computerScore++;
                computer_Score.textContent = computerScore;
                infoText.textContent = "You lose! Paper beats Rock";
                break;
            } else{
                humanScore++;
                yourScore.textContent = humanScore;
                infoText.textContent = "You win! Rock beats Scissors";
                break;
            }
        
        case "paper":
            if(computerChoice === "paper"){
                infoText.textContent = "It's tie. No winner!";
                break;
            } else if(computerChoice === "scissors"){
                computerScore++;
                computer_Score.textContent = computerScore;
                infoText.textContent = "You lose! Scissors beats paper";
                break;
            } else{
                humanScore++;
                yourScore.textContent = humanScore;
                infoText.textContent = "You win! Paper beats rock";
                break;
            }

        case "scissors":
            if(computerChoice === "scissors"){
                infoText.textContent = "It's tie. No winner!";
                break;
            } else if(computerChoice === "rock"){
                computerScore++;
                computer_Score.textContent = computerScore;
                infoText.textContent = "You lose! Rock beats Scissors";
                break;
            } else{
                humanScore++;
                yourScore.textContent = humanScore;
                infoText.textContent = "You win! Scissor beats paper";
                break;
            }
    }


}

// function playGame(){

//     for(let i = 0; i < 5; i++){
//         playRound(getHumanChoice(), getComputerChoice());
//         console.log("Your Score: " + humanScore);
//         console.log("Computer Score: " + computerScore);
//     }

//     if(humanScore > computerScore){
//         console.log("You won the game. Congratulations!");
//     }
//     else if(computerScore > humanScore){
//         console.log("You lost the game!");
//     }else{
//         console.log("It's tie.");
//     }
// }

let humanScore = 0;
let computerScore = 0;

// playGame();

const btnRock = document.querySelector("#rock-button");
const btnPaper = document.querySelector("#paper-button");
const btnScissors = document.querySelector("#scissors-button");

btnRock.addEventListener("click", () => {
    playRound("rock", getComputerChoice());
});


btnPaper.addEventListener("click", () => {
    playRound("paper", getComputerChoice());
});

btnScissors.addEventListener("click", () => {
    playRound("scissors", getComputerChoice());
});

const yourScore = document.querySelector("#your-score")
const computer_Score = document.querySelector("#computer-score")


