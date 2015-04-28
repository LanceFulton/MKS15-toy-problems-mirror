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
  console.log("rockin!");
  var choices=['rock', 'paper', 'scissors'];
  var retArray = [];

  // Every sequence for X rounds
  var recurse = function(rounds, selection, itemIndex) {
    var selection = [];

    // Base case
    if(rounds>=selection.length) {
      return selection;
    }

    // Populate the fields
    for(var i=0; i<choices.length; i++) {
      selection.push(choices[i]);
      recurse( rounds, selection, itemIndex );
    }
  };

  // Main
  recurse( rounds, [], 0 );
  
  return retArray;
};

console.log( rockPaperScissors(3) );
