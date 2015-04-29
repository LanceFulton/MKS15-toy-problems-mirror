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
var makeBoard = function(size) {
  var board = [];
  for (var x = 0; x < size; x++) {
    board.push([]);
    for (var y = 0; y < size; y++) {
      board[x].push(false);
    }
  }
  board.togglePiece = function(x, y) {
    this[x][y] = !this[x][y];
  };
  board.hasBeenVisited = function(x, y) {
    return !!this[x][y];
  };
  return board;
};


var robotPaths = function(size, board, x, y) {

  var count = 0;
  var findPaths = function(currX, currY){

    board.togglePiece(currX, currY);

    // If we reach the end of the board, we are done with this path
    if(currX === size && currY === size){
      count++;
      return;
    }

    // Looks in each direction
    // If a spot hasn't been visited, recurs through it
    if( (currX + 1 <= size) && !board.hasBeenVisited(currX + 1, currY) ){
      findPaths(currX + 1, currY);
    }
    if( (currX + 1 <= size) && !board.hasBeenVisited(currX, currY + 1) ){
      findPaths(currX, currY + 1);
    }
    if( (currX + 1 <= size) && !board.hasBeenVisited(currX - 1, currY) ){
      findPaths(currX - 1, currY);
    }
    if( (currX + 1 <= size) && !board.hasBeenVisited(currX, currY - 1) ){
      findPaths(currX, currY - 1);
    }
  };

  findPaths(0,0);
  return count;
};

console.log(robotPaths(3, makeBoard(), 0, 0));
