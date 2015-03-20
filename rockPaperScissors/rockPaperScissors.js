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

/* random rock, paper, scissor generator
var rockPaperScissors = function (rounds) {
  var results = [];
  var outcomes = ['rock','paper','scissors'];
  
  for (var i = 0; i < rounds; i++) {
    var roll = Math.floor(Math.random() * outcomes.length);
    results.push(outcomes[roll]);
  }
  return results;
};

rockPaperScissors(3);
*/

var rockPaperScissors = function (rounds) {
  var results = [];
  var outcomes = ['rock','paper','scissors'];
  
  for (var i = 0; i < outcomes.length; i++) {
    for (var j = 0; j < outcomes.length; j++) {
      for (var k= 0; k < outcomes.length; k++) {
        var temp = [];
        temp.push(outcomes[i].concat(", ",outcomes[j].concat(", ",outcomes[k])));
        results.push(temp);
      }
    }
  }
  return results;
};

