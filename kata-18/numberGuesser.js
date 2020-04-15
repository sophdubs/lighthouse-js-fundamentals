let prompt = require("prompt-sync")();

const numberGuesser = function(max) {
  let number = Math.floor(Math.random() * max) + 1;
  let guesses = {};
  let numGuesses = 0;
  let guessed = false;
  let answer = Number(prompt("Guess a number: "));
  while (guessed === false) {
    if (answer === 'exit') return;
    if (answer === number) {
      guessed = true;
    } else {
      if (answer < number) {
        console.log('Too Low!');
      } else {
        console.log('Too High!');
      }
      if (!guesses[answer]) {
        guesses[answer] = true;
        numGuesses += 1;
      }
      answer = Number(prompt("Guess a number: "));
    }
  }
  console.log(`You got it! You took ${numGuesses} attempts!`);
}

numberGuesser(5);