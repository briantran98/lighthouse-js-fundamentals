const sumLargestNumbers = function(data) {
  let num1 = 0;
  let num2 = 0;
  
  data.forEach(number => {
    if(num1 < number) {
      num1 = number;
    }
  });

  data.forEach(number => {
    if(num2 < number && num1 != number) {
      num2 = number;
    }
  });

  return num1 + num2;
}

console.log(sumLargestNumbers([1, 10]));
console.log(sumLargestNumbers([1, 2, 3]));
console.log(sumLargestNumbers([10, 4, 34, 6, 92, 2]));