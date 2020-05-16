function numberGuesser() {
  const maxNumber = 100;
  let prompt = require('prompt-sync')();
  let numberOfGuesses = 0;
  let numbersGuessed = [];
  let play = true;
  let alreadyGuessed = false;
  let randomNumber = Math.floor(Math.random() * Math.floor(maxNumber));

  while (play) {
    let guess = prompt('Guess a number or type:'); // Prompt

    if (!numbersGuessed.includes(guess)) {
      numbersGuessed.push(guess)
      alreadyGuessed = false;
    } else {
      alreadyGuessed = true;
      console.log("Already Guessed!")
    }
    
    if (guess == randomNumber) {
      numberOfGuesses++;
      if (numberOfGuesses == 1) {
        return ("You got it! You took " + numberOfGuesses + " attempt!")
      } else {
        return ("You got it! You took " + numberOfGuesses + " attempts!")
      }
    } else if (guess > randomNumber && !alreadyGuessed) {
      numberOfGuesses++;
      console.log("Too High!");
    } else if (guess < randomNumber && !alreadyGuessed) {
      numberOfGuesses++;
      console.log("Too Low!");
    }
  }
}


console.log(numberGuesser());