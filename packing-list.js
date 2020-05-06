// Array for all the items we are packing
const packingList = ["bowls", "plates", "pots", "pans", "eating utensils", "glasses", "cups", "cooking utensils"];

console.log("Kitchen stuff to pack:");

// Iterating over array to display everything in the array with for loop
for (let i = 0; i < packingList.length; i++) {
  console.log(packingList[i]);
}

// Iterating over array with while loop
console.log("Kitchen stuff to pack:");
let i = 0;
while (i < packingList.length) {
  console.log(packingList[i]);
  i++;
}
