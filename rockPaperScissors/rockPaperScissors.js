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
  var elements = ["rock", "paper", "scissors"];
  var results = [];
  var findSequences = function(rounds, result) {
    if (rounds === 0) {
      results.push(result);
      return;
    }
    for (var i = 0; i < elements.length; i++){
      var sequence = elements[i];
      findSequences(rounds-1, result.concat(sequence));

    }
  }

    findSequences(rounds, []);
    return results;
};

