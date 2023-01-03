
let playerPrompt = prompt("Enter Rock, Paper, or Scissors");
const computerSelection = getComputerChoice();
const playerSelection = playerPrompt.toLowerCase();
const fiveRounds = playRound();

console.log(playRound(playerSselection, computerSelection));
function getComputerChoice() {
    let arrGame = ["rock", "paper", "scissors"];
    let randGame = arrGame[Math.floor(Math.random() * arrGame.length)];
    return randGame;
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection === "rock" && computerSelection ==="scissors") {
        return "You Win! Rock beats Scissors.";
    } else if (playerSelection === "rock" && computerSelection === "paper") {
        return "You Lose! Paper beats Rock.";
    } else if (playerSelection === "paper" && computerSelection === "rock") {
        return "You Win! Paper beats Rock.";
    } else if (playerSelection === "paper" && computerSelection === "scissors") {
        return "You Lose! Scissors beats Paper.";
    } else if (playerSelection === "scissors" && computerSelection === "paper") {
        return "You Win! Scissors beats Paper.";
    } else if (playerSelection === "scissors" && computerSelection === "rock") {
        return "You Lose! Rock beats Scissors.";
    } else {
        return "You Tie!";
    }
    
}



function game(fiveRounds) {
    for (let i = 0; i < 5; i++) {

    }
}