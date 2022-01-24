let playerSelection;
let computerSelection;
let playerScore = 0;
let computerScore = 0;

const rockButton = document.querySelector('.rock');
const paperButton = document.querySelector('.paper');
const scissorsButton = document.querySelector('.scissors');
const message = document.querySelector('.message');
const cScore = document.querySelector('.cScore');
const pScore = document.querySelector('.pScore');

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
        message.textContent = 'You tied! Try again!';
    } else if (playerSelection == 'rock' && computerSelection == 'paper') {
        computerScore += 1;
        cScore.textContent = computerScore;
        message.textContent = 'You lose! Paper beats Rock';
    } else if (playerSelection == 'rock' && computerSelection == 'scissors') {
        playerScore += 1;
        pScore.textContent = playerScore;
        message.textContent = 'You win! Rock beats Scissors';
    } else if (playerSelection == 'scissors' && computerSelection == 'rock') {
        computerScore += 1;
        cScore.textContent = computerScore;
        message.textContent = 'You lose! Rock beats Scissors';
    } else if (playerSelection == 'scissors' && computerSelection == 'paper') {
        playerScore += 1;
        pScore.textContent = playerScore;
        message.textContent = 'You win! Scissors beats Paper';
    } else if (playerSelection == 'paper' && computerSelection == 'scissors') {
        computerScore += 1;
        cScore.textContent = computerScore;
        message.textContent = 'You lose! Scissors beats Paper';
    } else if (playerSelection == 'paper' && computerSelection == 'rock') {
        playerScore += 1;
        pScore.textContent = playerScore;
        message.textContent = 'You win! Paper beats Rock';
    }
}

function gameOver() {
    return playerScore === 5 || computerScore === 5;
}

function handleClick(playerSelection) {
    if (gameOver()) {
        message.textContent = "Game is already over!";
    } else {
        computerSelection = computerPlay();
        playRound(playerSelection, computerSelection);
        
        if (gameOver()) {
            if(playerScore < computerScore){
                message.textContent = 'Game over! Computer wins!';
            } else{
                message.textContent = 'Game over! Player wins!';
            }
        }
    }
}