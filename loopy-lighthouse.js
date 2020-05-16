/*let multipleOfThree = "Loopy";
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
}*/

// Stretch exercise for loopy lighthouse

const loopyLighthouse = function (range, multiples, words) {
  if(range[0] < range[1]) {
    for(let i = range[0]; i <= range[1] ; i++ ) {
      if(i % multiples[0] === 0 && i % multiples[1] === 0) {
        console.log(words[0] + words[1])
      } else if (i % multiples[0] === 0) {
        console.log(words[0]);
      } else if (i % multiples[1] === 0) {
        console.log(words[1]);
      } else {
        console.log(i);
      }
    }
  }
}

loopyLighthouse([15, 90], [2, 5], ["Batty", "Beacon"]);
