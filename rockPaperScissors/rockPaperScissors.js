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

var rockPaperScissors = function () {
  var rockpapsciss = ['rock', 'paper', 'scissors'];
  var resultArr = [];
  var randomizeThrows = function () {
    for( var i = 0; i < rockpapsciss.length; i++) {
      for( var k = 0; k < rockpapsciss.length; k++) {
        for( var j = 0; j < rockpapsciss.length; j++) {
          var array = [];
          array.push(rockpapsciss[i]);
          array.push(rockpapsciss[k]);
          array.push(rockpapsciss[j]);
          resultArr.push(array);
        }
      }
    }
  }
  randomizeThrows();

  return resultArr;
};
