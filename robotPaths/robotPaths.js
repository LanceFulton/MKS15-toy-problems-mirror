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
  if (i<0 || i>=n || j<0 || j>=n || board[i][j]) {
    return 0;
  }
  if (i===n-1 && j===n-1) {
    return 1;
  }
  board.togglePiece(i, j);
  var numPaths = robotPaths(n, board, i-1, j)+
    robotPaths(n, board, i+1, j)+
    robotPaths(n, board, i, j-1)+
    robotPaths(n, board, i, j+1);
  board.togglePiece(i, j);
  return numPaths;
};

// var start = Date.now();
// for (var i=0; i<7; i++) {
//   console.log('%dx%d board has %d paths', i, i, robotPaths(i, makeBoard(i), 0, 0));
// }
// console.log('This took %d milliseconds', Date.now()-start); // 3752 up to n=6
