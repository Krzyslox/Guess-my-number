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

document.querySelector('.score').textContent = 20;

console.log(secretNumber);

btnAgain.addEventListener('click', () => {
  score = 20;
  document.querySelector('.score').textContent = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.guess').value = '';
  document.querySelector('.number').textContent = '?';
  console.log(secretNumber);
});

btn.addEventListener('click', () => {
  const guess = Number(document.querySelector('.guess').value);
  if (score > 1) {
    //When there is no input
    if (!guess) {
      document.querySelector('.message').textContent = '⛔ No number';
    }
    //When player guess number
    else if (guess === secretNumber) {
      document.querySelector('.message').textContent = '🍕 You won!';
      document.querySelector('body').style.backgroundColor = '#60b347';
      document.querySelector('.number').textContent = secretNumber;
      if (score > highscore) {
        highscore = score;
        document.querySelector('.highscore').textContent = highscore;
      }
    }
    //When guess is too high
    else if (guess > secretNumber) {
      score--;
      document.querySelector('.message').textContent = '😫 Too high';
      document.querySelector('.score').textContent = score;
    }
    //When guess is too low
    else {
      score--;
      document.querySelector('.message').textContent = '😫 Too low';
      document.querySelector('.score').textContent = score;
    }
  } else {
    document.querySelector('.message').textContent = '🤕 You lose a game';
    document.querySelector('.score').textContent = 0;
  }
});
