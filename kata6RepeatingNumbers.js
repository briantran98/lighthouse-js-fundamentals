// Function that will repeat numbers a determined number of times
// Param:
// Data - An array of an array that has a pair of numbers. The first number being the number to be repeated and the second one being the number of times repeated
const repeatNumbers = function(data) {
  let repeatingNumber = 0;
  let numberOfRepeats = 0;
  let message = "";

  // Loops through the 2D array
  for(let row = 0; row < data.length; row++) {
    for(let column = 0; column < data[row].length; column++) {
      // Stores the first number in the pair to repeatingNumber
      // Stores the second number in numberOfRepeats
      if (column === 0) {
        repeatingNumber = data[row][column];
      } else {
        numberOfRepeats = data[row][column];
      }
    }
    // Repeats the number the determined number of times set by numberOfRepeats
    for(let i = 0; i < numberOfRepeats; i++) {
      message += repeatingNumber;
    }

    // Adds a ", " between each array for the number of arrays minus 1
    // ie. 2 arrays so 1 ", "
    if(row < (data.length - 1)) {
      message += ", ";
    }
  }
  
  return message;
};

console.log(repeatNumbers([[1, 10]]));
console.log(repeatNumbers([[1, 2], [2, 3]]));
console.log(repeatNumbers([[10, 4], [34, 6], [92, 2]]));
