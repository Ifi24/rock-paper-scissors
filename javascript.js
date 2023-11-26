const buttons = document.querySelectorAll('.button');
let playerChoice

function getComputerChoice(choice) {
    let hand = ["rock", "paper", "scissors"];
    choice = hand[(Math.floor(Math.random() * 3))];
    return choice;
}

let playerScore = 0;
let computerScore = 0;

function playRound(playerSelection, computerSelection) {

    if ((playerSelection == "rock" && computerSelection == "scissors") || 
        (playerSelection == "scissors" && computerSelection == "paper") ||
        (playerSelection == "paper" && computerSelection == "rock")) {
        playerScore += 1
        document.getElementById("playerResults").innerHTML = playerScore
        document.getElementById("roundResults").innerHTML = "You win!"

        if (playerScore == 5) {
            document.getElementById("roundResults").innerHTML = "You've won against the computer! Refresh the page to restart."
            buttons.forEach((button) => {
                button.removeEventListener('click', getPlayerChoice)
            })
        }
        }
    else if (playerSelection === computerSelection ) {
        document.getElementById("roundResults").innerHTML = "It\'s a tie!"
    }
    else {
        computerScore += 1
        document.getElementById("computerResults").innerHTML = computerScore
        document.getElementById("roundResults").innerHTML = "You lost!"
        
        if (computerScore == 5) {
            document.getElementById("roundResults").innerHTML = "You've lost against the computer! Refresh the page to restart."
            buttons.forEach((button) => {
                button.removeEventListener('click', getPlayerChoice)
            })
        }
    }
}

function getPlayerChoice(e) {
    let playerSelection = e.target.id;
    let computerSelection = getComputerChoice();
    playRound(playerSelection, computerSelection)
}

buttons.forEach((button) => {
    button.addEventListener('click', getPlayerChoice)
})