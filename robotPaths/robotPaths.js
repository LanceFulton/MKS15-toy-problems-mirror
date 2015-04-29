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

  var counter = 0;
  var myBoard = makeBoard(n);

  var recurse = function(){

    if (this[i][j] === this[n][n]) { // once robot reaches end of board, increment counter
      counter++;
    }

    recurse ()
  };

  return counter;

};
