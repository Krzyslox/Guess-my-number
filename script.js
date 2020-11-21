'use strict';

// let selector = document.querySelector('.message');
// selector.textContent = 'Correct Number';
// console.log(selector);
// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 10;
// document.querySelector('.guess').value = 123;
// console.log(document.querySelector('.guess').value);

const btn = document.querySelector('.check');
const btnAgain = document.querySelector('.again');
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};
const displayScore = function (score) {
  document.querySelector('.score').textContent = score;
};
const displayQuess = function (guess) {
  document.querySelector('.guess').value = guess;
};

displayScore(20);

console.log(secretNumber);

btnAgain.addEventListener('click', () => {
  score = 20;
  displayScore(20);
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  displayMessage('Start guessing...');
  document.querySelector('body').style.backgroundColor = '#222';
  displayQuess('');
  document.querySelector('.number').textContent = '?';
  console.log(secretNumber);
});

btn.addEventListener('click', () => {
  const guess = Number(document.querySelector('.guess').value);
  if (score > 1) {
    //When there is no input
    if (!guess) {
      displayMessage('⛔ No number');
    }
    //When player guess number
    else if (guess === secretNumber) {
      displayMessage('🍕 You won!');
      document.querySelector('body').style.backgroundColor = '#60b347';
      document.querySelector('.number').textContent = secretNumber;
      if (score > highscore) {
        highscore = score;
        document.querySelector('.highscore').textContent = highscore;
      }
    }
    //When guess is wrong
    else if (guess !== secretNumber) {
      score--;
      displayMessage(guess > secretNumber ? '😫 Too high' : '😫 Too low');
      displayScore(score);
    }
    //When score is 0
  } else {
    displayMessage('🤕 You lose a game');
    displayScore(0);
  }
});
