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

//original code from week 2
// var rockPaperScissors = function () {
//   var options = ['rock', 'paper', 'scissors'];
//   var used = [];

//   var permiate = function (options) {
//     var results = [];
//     for (var i = 0; i < options.length; i++) {
//       results.push([options[i], options[i], options[i]]);
//     }
//   return results;
//   };
// };



var rockPaperScissors = function(n) {
  var options = ['rock', 'paper', 'scissors'];
  var results; 
  var temp = [];

  var recurse = function(results, n) {
    if (temp.length === n) {
      results.push(temp);
    }
    for (var i = 0; i < options.length; i++) {
      temp.push(options[i]);
      for (var j = 0; j < options.length; j++) {
        temp.push(options[j]);
        for (var k = 0; k < options.length; k++) {
          temp.push(options[k]);
          recurse(temp, n);
        }
      }
    }
  };
  recurse([], n);
  return results;
};




