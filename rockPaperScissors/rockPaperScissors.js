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

var rockPaperScissors = function (n) {
  // TODO: your solution here
  var hands = ["rock", "paper", "scissors"];
  var result = [];

  if(n === 1){
    for(var i = 0; i < hands.length; i++){
      result.push(hands[i]);
    }
  } else{
    // get the length of n-1 and call the function back recursivley 
    var again = rockPaperScissors(n-1);
    // for[j] of recursive.length  ---->
    for(var j = 0; j < rockPaperScissors.length; j++){
    // grab hold of j
    var recursiveElem = rockPaperScissors[j];
      // for[i] of hands.length ----->
      for(i = 0; i < hands.length; i++){
        recursiveElem = //slice???
        // push it to both choices[i] and result ?????
        //keep recursing until nothing left
      }
    }
  }
//function ends when n is 0 and returns result
}


