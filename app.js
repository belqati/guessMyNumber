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
    winningNum = 2,
    guessesLeft = 3;

// UI Elements
const UIgame = document.querySelector('#game'),
      UIminNum = document.querySelector('.min-num'),
      UImaxNum = document.querySelector('.max-num'),
      UIguessBtn = document.querySelector('#guess-btn'),
      UIguessInput = document.querySelector('#guess-input'),
      UImessage = document.querySelector('.message');

// Assign UI min-max
UIminNum.textContent = min;
UImaxNum.textContent = max;

// Listen for guess
UIguessBtn.addEventListener('click', function(){
  let guess = parseInt(UIguessInput.value);

  // Validate guess
  if(isNaN(guess) || guess < min || guess > max){
    setMessage(`Please enter a number between ${min} and ${max}.`, 'red')
  }

  // Check if winning number
  if(guess === winningNum){
    // disable input
    UIguessInput.disabled = true;
    // change border
    UIguessInput.style.border = 'solid 2px green';
    // set message
    setMessage(`The number ${winningNum} is spot-on!`, 'green');
  }
});

// error message
function setMessage(msg, color){
  UImessage.style.color = color;
  UImessage.textContent = msg;
}