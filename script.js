'use strict';

// console.log(document.querySelector('.message').textContent);
// document.querySelector('.message').textContent = 'πCorrect Number!';

// document.querySelector('.number').textContent = secretNumber;
// document.querySelector('.score').textContent = 10;

// console.log((document.querySelector('.guess').value = 20));

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;
const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

// document.querySelector('.number').textContent = secretNumber;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  // When there is no guess
  if (!guess) {
    console.log(
      // (document.querySelector('.message').textContent = 'βοΈ No number!')
      displayMessage('βοΈ No number!')
    );

    // When player wins
  } else if (guess === secretNumber) {
    displayMessage('π Correct Number!');
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('.number').textContent = secretNumber;

    if (highscore < score) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }

    document.querySelector('.again').addEventListener('click', function () {
      document.querySelector('body').style.backgroundColor = '#222';
      document.querySelector('.number').style.width = '15rem';
      document.querySelector('.highscore').textContent = highscore;
    });
  }

  // refactoring (duplicate code)
  // when guess is wrong
  else if (guess !== secretNumber) {
    if (score > 1) {
      // document.querySelector('.message').textContent = guess > secretNumber ? 'π Too high!' : 'π Too low!';
      displayMessage(guess > secretNumber ? 'π Too high!' : 'π Too low!');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'π₯ You lost the game!';
      document.querySelector('.score').textContent = 0;
    }
  }
  // Duplicate code being refactored above
  /** 
  // When guess is too high
  else if (guess > secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = 'π Too high!';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'π₯ You lost the game!';
      document.querySelector('.score').textContent = 0;
    }
    // When guess is too low
  } else if (guess < secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = 'π Too low!';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'π₯ You lost the game!';
      document.querySelector('.score').textContent = 0;
    }
  }
});
*/
  ///////////////////////////////////////
  // Coding Challenge #1

  /* 
Implement a game rest functionality, so that the player can make a new guess! Here is how:

1. Select the element with the 'again' class and attach a click event handler
2. In the handler function, restore initial values of the score and secretNumber variables
3. Restore the initial conditions of the message, number, score and guess input field
4. Also restore the original background color (#222) and number width (15rem)

GOOD LUCK π
*/

  document.querySelector('.again').addEventListener('click', function () {
    secretNumber = Math.trunc(Math.random() * 20) + 1;
    // document.querySelector('.message').textContent = 'Start guessing...';
    displayMessage('Start guessing...');
    document.querySelector('.score').textContent = 20;
    document.querySelector('.guess').value = '';
    document.querySelector('.number').textContent = '?';
  });
});
