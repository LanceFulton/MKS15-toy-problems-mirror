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

var robotPaths = function (n, board, i, j) {
  if (!board) {
    board = makeBoard(n);
    i = 0;
    i = j;
  }
}

if (!(i >= 0 && i < n && j >= 0 && j < n) || board.hasBeenVisited (i, j)) {
  board.hasBeenVisited (i, j) {
    return 0;
  }
}

// and more stuff...



// My first attempt:

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

  var position = board[i][j];

  var updatePosition = function(){
    position = board[i][j];
  };

  var moveRight = function {
    i = i+1;
    if (!board.hasBeenVisited){
      board.togglePiece(i,j);
      updatePosition();
      makePath();
    } else {
      i = i-1;
    }
  };

  var makePath = function() {
    moveRight();
    moveDown();
    moveLeft();
    moveUp();
  };

}

