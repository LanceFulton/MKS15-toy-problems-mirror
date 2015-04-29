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
    return !!this[i][j] ;
  }
  return board;
};



var robotPaths = function(n, board, i, j) {

  var blocked = function(i,j) {
    return board[i] === undefined || board[j] === undefined || board.hasBeenVisited(i,j)
  }

  if (i===n-1 && j===n-1) {
    return 1;
  } else if (!i && !j){
    board.togglePiece(i,j);
    var count = 2 * robotPaths(n, board, i+1, j);
    board.togglePiece(i,j);
    return count;
  } else {
    var upCount = 0;
    var downCount = 0;
    var leftCount = 0;
    var rightCount = 0;

    if (!blocked(i-1, j)) {
      board.togglePiece(i,j);
      upCount = robotPaths(n, board, i-1, j);
      board.togglePiece(i,j);   
    }
    if (!blocked(i+1, j)) {
      board.togglePiece(i,j);
      downCount = robotPaths(n, board, i+1, j);
      board.togglePiece(i,j);   
    }
    if (!blocked(i, j-1)) {
      board.togglePiece(i,j);
      leftCount = robotPaths(n, board, i, j-1);
      board.togglePiece(i,j);   
    }
    if (!blocked(i, j+1)) {
      board.togglePiece(i,j);
      rightCount = robotPaths(n, board, i, j+1);
      board.togglePiece(i,j);   
    }
    return upCount + downCount + leftCount + rightCount;
  }

}

//console.log(robotPaths(5, makeBoard(5), 0, 0) === 8512);

