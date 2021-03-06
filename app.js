/*
GAME DYNAMICS
- Player guesses a number between min-max
- Player has specified number of guesses
- Notify number of guesses remaining
- Nofify correct answer upon losing
- Play again
*/

// Game Variables
let min = 1,
    max = 10,
    winningNum = getRandomNum(min, max),
    guessesLeft = 3;

// UI Elements
const UIgameWrapper = document.querySelector('#game'),
      UIminNum = document.querySelector('.min-num'),
      UImaxNum = document.querySelector('.max-num'),
      UIguessBtn = document.querySelector('#guess-btn'),
      UIguessInput = document.querySelector('#guess-input'),
      UImessage = document.querySelector('.message');

// Assign UI min-max
UIminNum.textContent = min;
UImaxNum.textContent = max;

// Play again event listener
UIgameWrapper.addEventListener('mousedown', function(e){
  if(e.target.className === 'play-again'){
    // reload current document
    window.location.reload();
  }
});

// Listen for guess
UIguessBtn.addEventListener('click', function(){
  let guess = parseInt(UIguessInput.value);

  // Validate guess
  if(isNaN(guess) || guess < min || guess > max){
    setMessage(`Please enter a number between ${min} and ${max}.`, '#f7797d')
    // clear input
    UIguessInput.value = '';
    UIguessInput.focus();

  // Check if winning number
  } else if(guess === winningNum){
    // GAME OVER
    gameOver(true, `The number ${winningNum} is spot-on!`)
  } else {
    // wrong number
    guessesLeft -= 1;
    UIguessInput.focus();

    if(guessesLeft === 0){
      // GAME OVER
      gameOver(false, `Sorry! The correct number is ${winningNum}.`)
    } else {
      // GAME CONTINUE
      // change border
      UIguessInput.style.border = 'solid 2px #f7797d';
      // clear input
      UIguessInput.value = '';
      // set message
      setMessage(`The number ${guess} is incorrect: ${guessesLeft} guesses left.`, '#f7797d');
    }
  }
});

// GAME OVER
function gameOver(won, msg){
  let color;
  won === true ? color = '#6EAD87' : color = '#f7797d';

  // disable input
  UIguessInput.disabled = true;
  // change styles
  UIguessInput.style.border = 'solid 2px';
  UIguessInput.style.borderColor = color;
  UImessage.style.color = color;
  // set message
  setMessage(msg);

  // play again?
  UIguessBtn.focus();
  UIguessBtn.innerHTML = 'Play Again <i class="fas fa-question fa-spin"></i>';
  UIguessBtn.className += 'play-again';
}

// Get winning number
function getRandomNum(min, max){
  return Math.floor(Math.random() * (max - min + 1) + min);
}

// Set message
function setMessage(msg, color){
  UImessage.style.color = color;
  UImessage.textContent = msg;
}