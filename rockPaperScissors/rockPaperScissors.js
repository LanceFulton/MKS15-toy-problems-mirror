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

var plays = ['rock', 'paper', 'scissors'];

var rockPaperScissors = function (rounds) {
  var numberOfPlays = Math.pow(3, rounds);
  var resultsArray = [];

  for (var i = 0; i<numberOfPlays; i++){
    var aPlay = [];
    var numString = i.toString(3);
    var zeros = rounds - numString.length;
    var handString = Array(zeros).join('0') + numString;
    for (var j = handString.length-1; j > handString.length - 1 - rounds; j--) {
      aPlay.push(plays[handString[j] || 0]);
    }
    resultsArray.push(aPlay);
  }

  return resultsArray;

}
 
rockPaperScissors(3)