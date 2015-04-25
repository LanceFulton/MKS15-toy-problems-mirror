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
  var checkMoves = function(iCurrent, jCurrent) {
    var moves = {};
    board[iCurrent-1][jCurrent] === false ? moves.up = true : moves.up = false;
    board[iCurrent][jCurrent+1] === false ? moves.right = true : moves.right = false;
    board[iCurrent+1][jCurrent] === false ? moves.down = true : moves.down = false;
    board[iCurrent][jCurrent-1] === false ? moves.left = true : moves.left = false;
    return moves;
  }

  var move = function() {

  }
};

check moves u,r,d,l