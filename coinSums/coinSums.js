/*

In England the currency is made up of pound, £, and pence, p, and there are eight coins in general circulation:

1p piece
2p piece
5p piece
10p piece
20p piece
50p piece
1 euro (100p)
2 euro (200p)

It is possible to make £2 in the following way:

1 * £1 + 1 * 50p + 2 * 20p + 1 * 5p + 1 * 2p + 3 * 1p
How many different ways can £2 be made using any number of coins?

example usage of `makeChange`:

// aka, there's only one way to make 1p. that's with a single 1p piece
makeChange(1) === 1
// aka, there's only two ways to make 2p. that's with two, 1p pieces or with a single 2p piece
makeChange(2) === 2
*/

var coins = [1, 2, 5, 10, 20, 50, 100, 200];

var makeChange = function(total){
  var counter = 0;

  var recurse = function(index, remainder){
    var coin = coins[index];
    if (index === 0){
      remainder % coin === 0 && counter++;  //if first statment is true, iterate counter
    }
    while (remainder >= 0){
      recurse(index-1, remainder);
      remainder -= coin;
    }
  };

  recurse(coins.length-1, total);

  return counter;

};









/*

var possibleNumOfThisPiece = function(total, pieceValue){
  var result = 0;
  while (total > pieceValue){
    result++;
    total -= pieceValue;
  }
  return result;
}

var makeChange = function(total){
  var ways = 0;

  var recurse = function(remainingTotal, currentPiece){

    if (remainingTotal === 0){
      ways++;
    }

    var maxOfThisPiece = possibleNumOfThisPiece(remainingTotal, currentPiece);

    for (var i = 0 ; i <= maxOfThisPiece ; i++){
      remainingTotal -= (pieces[currentPiece]);
      recurse (remainingTotal, currentPiece--);
    }

    return;
  }

  recurse(total, pieces.length-1);
  return ways;

};




















*/
