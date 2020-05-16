const camelCase = function(input) {
  let stringBuffer = [];

  for(let i = 0; i < input.length; i++) {
    if(input[i-1] === " ") {
      stringBuffer.push(input[i].toUpperCase());
    } else if(input[i] !== " ") {
      stringBuffer.push(input[i]);
    }

  }
  return stringBuffer.join("");
};

console.log(camelCase("this is a string"));
console.log(camelCase("loopy lighthouse"));
console.log(camelCase("supercalifragalisticexpialidocious"));
