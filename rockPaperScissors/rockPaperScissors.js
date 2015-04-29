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
    var result = [];
    var possibilities = ['rock', 'paper', 'scissors'];

    var recurse = function(roundsLeft, currentRound) {
      if( roundsLeft === 0 ){
        result.push(currentRound);
        return;
      }
      for( var i = 0; i < possibilities.length; i++ ){
        var currentPlay = possibilities[i];
        recurse( roundsLeft-1, currentRound.concat(currentPlay) );
      }
    };

    recurse(3, []);

    return result;
};

rockPaperScissors();
