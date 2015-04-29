var lowestNumOfSquares = function(n) {
  var maxSquare = Math.floor(Math.sqrt(n));
  var lowestNum = n;
  var results = 0;

  for (var i = maxSquare; i >= 1; i--) {
    if (i === n) {
      return 1;
    }
    result = lowestNumOfSquares(n - Math.pow(i,2)) + 1;
    if (result < lowestNum) {
      lowestNum = result;
    }
  }
  return lowestNum;
};
