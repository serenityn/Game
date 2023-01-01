
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
    } else {
        return "You Tie!";
    }
    
}
const playerSselection = prompt();
const computerSelection = getComputerChoice();
console.log(playRound(playerSselection, computerSelection));