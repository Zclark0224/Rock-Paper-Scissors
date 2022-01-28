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
const restartButton = document.querySelector('.restartButton');
const modalTitle = document.querySelector('.modalTitle');
const header = document.querySelector('.header');

function computerPlay() {
    var items = ['rock', 'paper', 'scissors'];
    var item = items[Math.floor(Math.random() * items.length)];
    return item;
}

rockButton.addEventListener('click', () => handleClick('rock'));
paperButton.addEventListener('click', () => handleClick('paper'));
scissorsButton.addEventListener('click', () => handleClick('scissors'));
restartButton.addEventListener('click', () => restartGame());

function playRound (playerSelection, computerSelection) {
    if (playerSelection == computerSelection){
        message.textContent = 'We tied. Try again.';
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
        updateHeader(playerScore, computerScore);
        
        if (gameOver()) {
            if(playerScore < computerScore){
                modalTitle.textContent = 'Game over! Computer wins!';
                retryModal.classList.add('active');
                overlay.classList.add('active');
            } else{
                modalTitle.textContent = 'Game over! Player wins!';
                retryModal.classList.add('active');
                overlay.classList.add('active');
            }
        }
    }
}

function restartGame() {
    playerScore = 0;
    pScore.textContent = playerScore;
    computerScore = 0;
    cScore.textContent = computerScore;
    message.textContent = 'Choose your weapon!';
    header.textContent = 'Can you defeat me?';
    header.style.color = '#00FF41';
    retryModal.classList.remove('active');
    overlay.classList.remove('active');
}

function updateHeader(playerScore, computerScore) {
    if (playerScore == 1 && playerScore > computerScore) {
        header.textContent = 'This is a mild inconvenience.';
        header.style.color = '#00FF41';
    } else if (playerScore == 2 && playerScore > computerScore) {
        header.textContent = 'Do not let your arrogance be your downfall.';        
        header.style.color = '#00FF41';
    } else if (playerScore == 3 && playerScore > computerScore) {
        header.textContent = 'I must have made some miscalculation.';
        header.style.color = '#00FF41';
    } else if (playerScore == 4 && playerScore > computerScore) {
        header.textContent = 'YOU CANNOT DEFEAT ME.';
        header.style.color = 'red';
    } else if (computerScore == 1 && computerScore > playerScore) {
        header.textcontent = 'You lack the ability to defeat me.';
        header.style.color = '#00FF41';
    } else if (computerScore == 2 && computerScore > playerScore) {
        header.textContent = 'Are you even trying to win?';
        header.style.color = '#00FF41';
    } else if (computerScore == 3 && computerScore > playerScore) {
        header.textContent = 'This is starting to feel like a waste of my time.';
        header.style.color = '#00FF41';
    } else if (computerScore == 4 && computerScore > playerScore) {
        header.textContent = 'Stop delaying the inevitable.';
        header.style.color = '#00FF41';
    }
}