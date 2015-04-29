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

//We want to input an array of any size

var rockPaperScissors = function (input) {
  //We need a results array to store all of our arrays
  //input for now will be [rock, paper, scissors];
  var results = [];
  var currentIndex = 0;

  //Ideally this could be solved using recursion
  //Start with first value in array.
  //iterate through all items after the first to produce all combination
  //move to next value on first index
  //Recursive funtion will start with input[0]
  //At end of function it will call input[currentIndex++]
  var recurse = function(index) {
    //where we can store our current array to be pushed into results later
    if (currentIndex < input.length) {
      var tempArray = [];
      for (var i = 0; i < input.length; i++) {
        for (var j = 0; j < input.length; j++) {
          tempArray.push(index);
          tempArray.push(input[i]);
          tempArray.push(input[j]);
          results.push(tempArray);
          tempArray = [];
        }
      }
      currentIndex++;
      recurse(input[currentIndex]);
    }
  }
  recurse(input[currentIndex]);
  return results;
};
