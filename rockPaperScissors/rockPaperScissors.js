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
  words = ['rock', 'paper', 'scissors'];
  results = [];
  
  for (var i = 0; i<words.length; i++) {
    for (var j = 0; j<words.length; j++) {
      for (var k = 0; k<words.length; k++){
        results.push( [words[i], words[j], words[k]] );
      }
    }
  }

  return results;
};
