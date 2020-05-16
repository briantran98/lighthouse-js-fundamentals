const blocksAway = function(directions) {
  let streets = []
  let bearing = 0;
  const startingPosition = {yCoordinate: 6, xCoordinate: 0}
  let position = {yCoordinate: 6, xCoordinate: 0}
  let finalDestination = {east: 0, north: 0}
  for (let i = 0; i < 7; i++) {
    if ( i === 6) {
      streets.push([1, 0, 0, 0, 0, 0, 0])
    } else {
    streets.push([0, 0 , 0, 0, 0, 0, 0])
    }
  }

  for (let i = 0; i < directions.length; i += 2) {
    let currentPosition = {yCoordinate: position.yCoordinate, xCoordinate: position.xCoordinate};
    if (i === 0) {
      if (directions[i] === "right") {
        bearing = changeBearing(bearing, directions[i]);
      }
    } else {
      bearing = changeBearing(bearing, directions[i]);
    }
    switch (bearing) {
      case 0:
        currentPosition.yCoordinate -= directions[i+1];
        streets[position.yCoordinate][position.xCoordinate] = 0;
        streets[currentPosition.yCoordinate][currentPosition.xCoordinate] = 1;
        break;
      case 90:
        currentPosition.xCoordinate += directions[i+1];
        streets[position.yCoordinate][position.xCoordinate] = 0;
        streets[currentPosition.yCoordinate][currentPosition.xCoordinate] = 1;
        break;
      case 180:
        currentPosition.yCoordinate += directions[i+1];
        streets[position.yCoordinate][position.xCoordinate] = 0;
        streets[currentPosition.yCoordinate][currentPosition.xCoordinate] = 1;  
        break;
      case 270:
        currentPosition.xCoordinate -= directions[i+1];
        streets[position.yCoordinate][position.xCoordinate] = 0;
        streets[currentPosition.yCoordinate][currentPosition.xCoordinate] = 1;  
        break;
    }
    position = currentPosition;
  }

  finalDestination.east = position.xCoordinate - startingPosition.xCoordinate;
  finalDestination.north = startingPosition.yCoordinate - position.yCoordinate;

  return finalDestination;
};

function changeBearing(position, direction) {
  let bearing = position;
  if (direction === "right") {
    if (bearing === 270 ) {
      bearing = 0;
    } else {
      bearing += 90;
    }
  } else if (direction === "left") {
    if (direction === "left") {
      if (bearing === 0) {
        bearing = 270;
      } else {
        bearing -= 90;
      }
    }
  }
  return bearing;
}

console.log(blocksAway(["right", 2, "left", 3, "left", 1]));
console.log(blocksAway(["left", 1, "right", 1, "left", 1, "right", 1, "left", 1, "right", 1]));
console.log(blocksAway(["left", 3, "right", 1, "right", 3, "right", 1]));


// Expected output
//{east: 1, north: 3}
//{east: 3, north: 3}
//{east: 0, north: 0}