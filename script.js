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

function checkScore(score){
    if(score === 5)
        return true;
}



function playRound(humanChoice, computerChoice){
    const infoText = document.querySelector("#information-text");
    const resultText = document.querySelector("#result-text");
    switch(humanChoice){
        case "rock":
            if(computerChoice === "rock"){
                infoText.textContent = "It's tie. No winner!";
                break;
            } else if(computerChoice === "paper"){
                computerScore++;
                computer_Score.textContent = computerScore;
                infoText.textContent = "You lose! Paper beats Rock";
                if(checkScore(computerScore))
                {
                    alert("You lost!");
                    resultText.textContent = "You lost!";
                    resultText.style.visibility = "visible";
                    return;
                }
                break;
            } else{
                humanScore++;
                yourScore.textContent = humanScore;
                infoText.textContent = "You win! Rock beats Scissors";
                if(checkScore(humanScore))
                {
                    alert("You Won!");
                    resultText.textContent = "You Won!";
                    resultText.style.visibility = "visible";
                    return;
                }
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
                if(checkScore(computerScore))
                {
                    alert("You lost!");
                    resultText.textContent = "You lost!";
                    resultText.style.visibility = "visible";
                    return;
                }
                break;
            } else{
                humanScore++;
                yourScore.textContent = humanScore;
                infoText.textContent = "You win! Paper beats rock";
                if(checkScore(humanScore))
                {
                    alert("You Won!");
                    resultText.textContent = "You Won!";
                    resultText.style.visibility = "visible";
                    return;
                }
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
                if(checkScore(computerScore))
                {
                    alert("You lost!");
                    resultText.textContent = "You lost!";
                    resultText.style.visibility = "visible";
                    return;
                }
                break;
            } else{
                humanScore++;
                yourScore.textContent = humanScore;
                infoText.textContent = "You win! Scissor beats paper";
                if(checkScore(humanScore))
                {
                    alert("You Won!");
                    resultText.textContent = "You Won!";
                    resultText.style.visibility = "visible";
                    return;
                }
                break;
            }
    }


}

function clearGame(){
    humanScore = 0;
    computerScore = 0;

    yourScore.textContent = "0";
    computer_Score.textContent = "0";

    const infoText = document.querySelector("#information-text");
    const resultText = document.querySelector("#result-text");

    infoText.textContent = "Choose one:";
    resultText.style.visibility = "hidden";
}

let humanScore = 0;
let computerScore = 0;

// playGame();

const btnRock = document.querySelector("#rock-button");
const btnPaper = document.querySelector("#paper-button");
const btnScissors = document.querySelector("#scissors-button");

btnRock.addEventListener("click", () => {
    if(checkScore(humanScore) || checkScore(computerScore))
    {
        alert("The Game is Over! You can play again with Reset Game button");
        return;
    }
    playRound("rock", getComputerChoice());
});

btnPaper.addEventListener("click", () => {
    if(checkScore(humanScore) || checkScore(computerScore))
    {
        alert("The Game is Over! You can play again with Reset Game button");
        return;
    }
    playRound("paper", getComputerChoice());
});

btnScissors.addEventListener("click", () => {
    if(checkScore(humanScore) || checkScore(computerScore))
    {
        alert("The Game is Over! You can play again with Reset Game button");
        return;
    }
    playRound("scissors", getComputerChoice());
});

const yourScore = document.querySelector("#your-score")
const computer_Score = document.querySelector("#computer-score")

const btnReset = document.querySelector("#reset-button");
btnReset.addEventListener("click", clearGame);

