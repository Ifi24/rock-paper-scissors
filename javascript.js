let hand = ["rock", "paper", "scissors"];

function getComputerChoice(choice) {
    choice = hand[(Math.floor(Math.random() * 3))];
    return choice;
}

function playRound(playerSelection, computerSelection) {
    computerSelection = getComputerChoice();
    playerSelection = prompt("Rock, paper or scissors?").toLowerCase()
    if (playerSelection === "rock" && computerSelection === "scissors") {
        return "You win! Rock beats Scissors."
    }
    else if (playerSelection === "rock" && computerSelection === "paper") {
        return "You lose! Paper beats Rock."
    }
    else if (playerSelection === "paper" && computerSelection === "scissors") {
        return "You lose! Scissors beat Paper."
    }
    else if (playerSelection === "paper" && computerSelection === "rock") {
        return "You win! Paper beats Rock."
    }
    else if (playerSelection === "scissors" && computerSelection === "paper") {
        return "You win! Scissors beat Paper."
    }
    else if (playerSelection === "scissors" && computerSelection === "rock") {
        return "You lose! Rock beats Scissors."
    }
    else if (playerSelection === computerSelection) {
        return "It's a tie!"
    }
    else {
        return "There's a mistake in your input! Refresh the page and try again."
    }

}

console.log(playRound())