// Takes a string with spaces and turns in into camel case
// Param:
// Input - The string that will be turned into camel case
const camelCase = function(input) {
  let stringBuffer = [];
  let prevString = "";
  let newString = "";

  // Loops through the array and loads in into stringBuffer
  for(let i = 0; i < input.length; i++) {
    // Loads into string buffer if char isn't " " and will upper case current char if previous char was " "
    if(prevString === " ") {
      stringBuffer.push(input[i].toUpperCase());
    } else if(input[i] !== " ") {
      stringBuffer.push(input[i]);
    }
    // Loads current char into prevString for the next run through the loop
    prevString = input[i];
  }

  // Turning
  newString = stringBuffer.join("");
  return newString;
};

console.log(camelCase("this is a string"));
console.log(camelCase("loopy lighthouse"));
console.log(camelCase("supercalifragalisticexpialidocious"));
