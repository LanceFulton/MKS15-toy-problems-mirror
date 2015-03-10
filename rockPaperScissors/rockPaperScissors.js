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

var rockPaperScissors = function (numRounds) {

  var results = [];

  var getResult = function(value){
	  if(value === 0){
	 	  return "rock";
	  }
	  if(value === 1){
	 	  return "paper";
	  }
	  if(value === 2){
	 	  return "scissors";
	 	}
  } 	

  for(var round1 = 0; round1 < 3; round1++){
  	for(var round2 = 0; round2 < 3; round2++){
  		for(var round3 = 0; round3 < 3; round3++){
        results.push([getResult(round1), getResult(round2), getResult(round3)]);
  		}
  	}
  }

  return results;
};

console.log(rockPaperScissors());

/*
var play = function(){
	value--;
	for(var round = 0; round < 3; round++){
    if(value > 0){
    	play();
    }else{
      results.push(getResult(round));
    }
	}
}
*/
