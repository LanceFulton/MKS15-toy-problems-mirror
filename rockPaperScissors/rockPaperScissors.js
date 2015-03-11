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

var rockPaperScissors = function (numRounds) {
  if (numRounds === undefined)
    numRounds = 3;
  
  var results = [[]];
  var lengthenResults = [];
  var moveThrows = ['rock','paper','scissors'];
  
  // lengthen all strings until numRounds = 0
  while (numRounds > 0){
    // for each string in results
    results.forEach(function(hist){
      moveThrows.forEach(function(move){
        lengthenResults.push(hist.concat(move));
      });
    });
    results = lengthenResults;
    lengthenResults = [];
    numRounds--;
      // push a string onto lengthenResults with one extra throw
  }
  
  return results;
};
