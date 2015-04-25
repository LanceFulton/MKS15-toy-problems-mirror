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
  };
  board.hasBeenVisited = function(i, j) {
    return !!this[i][j];
  };
  return board;
};

var robotPaths = function(n, board, i, j) {
  var pathCount = 0;
  //recursion will be the way to go

  var findPath = function() {
    var currentIndex = board[0][0];

    //if index to the right is false go right else go down
    //as you move set currentIndex to the index and to true

    if (currentIndex == board[4][4]) {
      count++;
    }
  };

  //always going to start from top left 
  //check to see if the spaces around are false and if so, move in that direction
  //need to keep track of what direction so recursive calls go in a different direction if needed. 
};

