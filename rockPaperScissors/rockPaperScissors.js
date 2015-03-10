/*
* Write a function that generates every sequence of throws a single
* player could throw over a three-round game of rock-paper-scissors.
*
* Your output should look something like:
*   [["rock", "rock", "rock"],
*    ["rock", "rock", "paper"],
*    ["rock", "rock", "scissors"],
*    ["rock", "paper", "rock"],
*            ...etc...
*    ]
*
* Extra credit:
*   - Make your function return answers for any number of rounds.
* Example:
* rockPaperScissors(5); // => [['rock', 'rock', 'rock', 'rock', 'rock'], etc...]
*
*/

var rockPaperScissors = function (rounds
) {
  if (rounds === undefined)
    rounds = 3;
  var results = [];
  var last = [];
  var allScissors = function(arr) {
    for (var i=0; i<arr.length; i++)
      if (arr[i] !== 'scissors')
        return false;
    return true;
  }
  if (rounds === 0)
    return results;
  while (last.length === 0 || !allScissors(last)) {
    if (last.length === 0) {
      for (var i=0; i < rounds; i++) {
        last[i] = 'rock';
      }
    } else {
      for (var i=0; i < rounds; i++) {
        if (last[i] === 'rock') {
          last[i] = 'paper';
          for (var j=0; j < i; j++)
            last[j] = 'rock';
          break;
        } else if (last[i] === 'paper') {
          last[i] = 'scissors';
          for (var j=0; j < i; j++)
            last[j] = 'rock';
          break;
        }
      }
    }
    results.push(last.slice());
  }
  return results;
};
