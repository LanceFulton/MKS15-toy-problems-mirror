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
  var paths = 0;

  var checkMoves = function(board, i, j) {
    var moves = {};
    board[i-1][j] === false ? moves.up = true : moves.up = false;
    board[i][j+1] === false ? moves.right = true : moves.right = false;
    board[i+1][j] === false ? moves.down = true : moves.down = false;
    board[i][j-1] === false ? moves.left = true : moves.left = false;
    return moves;
  }

  var move = function(n, board, i, j) {
    if( board.hasBeenVisited(n, n) ) {
      paths++;
    } else {
      var canMove = checkMoves(i, j);
      for( var direction in canMove ) {
        if( direction === 'up' && canMove[direction] === true ) {
          board.togglePiece(i - 1, j);
          move(board, i - 1, j);
        } else if( direction === 'right' && canMove[direction] === true ) {
          board.togglePiece(i, j + 1);
          move(board, i, j + 1);
        } else if( direction === 'down' && canMove[direction] === true ) {
          board.togglePiece(i + 1, j);
          move(board, i + 1, j);
        } else if( direction === 'left' && canMove[direction] === true ) {
          board.togglePiece(i, j - 1);
          move(board, i, j - 1);
        }
      }
    }
  };

  move(n, board, i, j);
  return paths;
};
