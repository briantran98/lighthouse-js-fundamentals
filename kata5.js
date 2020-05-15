const urlEncode = function(text) {
  let newText = [];
  let prevChar = "";
  for(let i = 0; i < text.length; i++) {
    if(text[i] === " ") {
      if(prevChar > text[i]) {
        newText[i] = "%20";
      }
    } else {
      newText[i] = text[i]
    }
    prevChar = text[i];
  }
  let encodedText = newText.join("");
  return encodedText;
};

console.log(urlEncode("Lighthouse Labs"));
console.log(urlEncode(" Lighthouse Labs "));
console.log(urlEncode("blue is greener than purple for sure"));
//console.log((" "> " "))
