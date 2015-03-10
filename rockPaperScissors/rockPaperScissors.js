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

var rockPaperScissors = function (number) {
  //user will have selection	
  var selection = ["rock", "paper", "scissors"];
  //user will have result
  //could also prompt user for number but entered infinite while loop
  var result = [];
  if (number === undefined) {
  	number = 3;
  }
  //if number
  if (number === 1) {
  	for (var i =0; i<selection.length; i++) {
  		//add selection as an aray to result
  		result.push([selection[i]]);
  	}
  } else {
  	//use slice method and add by pushing into array
  	var iterate = rockPaperScissors(number-1);
    for(var m = 0; j < iterate.length; m++) {
      var element1 = itereate[m];
      for(var j = 0; j < selection.length; j++) {
      	//became undefined
        var element2 = element1.slice(0);
        element2.push(selection[j]);
        result.push(element2);
      }
    }
  }

return result;
};
