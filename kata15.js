const squareCode = function(message) {
  let string = ""
  let buffer = [];
  let output = [];

  string = message.split(" ").join("");
  let column = Math.ceil(Math.sqrt(string.length))
  let row = Math.round((string.length / column));

  let index = 0;
  for (let i = 0; i < row; i++) {
    let squareCode = "";
    for (let j = 0; j < column; j++) {
      squareCode += string.charAt(index++);
    }
    buffer.push(squareCode);
    squareCode = "";
  }

  string = "";
  for(let i = 0; i < column; i++) {
    for (let j = 0; j < buffer.length; j++) {
      string += buffer[j].charAt(i);
    }
  output.push(string);
  string = "";
  }
  
  return output.join(" ");
};

console.log(squareCode("chill out"));
console.log(squareCode("feed the dog"));
console.log(squareCode("have a nice day"));
console.log(squareCode("if man was meant to stay on the ground god would have given us roots"));
