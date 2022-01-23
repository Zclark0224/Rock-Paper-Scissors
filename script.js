let playerSelection;
let computerSelection;
let playerScore = 0;
let computerScore = 0;

const rockButton = document.querySelector('.rock');
const paperButton = document.querySelector('.paper');
const scissorsButton = document.querySelector('.scissors');

function computerPlay() {
    var items = ['rock', 'paper', 'scissors'];
    var item = items[Math.floor(Math.random() * items.length)];
    return item;
}

rockButton.addEventListener('click', () => handleClick('rock'));
paperButton.addEventListener('click', () => handleClick('paper'));
scissorsButton.addEventListener('click', () => handleClick('scissors'));

function playRound (playerSelection, computerSelection) {
    if (playerSelection == computerSelection){
        console.log('You tied! Try again!');
        console.log(`You: ${playerScore} Computer: ${computerScore}`);
    } else if (playerSelection == 'rock' && computerSelection == 'paper') {
        computerScore += 1;
        console.log('You lose! Paper beats Rock');
        console.log(`You: ${playerScore} Computer: ${computerScore}`);
    } else if (playerSelection == 'rock' && computerSelection == 'scissors') {
        playerScore += 1;
        console.log('You win! Rock beats Scissors');
        console.log(`You: ${playerScore} Computer: ${computerScore}`);
    } else if (playerSelection == 'scissors' && computerSelection == 'rock') {
        computerScore += 1;
        console.log('You lose! Rock beats Scissors');
        console.log(`You: ${playerScore} Computer: ${computerScore}`);
    } else if (playerSelection == 'scissors' && computerSelection == 'paper') {
        playerScore += 1;
        console.log('You win! Scissors beats Paper');
        console.log(`You: ${playerScore} Computer: ${computerScore}`);
    } else if (playerSelection == 'paper' && computerSelection == 'scissors') {
        computerScore += 1;
        console.log('You lose! Scissors beats Paper');
        console.log(`You: ${playerScore} Computer: ${computerScore}`);
    } else if (playerSelection == 'paper' && computerSelection == 'rock') {
        playerScore += 1;
        console.log('You win! Paper beats Rock');
        console.log(`You: ${playerScore} Computer: ${computerScore}`);
    }
}

function gameOver() {
    return playerScore === 5 || computerScore === 5;
}

function handleClick(playerSelection) {
    if (gameOver()) {
        console.log("Game over!")
    }
    computerSelection = computerPlay();
    playRound(playerSelection, computerSelection);
    
    if (gameOver()) {
        if(playerScore < computerScore){
            console.log('Game over! Computer wins!');
        } else{
            console.log('Game over! Player wins!');
        }
    }
    
}