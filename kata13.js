const makeCase = function (input, style) {
  let stringBuffer = input;
  let stylesArray = [];
  if (typeof style === "string") {
    stylesArray = style.split(" ");
  } else {
    stylesArray = style;
  }
  let newStrig = "";
  const kebabSnakeRegex = /\s/g;
  const vowelRegex = /[aeiou]/;
  const consonantRegex = /[bcdfghjklmnpqrstvwxyz]/;
  const allRegex = /\w/;

  for(let i = 0; i < stylesArray.length; i++){
    switch (stylesArray[i]) {
    case "camel":
      stringBuffer = removeSpaceThenUpperCase(stringBuffer);
      break;

    case "pascal":
      stringBuffer = removeSpaceThenUpperCase(stringBuffer, stylesArray[i]);
      break;

    case "snake":
      stringBuffer = stringBuffer.replace(kebabSnakeRegex, "_");
      break;

    case "kebab":
      stringBuffer = stringBuffer.replace(kebabSnakeRegex, "-");
      break;

    case "title" :
      const holder = stringBuffer.split("");
      for (let i = 0; i < holder.length; i++) {
        if(holder[i - 1] === " " || i === 0) {
          holder[i] = holder[i].toUpperCase();
        }
      }
      stringBuffer = holder.join("");
      break;

    case "vowel" :
      stringBuffer = captilizeLetters(stringBuffer, vowelRegex);
      break;

    case "consonant" :
      stringBuffer = captilizeLetters(stringBuffer, consonantRegex);
      break;

    case "upper" :
      stringBuffer = captilizeLetters(stringBuffer, allRegex);
      break;

    case "lower":
      let lower = "";
      for (let i = 0; i < stringBuffer.length; i++) {
        lower += stringBuffer.charAt(i).toLowerCase();
      }
      stringBuffer = lower;
  }
}
  return stringBuffer;
};

function captilizeLetters(input, regex) {
  stringBuffer = "";
  for (let i = 0; i < input.length; i++) {
    if (regex.test(input.charAt(i))) {
      stringBuffer += input.charAt(i).toUpperCase();
    } else {
      stringBuffer += input.charAt(i);
    }
  }
  return stringBuffer;
}



function removeSpaceThenUpperCase(input, style) {
  let stringBuffer = "";
  for (let i = 0; i < input.length; i++) {
    if(style === "pascal" && i === 0) {
      stringBuffer += input.charAt(0).toUpperCase();
    } else if (input[i - 1] === " ") {
      stringBuffer += input.charAt(i).toUpperCase();
    } else if (input[i] !== " ") {
      stringBuffer += input.charAt(i)
    }
  }
  return stringBuffer;
}


console.log(makeCase("this is a string", "camel"));
console.log(makeCase("this is a string", "pascal"));
console.log(makeCase("this is a string", "snake"));
console.log(makeCase("this is a string", "kebab"));
console.log(makeCase("this is a string", "title"));
console.log(makeCase("this is a string", "vowel"));
console.log(makeCase("this is a string", "consonant"));
console.log(makeCase("THIS is a string", ["upper", "snake"]));
