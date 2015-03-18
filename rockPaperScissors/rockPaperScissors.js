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
  var retArray = [];


  // Every sequence for X rounds
  var getOneRoundPossibilities = function(rounds) {
    console.log( "getEveryPoss");
    var optionsArray = ["rock", "paper", "scissors"];
    var possibilitiesArray = [];

    for (var i = 0; i < optionsArray.length; i++) {
        for (var j = 0; j < optionsArray.length; j++) {
            for (var k = 0; k < optionsArray.length; k++) {
                possibilitiesArray.push( [optionsArray[i], optionsArray[j], optionsArray[k]]);
            };
        };
    };
    return possibilitiesArray;
  };

  // Main
  var oneRoundPossibilities = getOneRoundPossibilities();
  console.log("REQUESTED ROUNDS: " + rounds);
  for (var r = 1; r <= rounds; r++) {
    console.log("* ROUND " + r + " *");
    retArray.push( oneRoundPossibilities );
  };

  return retArray;
};

console.log( rockPaperScissors(5) );
