
// * Write a function that generates every sequence of throws a single
// * player could throw over a three-round game of rock-paper-scissors.
// *
// * Your output should look something like:
// *   [["rock", "rock", "rock"],
// *    ["rock", "rock", "paper"],
// *    ["rock", "rock", "scissors"],
// *    ["rock", "paper", "rock"],
//              ...etc...
//      ]
// *
// * Extra credit:
// *   - Make your function return answers for any number of rounds.
// * Example:
// * rockPaperScissors(5); // => [['rock', 'rock', 'rock', 'rock', 'rock'], etc...]
// *


var rockPaperScissors = function (rounds) {
  // TODO: your solution here
  var result = [];
  var moves = ['rock', 'paper', 'scissors'];

  var recurse = function(round){

    if(round.length < rounds){

      for (var i = 0; i < moves.length; i++){
        round.push(moves[i]);
        recurse(round);
      }

    }

    var finishedRound = round.slice();

    if(finishedRound.length === rounds){
      result.push(finishedRound);
    }

    round.pop();
  }

  recurse([]);
  return result;
}

















// First attempt at RPS
  // //things we know from the start: we will return an array of results
  // //it will have some number of rounds that will be passed in as an argument
  // //the plays that can be generated
  // var results = [];
  // rounds = rounds || 3;
  // var rpsArray = ['rock', 'paper', 'scissors'];

  // //we need a recursive function to call for the operation
  // var recurse = function(currentArray){
  //   //we will have an array that stores the values for one round
  //   //base case will be when round array is equal to rounds.length
  //   if(currentArray.length === rounds){
  //     //we'll be pushing each round into results array
  //     results.push(currentArray);
  //     return;
  //   }
  //   //we know we need to loop through each possible play
  //   for (var i  = 0; i < rpsArray.length; i++) {
  //     var currentPlay = rpsArray[i];
  //     recurse(currentArray.concat(currentPlay));
  //   }
  // }

  // //pass in an empty array to store the round
  // recurse([]);


  // return results;



//   //create a loop that loops through 1 2 3
//   //at slot 1, loop through three possibilities
//   //at slot 2, loop through three possibilities, etc...
//   var results = [];
//   var plays = ["rock", "paper", "scissors"];
//   var round = [];
//   var roundCount = 0;

//   // for (var j = 0; j < 3; j++){
//   //   //call cycleAllPlays at each index
//   //   //at index 0, push rock, index 1 push rock, index 2 - cycle all plays
//   //   round[j] = cycleAllPlays();
//   // }

//   var cycleAllPlays = function(i, j, l) {
//     round.push(plays[i]);
//     round.push(plays[j]);
//     round.push(plays[l]);
//     results.push(round);
//     round = [];
//   }


// var i = 0,
//     j = 0,
//     l = 0;
//   //for index 0 1 2 only change index 2, for index 3 4 5 only change index 1, for index 6 7 8 only change index 0

//   //at array[0], push new array [rock, rock, rock], then push new array [rock, rock, paper], etc.
//   for (i; i < 3; i++){
//     //round[roundCount] = [];
//     cycleAllPlays(i, j, l);
//       for (j; j < 3; j++) {
//         cycleAllPlays(i, j, l);
//         for (l; l < 3; l++) {
//           cycleAllPlays(i, j, l);
//         }
//     }
//   }
//     //results.push(round);

//   // }
//   console.log(results);

// };
// rockPaperScissors();
