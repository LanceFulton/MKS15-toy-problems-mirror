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
  var hand = ['rock', 'paper', 'scissors']
  var results = [];
  var round = rounds || 3;
  
  var plays = function(roundsToGo, movesMade){
    if(roundsToGo === 0){
      results.push(movesMade)
      return;
    }
    for(var i = 0; i < hand.length; i++){
        var currentMove = hand[i]
        plays(roundsToGo-1, movesMade.concat(currentMove))
    }
  }
  plays(round, [])
  return results;
}

