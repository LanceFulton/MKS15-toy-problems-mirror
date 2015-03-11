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

var rockPaperScissors = function (rounds) {
  // TODO: your solution here
  var result=[];
  var choice=["rock", "paper", "scissors"];
  // over each rounds
  for (var n=0; n<rounds; n++){
    // over a possible 3^n combination
    for (var i=0; i<Math.pow(choice.length,rounds); i++){
        // if the combination bucket hasn't been established
        if (!result[i]){
          // then initialize it with a value
          result[i]=[];
        }
        // else, regardless, just push the combination into the bucket until it has size of rounds
        var index=Math.floor(i/(Math.pow(3,rounds-n-1))); 
        index=index%3;
        /*
        above code calculate frequency, for example, for all the first round result,
        it will change  the choice every 3^n/3 times
        2nd round, it will change the choice every 3^n/(3^2) times
        3rd round, it will change the choice every 3^n/(3^3) times.
        this resemble a permutation generator, like below
        1st element changes every 3 element, (3^2/3)
        2nd element changes every 1 element. (3^2/(3^2))
        [a,           a]
        [a,           b]
        [a,           c]
        ........
        */
        result[i].push(choice[index]);
    }
  }
  
  /*
  for (var i=0; i<choice.length; i++){
    for (var j=0; j<choice.length; j++){
      for (var k=0; k<choice.length; k++){
        result.push([choice[i], choice[j], choice[k]]);
      }
    }
  }
  */
  return result;
};

// below are testing code to log out result;
/*
var dummy=rockPaperScissors(2);
console.log(dummy.length);
for (var i=0; i<dummy.length; i++){
  console.log(dummy[i]);
}
*/
