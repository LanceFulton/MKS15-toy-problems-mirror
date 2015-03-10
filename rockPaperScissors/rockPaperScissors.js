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
  // TODO: your solution here
  //create a loop that loops through 1 2 3
  //at slot 1, loop through three possibilities
  //at slot 2, loop through three possibilities, etc...
  var results = [];
  var plays = ["rock", "paper", "scissors"];
  var round = [];
  var roundCount = 0;

  // for (var j = 0; j < 3; j++){
  //   //call cycleAllPlays at each index
  //   //at index 0, push rock, index 1 push rock, index 2 - cycle all plays
  //   round[j] = cycleAllPlays();
  // }

  var cycleAllPlays = function(i, j, l) {
    round.push(plays[i]);
    round.push(plays[j]); 
    round.push(plays[l]);   
    results.push(round);
    round = [];
  }
  

var i = 0,
    j = 0,
    l = 0;
  //for index 0 1 2 only change index 2, for index 3 4 5 only change index 1, for index 6 7 8 only change index 0

  //at array[0], push new array [rock, rock, rock], then push new array [rock, rock, paper], etc.
  for (i; i < 3; i++){
    //round[roundCount] = [];
    cycleAllPlays(i, j, l);
      for (j; j < 3; j++) {
        cycleAllPlays(i, j, l);
        for (l; l < 3; l++) {
          cycleAllPlays(i, j, l);
        }     
    }
  }
    //results.push(round);
    
  // }
  console.log(results);

};
rockPaperScissors();
