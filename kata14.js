const urlDecode = function(text) {
  const object = {};
  const percentRegex = /\%20/gi;
  let stringBuffer = text.split("&");

  for (let i = 0; i < stringBuffer.length; i++) {
    let objectDetails = stringBuffer[i].split("=");
    object[objectDetails[0]] = objectDetails[1].replace(percentRegex, " ");
  }

  return object;
};

console.log(urlDecode("duck=rubber"));
console.log(urlDecode("bootcamp=Lighthouse%20Labs"));
console.log(urlDecode("city=Vancouver&weather=lots%20of%20rain"));
console.log(urlDecode("city=Vancouver&weather=lots%20of%20rain").weather);
