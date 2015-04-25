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

//At each place on the board, the robot should check
//if it can go right, left, up or down
//if it can, recurse to create a new process to account
//for every possible path from that particular location
//keep a counter that increments every time a robot gets
//to the final tile
var robotPaths = function(n, board, i, j) {
  var pathCount = 0;

  var moveRobot = function(row, col){
    //move robot to the right starting at the robots current position
    for(var rowCount = row; rowCount < n; rowCount++){
      board.togglePiece(rowCount);
      //move piece to next column if possible
      if(col !== n){
        moveRobot(row, col++);
      }
    }
    pathCount++;
  }

  moveRobot(i, j);
  return pathCount;
}

