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

function game() {
    let player = 0
    let computer = 0
    for (let i = 1; i <= 5; i++) {
        let round = playRound()
        if (round === "You win! Rock beats Scissors." || "You win! Paper beats Rock." || "You win! Scissors beat Paper.") {
            player++;
        }
        else if (round === "You lose! Paper beats Rock." || "You lose! Scissors beat Paper." || "You lose! Rock beats Scissors.") {
            computer++;
        }
    }
    if (player > computer) {
        return "You've won the game!"
    }
    else if (player === computer) {
        return "You've tied the game!"
    }
    else {
        return "You've lost the game!"
    }
}

console.log(game())