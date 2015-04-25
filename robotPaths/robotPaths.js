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

var Board = function(n){
  this.board = [];
  for (var i = 0; i < n; i++) {
    this.board.push([]);
    for (var j = 0; j < n; j++) {
      this.board[i].push(false);
    }
  }
};

Board.prototype.togglePiece = function(i, j) {
  this.board[i][j] = !this.board[i][j];
}

Board.prototype.hasBeenVisited = function(i, j) {
  return !!this.board[i][j];
}

var robotPaths = function(n, i, j) {
  var board = new Board(n);
  board.togglePiece(i, j);
  console.log(board);
  board&& (board.hasBeenVisited === false)

// move right, j+1
// move down, i+1
// move left, j-1
// move up, i-1
// start: 0,0 - goal (4,4);
}

console.log(robotPaths(4, 0, 0))
