// Makes a multiplication table
// Param:
// maxValue - a number that will be the largest number in the multiplication table
const multiplicationTable = function(maxValue) {
  let table = "";
  // Loop to grab the number to increment 
  for(let i = 1; i <= maxValue; i++) {
    // Variable to store all the values that will be incremented 
    let product = 0;
    // Loop to increment the numbers depending on the parameter
    for(let numberOfTimes = 0; numberOfTimes < maxValue; numberOfTimes++) {
      product += i;
      table += (product + " ");
    }
    // Creating a new line for the next row
    table += "\n";
  }
  return table;
};

console.log(multiplicationTable(1));
console.log(multiplicationTable(5));
console.log(multiplicationTable(10));
