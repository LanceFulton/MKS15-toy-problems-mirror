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
	// create an array of possible inputs for each stage of the sequence
	var possibles = ['rock', 'paper', 'scissors'];

	// and a variable to keep track of which answer should currently be taken from the array, for each stage
	var firstCurrent = 0;
	var secondCurrent = 0;
	var thirdCurrent = 0;

	// and a variable to count how many times the second and third arrays have been run through
	var secondCount = 0;
	var thirdCount = 0;

	// and result arrays
	var currentResult = [];
	var finalResult = [];

  	// outer loop
  	while(thirdCount <= 27){
  		currentResult.push(possibles[firstCurrent]);
  		currentResult.push(possibles[secondCurrent]);
  		currentResult.push(possibles[thirdCurrent]);
  		thirdCount++
  		thirdCurrent++
  		console.log("currentResult: " + currentResult);

  		//after third stage has pushed everything once, restart third stage and increment second stage
  		if (thirdCount % 3 === 0){
  			finalResult.push(currentResult);
  			currentResult = [];
  			secondCount++;
  			secondCurrent++;
  			thirdCurrent = 0;
  		}

  		//after second stage has pushed everything once, restart second stage and increment third stage
  		if (secondCount % 3 === 0){
  			firstCurrent++;
  			secondCurrent = 0;
  		}
  	}
  	
  	return finalResult;

};


