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

var rockPaperScissors = function (rounds) {
  var moves = ['rock', 'paper', 'scissors'];
  var sequences = [];

  // for(var k1 in moves) {
  //   for(var k2 in moves) {
  //     for(var k3 in moves) {
  //       var seq = [moves[k1], moves[k2], moves[k3]];
  //       sequences.push(seq);
  //     }
  //   }
  // }

  var recurse = function(currentArray) {
    if(currentArray.length === rounds) {
      sequences.push(currentArray);
      return;
    }

    for(var i = 0; i < moves.length; i++) {
      var currentPlay = moves[i];
      recurse(currentArray.concat(currentPlay));
    }
  };

  recurse([]);

  return JSON.stringify(sequences);
};
