/**
 *  
 *  A robot located at the top left corner of a 5x5 grid is trying to reach the 
 *  bottom right corner. The robot can move either up, down, left, or right, 
 *  but cannot visit the same spot twice. How many possible unique paths are 
 *  there to the bottom right corner? 
 *  
 *  make your solution work for a grid of any size.
 *
 */

/*
x x 0 0 0
0 x x 0 0
0 0 x 0 0
0 0 x x x
0 0 0 0 x
 */

// A Board class will be useful
var maxN = 5;

var makeBoard = function(n) {
  var board = [];
  for (var i = 0; i < n; i++) {
    board.push([]);
    for (var j = 0; j < n; j++) {
      board[i].push(false);
    }
  }
  board.togglePiece = function(i, j) {
    this[i][j] = !this[i][j];
  }
  board.hasBeenVisited = function(i, j) {
    return !!this[i][j];
  }
  return board;
};

var robotPaths = function(n, board, i, j) {
  var depth = 0;

  var recurse = function(aBoard,i,j) {
    var indexI = i;
    var indexJ = j;
    // indexJ++;
    if(i>=n) { return aBoard; }
    if(j>=n) { return aBoard; }
    for(var indexI=i;indexI<maxN;indexI++) {
      aBoard.togglePiece(indexI, indexJ);
      recurse(aBoard,indexI,j);
    }
    return board;
  };

  return recurse(n, board, i, j);
};

var myBoard = makeBoard(5);
console.log( "PATHS : ", robotPaths(maxN, myBoard, 0, 0) );



// Psuedocode
// Begin at 0,0; 
// Recurse to every element on row one;  (X0000 thru XXXXX)
//   At every element on row 0, recurse via every element on row 1 (starting at prev col.)
//   xxx00
//   00x00
//   0xx00

