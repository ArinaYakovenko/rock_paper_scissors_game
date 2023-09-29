let player;
let computer;
let result;
let linkImg;
let computerImg;

const choiceBtns = document.querySelectorAll('.choice-btn');
const container = document.querySelector('.container');
const resultText = document.querySelector('.result-text');
const playAgainButton = document.querySelector('.play-again');

choiceBtns.forEach(button => button.addEventListener('click', () => {
        player = button.alt;
        if(button.alt === 'paper'){
            button.classList.add('slide-user-paper')
        }
        hideOtherBtns();
        computerTurn();
}));

playAgainButton.addEventListener('click', () => {
    result = null;
    resultText.textContent = 'Make your choice';
    playAgainButton.style.display = 'none';
    choiceBtns.forEach(button => {
        button.classList.remove('turn-off', 'slide-user', 'slide-user-paper', 'slide-device' );
    });
    
    if (computerImg) {
        computerImg.remove();
        computerImg = null;
    }
});

function hideOtherBtns() {
    choiceBtns.forEach(button => {
        if (button.alt !== player) {
            button.classList.add('turn-off');
        }
    });
}

function computerTurn() {
    const randomNum = Math.floor(Math.random() * 3) + 1;

    switch (randomNum) {
        case 1:
            computer = 'rock';
            linkImg = './img/rock.png'
            break;
        case 2:
            computer = 'paper';
            linkImg = './img/paper.png'
            break;
        case 3:
            computer = 'scissors';
            linkImg = './img/scissors.png'
            break;
    }

    computerImg = document.createElement('img');
    computerImg.src = linkImg;
    if(player === 'rock'){
        computerImg.classList.add('slide-user')
    } else{
        computerImg.classList.add('slide-device')
    }
    container.appendChild(computerImg);
    checkResult();
}

function checkResult() {
    if (player === computer) {
        result = 'tie';
        resultText.textContent = 'It\'s a tie!';
    } else if (
        (player === 'rock' && computer === 'scissors') ||
        (player === 'paper' && computer === 'rock') ||
        (player === 'scissors' && computer === 'paper')
    ) {
        result = 'win';
        resultText.textContent = 'You win!';
    } else {
        result = 'lose';
        resultText.textContent = 'You lose!';
    }
    playAgainButton.style.display = 'block';
}