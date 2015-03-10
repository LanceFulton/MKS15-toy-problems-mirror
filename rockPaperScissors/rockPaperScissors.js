/*
* Write a function that generates every sequence of throws a single
* player could throw over a three-round game of rock-paper-scissors.
*
* Your output should look something like:
*   [["rock", "rock", "rock"],
*    ["rock", "rock", "paper"],
*    ["rock", "rock", "scissors"],
*    ["rock", "paper", "rock"],
             ...etc...
     ]
*
* Extra credit:
*   - Make your function return answers for any number of rounds.
* Example:
* rockPaperScissors(5); // => [['rock', 'rock', 'rock', 'rock', 'rock'], etc...]
*
*/

var rockPaperScissors = function () {
  var moves = {
    0: 'rock',
    1: 'paper',
    2: 'scissors'
  };
  var sequences = [];

  for(var k1 in moves) {
    for(var k2 in moves) {
      for(var k3 in moves) {
        var seq = [moves[k1], moves[k2], moves[k3]];
        sequences.push(seq);
      }
    }
  }

  // partial attempt at extra credit
  // var seq = [];

  // var recurse = function(rounds) {
  //   if(rounds > 0) {
  //     for(var k in moves) {
  //       seq.push(moves[k]);
  //       recurse(rounds - 1)
  //     }
  //   } else {
  //     sequences.push(seq);
  //     seq = [];
  //   }
  // }

  // recurse(rounds);

  return JSON.stringify(sequences);
};
