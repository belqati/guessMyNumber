# <img src="img/questionmark_icon.ico" width="30px"> guessMyNumber

*guessMyNumber* is a game app created under the direction of [Brad Traversy](https://www.udemy.com/modern-javascript-from-the-beginning/) in his *Modern JavaScript from the Beginning* course. The app uses the following technologies:

  * JavaScript
  * HTML
  * CSS
  * Skeleton

<img src="img/guessMyNumber.JPG" width="50%">

### The Game

The app provides a player with three opportunities to correctly guess a randomly generated integer between a minimum and maximum value (all of which can be adjusted in `app.js` via the opening variables `min`, `max`, and `guessesLeft`). On entering an incorrect guess, a message displays stating as much, along with the number of guesses left for that game session.

<img src="img/guessMyNumber_wrong_answer.JPG" width="50%">

### Error Handling

Empty guesses and guesses that fall outside the specified range return an error message to the player.

<img src="img/guessMyNumber_error.JPG" width="50%">


### Game Over

When that game session is finished, win or lose, the player is given the option to play again.

<img src="img/guessMyNumber_gameover.JPG" width="50%">
