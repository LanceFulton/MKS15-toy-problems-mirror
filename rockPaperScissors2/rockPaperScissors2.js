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

// Solving this iteratively since I've solved it recursively
// Takes a variable number of iterations and a variable array of choices
var rockPaperScissors = function (n, choices) {
  var results = [];
  choices = choices || ['rock', 'paper', 'scissors'];
  n = n || 3;
  for (var numForm=0; numForm<Math.pow(n,choices.length); numForm++) {
    var stringForm = numForm.toString(choices.length);
    // Pad with leading zeroes as necessary
    while (stringForm.length < n) {
      stringForm = 0+stringForm;
    }
    results.push(stringForm.split('').map(function(number) {
      return choices[+number];
    }));
  }
  return results;
};

// console.log(rockPaperScissors(4, ['rock', 'paper', 'scissors', 'spock']));
