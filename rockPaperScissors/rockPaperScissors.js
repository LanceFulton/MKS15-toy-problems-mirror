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
  //Store all results 
  var results = [];
  //I'm setting the array of options here so I can keep a reference of it that is unaltered. 
  var items = ['rock', 'paper', 'scissors'];


  //Creating a recursive function to go through each possibility for each index 
  function nextPlay(array){
    //Our base case will terminate our loop when we run out of indicies in our array argument.
    if (array.length < 1){
      return results;
    }

  	//setting a variable of our current play selections, which will be later 
  	var currentPlay = [];
  	//set zero index to equal current play arg
  	currentPlay.push(array[0]);
  	//starting at index 1, add one item.
  	for(var i = 1; i < 3; i++){
  	  //The conditional here is critical. If we are on the second index, we want to iterate through all of the third index options
  	  if (i = 1){
  		  //We want to push this onto the array before we iterate through our options.
  		  currentPlay.push(items[i]);
  		  for(var j = 0; j < 3; j++){
	  		  currentPlay.push(items[j]);
	  		  results.push(currentPlay);
	  	  }
	  	  //If we are done with the second index, we will then place our new items into the second index, and add our i value to the third index.
  	  } else if (i = 2){
  		  for(var j = 0; j < 3; j++){
	  		  currentPlay.push(items[j]);
	  		  results.push(currentPlay);
	  	  }
        currentPlay.push(items[i]);
  	  }
    }
    //Shifting off the first index of our argument will help us move closer to our base case. 
    array.shift();
    //Recurse through the function again
    nextPlay(array);
  }
  //start the recursive function
  nextPlay(items);
};
