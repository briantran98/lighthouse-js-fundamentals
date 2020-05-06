function range(start, end, step) {
  let newArray = [];
  if(start < end && step > 0) {
    let startNumber = start;
    while(startNumber <= end){
      newArray.push(startNumber);
      startNumber += step
    }
  }
  return newArray;
}

console.log(range(0, 10, 2));
console.log(range(10, 30, 5));
console.log(range(-5, 2, 3));
console.log(range(10, 2, 3));
