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
  var words = ['rock', 'paper', 'scissors'];
  var results = [];
  for (var i = 0; i<Math.pow(3, rounds); i++) {

    var oneGame = [];
    var stringBase3 = i.toString(3);

    while (stringBase3.length<rounds) {
      stringBase3 = '0' + stringBase3;
    }

    for (var j = 0; j<rounds; j++){

      oneGame.push(words[stringBase3[j]]);

    }
    results.push(oneGame);
  }
  return results;
}
