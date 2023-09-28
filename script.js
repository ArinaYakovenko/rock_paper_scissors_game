let player;
let computer;
let result;
console.log(result);

let clonedImage;

const choiceBtns = document.querySelectorAll('.choice-btn');
const container = document.querySelector('.container');
const resultText = document.querySelector('.result-text');
const playAgainButton = document.querySelector('.play-again');

choiceBtns.forEach(button => button.addEventListener('click', () => {
        player = button.alt;
        deleteOtherBtns();
        computerTurn();
}));

playAgainButton.addEventListener('click', () => {
    result = null;
    resultText.textContent = 'Make your choice';
    playAgainButton.style.display = 'none';
    choiceBtns.forEach(button => {
        button.style.display = 'block';
        button.classList.remove('turn-on', 'turn-off', 'correct', 'incorrect');
    });
    
    if (clonedImage) {
        clonedImage.remove();
        clonedImage = null;
    }
});

function deleteOtherBtns() {
    choiceBtns.forEach(button => {
        if (button.alt !== player) {
            button.classList.add('turn-off');
            button.addEventListener('transitionend', () => {
                button.style.display = 'none';
            });
        }
    });
}

function computerTurn() {
    const randomNum = Math.floor(Math.random() * 3) + 1;

    switch (randomNum) {
        case 1:
            computer = 'rock';
            break;
        case 2:
            computer = 'paper';
            break;
        case 3:
            computer = 'scissors';
            break;
    }

    choiceBtns.forEach(button => {
        if (button.alt === computer) {
            button.classList.add('turn-on');
            button.addEventListener('transitionend', () => {
                button.style.display = 'block';
            });
        }
        if (player === computer && button.alt === player) {
            clonedImage = button.cloneNode(true);
            container.appendChild(clonedImage);
        }
    });

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