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
var elements = [["rock", "paper", "scissors"], ["rock", "paper", "scissors"], ["rock", "paper", "scissors"]];
var rockPaperScissors = function (arr) {
  var possibleThrows = [];
  var remainingThrows = rockPaperScissors(arr.slice(1));
    for (var i = 0; i < remainingThrows; i++){ 
      for (var j = 0; j < arr[0].length -1; j++) { 
      	possibleThrows.push(arr[0][j] + remainingThrows[i]); 
      }
    }
  return possibleThrows;
}

console.log(rockPaperScissors(elements));

