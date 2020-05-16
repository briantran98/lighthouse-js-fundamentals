let whiteQueen = [0, 5];
let blackQueen = [5, 0];
let generatedBoard = generateBoard(whiteQueen, blackQueen);
console.log(generatedBoard);
console.log(queenThreat(generatedBoard));


function generateBoard(white, black) {
  let board = [];

  for(let i = 0; i < 8; i++){
    board.push([0, 0, 0, 0, 0, 0, 0, 0]);
  }

  board[white[0]][white[1]] = 1; 
  board[black[0]][black[1]] = 1; 

  return board;
}

function queenThreat(chessBoard) {
  let whitePiece = {
    yCoordinate: 0,
    xCoordinate: 0
  }
  let blackPiece = {
    yCoordinate: 0,
    xCoordinate: 0
  }
  let yCoordinateDifference = 0;
  let xCoordinateDifference = 0;
  let whiteQueenSet = false;
  let threat = false;
  for (let row = 0; row < chessBoard.length; row++) {
    for (let column = 0; column < chessBoard[row].length; column++) {
      if(chessBoard[row][column] === 1 && !whiteQueenSet) {
        whitePiece.yCoordinate = row;
        whitePiece.xCoordinate = column;
        whiteQueenSet = true;
      } else if (chessBoard[row][column] === 1) {
        blackPiece.yCoordinate = row;
        blackPiece.xCoordinate = column;
      }
    }
  }

  yCoordinateDifference = whitePiece.yCoordinate - blackPiece.yCoordinate;
  xCoordinateDifference = whitePiece.xCoordinate - blackPiece.xCoordinate;

  if (yCoordinateDifference < 0) {
    yCoordinateDifference *= -1;
  }
  if (xCoordinateDifference < 0) {
    xCoordinateDifference *= -1;
  }

  if (whitePiece.yCoordinate === blackPiece.yCoordinate || whitePiece.xCoordinate === blackPiece.xCoordinate || whitePiece.xCoordinate === blackPiece.yCoordinate || whitePiece.yCoordinate === blackPiece.xCoordinate || yCoordinateDifference === xCoordinateDifference) {
    threat = true;
  }

  return threat;
}