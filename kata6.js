const whereCanIPark = function (spots, vehicle) {
  // Variables
  let coordinate = [];
  let spotFound = false;

  // Looping through the array
  for(let row = 0; row < spots.length ; row++) {
    for(let column = 0; column < spots[row].length; column++) {
      
      // Chance vehicle to lowercase in case someone inputs capitals
      switch (vehicle.toLowerCase()) {
        // Switch case to find spots available for motorcycle that can be M, S or R
        case "motorcycle" :
          if(spots[row][column] === "M" && !spotFound) {
            coordinate.push(column , row);
            spotFound = true;
          }
        // Switch case to find spots available for small that can be S, R
        case "small" :
            if(spots[row][column] === "S" && !spotFound) {
              coordinate.push(column , row);
              spotFound = true;
            }
        // Switch case to find spots available for regular that can be R
        case "regular" :
          if(spots[row][column] === "R" && !spotFound) {
            coordinate.push(column , row);
            spotFound = true;
          }
      }
    }
  }

  // If no spot was found return false
  if(!spotFound) {
    return spotFound;
  }
  return coordinate;
};

console.log(whereCanIPark(
  [
    // COLUMNS ARE X
    // 0    1    2    3    4    5
    ['s', 's', 's', 'S', 'R', 'M'], // 0 ROWS ARE Y
    ['s', 'M', 's', 'S', 'r', 'M'], // 1
    ['s', 'M', 's', 'S', 'r', 'm'], // 2
    ['S', 'r', 's', 'm', 'r', 'M'], // 3
    ['S', 'r', 's', 'm', 'r', 'M'], // 4
    ['S', 'r', 'S', 'M', 'M', 'S']  // 5
  ],
  'regular'
));

console.log(whereCanIPark(
  [
    ['M', 'M', 'M', 'M'],
    ['M', 's', 'M', 'M'],
    ['M', 'M', 'M', 'M'],
    ['M', 'M', 'r', 'M']
  ],
  'small'
));

console.log(whereCanIPark(
  [
    ['s', 's', 's', 's', 's', 's'],
    ['s', 'm', 's', 'S', 'r', 's'],
    ['s', 'm', 's', 'S', 'r', 's'],
    ['S', 'r', 's', 'm', 'r', 's'],
    ['S', 'r', 's', 'm', 'R', 's'],
    ['S', 'r', 'S', 'M', 'm', 'S']
  ],
  'motorcycle'
))