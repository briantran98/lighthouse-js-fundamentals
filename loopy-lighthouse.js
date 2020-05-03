let multipleOfThree = "Loopy";
let multipleOfFour = "Lighthouse"

// For loop to count up from 100 to 200
for (let x = 100; x < 201; x++) {
// Checking to see if number is a multiple of 3 and 4
  if(x % 3 === 0 && x % 4 === 0){
    console.log(multipleOfThree + multipleOfFour)
// Checking to see if number is a multuple of 3
  } else if (x % 3 === 0) {
    console.log(multipleOfThree);
  } else if (x % 4 === 0) {
    console.log(multipleOfFour);
  } else {
    console.log(x)
  }
}