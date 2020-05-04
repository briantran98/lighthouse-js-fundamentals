const moves = ['north', 'north', 'west', 'west', 'north', 'east', 'north']

finalPosition(moves);

function finalPosition(moves) {
  let finalCoordinate = [];
  // Variables to store the coordinates
  let xCoordinate = 0;
  let yCoordinate = 0;

  // Loop through the array of moves
  for (const move of moves) {
    // Switch statement to see what move is and change the coordinate
    switch (move) {
      // Increase the yCoordinate by 1
      case "north":
        yCoordinate++;
        break;
      // Increase the xCoordinate by 1
      case "east":
        xCoordinate++;
        break;
      // Decrease the yCoordinate by 1
      case "south":
        yCoordinate--;
        break;
      // Decrease the xCoordinate by 1
      case "west":
        xCoordinate--;
    }
  }
  //console.log(xCoordinate)
  finalCoordinate.push(xCoordinate, yCoordinate);
  return finalCoordinate;
}

console.log(finalPosition(moves))