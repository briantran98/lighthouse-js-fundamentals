const numberGuesser = () => {
  let prompt = require('prompt-sync')();
  let numberOfGuesses = 0;
  const numbersGuessed = [];
  let randomNumber = generateRandomNumber(100);
  let over = false;
  while (!over) {
    let guess = Number(prompt('Guess a number:')); // Prompt
    if (!numbersGuessed.includes(guess)) {
      numberOfGuesses++;
      numbersGuessed.push(guess);
      over = isHigher(guess, randomNumber, numberOfGuesses);
    } else {
      console.log("Already Guessed!");
    }
  }
};

const isHigher = (guess, randomNumber, numberOfGuesses)  => {
  if (guess > randomNumber) {
    console.log("Too High!");
  } else if (guess === randomNumber) {
    return win(numberOfGuesses);
  } else {
    console.log("Too Low!");
  }
};

const win = (tries) => {
  let plural = "";
  if (tries > 1) {
    plural = "s";
  }
  console.log(`You got it! You took ${tries} attempt${plural}!`);
  return true;
};

const generateRandomNumber = (maxNumber) => {
  return Math.floor(Math.random() * Math.floor(maxNumber));
};

numberGuesser();