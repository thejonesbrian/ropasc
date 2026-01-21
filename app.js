console.log("Hello Rock Paper Scissors");
let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    let randomNumber = Math.floor(Math.random() * 3);
    const pcChoice = '';
    if (randomNumber === 0) {
        pcChoice = 'rock'
    } else if (randomNumber === 1) {
        pcChoice = 'paper';
    } else if (randomNumber === 2) {
        pcChoice = 'scissors';
    }
    //console.log(pcChoice)
    return pcChoice;
}
function getHumanChoice() {
    const choice = prompt("Enter your choice (rock/paper/scissors): ");
    //console.log(choice)
    return choice;
}
function playRound(humanChoice, computerChoice) {
    console.log(`I choose: ${humanChoice} PC choose: ${computerChoice}`);
    //draw instance
    if (humanChoice === computerChoice) {
        console.log('Tie');
    }
    //human choice of rock
    if (humanChoice === "rock" && computerChoice === "paper") {
        computerScore++;
        console.log('Computer wins!')
    } else if (humanChoice === "paper" && computerChoice === "rock") {
        humanScore++;
        console.log('You win');
    }
    //human choice of paper
    if (humanChoice === "paper" && computerChoice === "scissors") {
        computerScore++;
        console.log('Computer wins!')
    } else if (humanChoice === "scissors" && computerChoice === "paper") {
        humanScore++;
        console.log('You win');
    }
    //human choice of scissors
    if (humanChoice === "scissors" && computerChoice === "rock") {
        humanScore++;
        console.log('Computer wins!')
    } else if (humanChoice === "rock" && computerChoice === "scissors") {
        computerScore++;
        console.log('You win');
    }

}
function playGame() {

    for (let i = 0; i < 5; i++) {
        let human = getHumanChoice().toLowerCase();
        let computer = getComputerChoice();
        playRound(human, computer);
    }
    console.log(`Human: ${humanScore} VS Computer: ${computerScore}`);
}
const a = ["John", "Apple", "Peter"];

a.push("Jacob");

console.log(a[3]);
//playGame();

const selectId = document.querySelector("#word");
const content = document.createElement("div");
content.innerHTML = "<h3>The words that make up this content.</h3>";
selectId.appendChild(content);