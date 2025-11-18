console.log("Hello World");
let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    let randomNumber = Math.floor(Math.random() * 3);
    if (randomNumber === 0) {
        return 'rock';
    } else if (randomNumber === 1) {
        return 'paper';
    } else if (randomNumber === 2) {
        return 'scissors';
    }
}
function getHumanChoice() {
    return prompt("Enter your choice (rock/paper/scissors): ");
}
function playRound(humanChoice, computerChoice) {
    //draw instance
    if (humanChoice === computerChoice) {
        console.log('Tie');
    }
    //human choice of rock
    if (humanChoice === "rock" && computerChoice === "paper") {
        console.log('Computer wins!')
    } else if (humanChoice === "paper" && computerChoice === "rock") {
        console.log('You win');
    }
    //human choice of paper
    if (humanChoice === "paper" && computerChoice === "scissors") {
        console.log('Computer wins!')
    } else if (humanChoice === "scissors" && computerChoice === "paper") {
        console.log('You win');
    }
    //human choice of scissors
    if (humanChoice === "scissors" && computerChoice === "rock") {
        console.log('You win!')
    } else if (humanChoice === "rock" && computerChoice === "scissors") {
        console.log('Computer win');
    }

}
let human = getHumanChoice().toLowerCase();
let computer = getComputerChoice();