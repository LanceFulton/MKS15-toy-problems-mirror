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

// A Board class will be useful

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
  //Setting a var to count how many paths have been found.
  var pathCount = 0;
  //creating a new board.
  board = makeBoard(n);
  //Need to make a recursive function to check all possibilities
  var recurse = function (row) {
    //j represents the columns
    for (var j = 0; j < n - 1; j++) {
      //toggles the current board space
      board.togglePiece(i, row);
      i++;
    }
  }
  recurse(i);
  return pathCount;
}

//Always starts at board[0][0];
//Alway ends at board[n][n];

