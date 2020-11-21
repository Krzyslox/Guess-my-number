'use strict';

// let selector = document.querySelector('.message');
// selector.textContent = 'Correct Number';
// console.log(selector);
// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 10;
// document.querySelector('.guess').value = 123;
// console.log(document.querySelector('.guess').value);

const btn = document.querySelector('.check');
const secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;

document.querySelector('.number').textContent = secretNumber;

btn.addEventListener('click', () => {
  const guess = Number(document.querySelector('.guess').value);

  if (score > 1) {
    if (!guess) {
      document.querySelector('.message').textContent = '⛔ No number';
    } else if (guess === secretNumber) {
      document.querySelector('.message').textContent = '🍕 You won!';
    } else if (guess > secretNumber) {
      score--;
      document.querySelector('.message').textContent = '😫 Too high';
      document.querySelector('.score').textContent = score;
    } else {
      score--;
      document.querySelector('.message').textContent = '😫 Too low';
      document.querySelector('.score').textContent = score;
    }
  } else {
    document.querySelector('.message').textContent = '🤕 You lose a game';
    document.querySelector('.score').textContent = 0;
  }
});
