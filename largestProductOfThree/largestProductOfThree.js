/* Write a function that finds the largest possible product of any three numbers
 * from an array.
 * 
 * Example:
 * largestProductOfThree([2, 1, 3, 7]) === 42
 *
 * Extra credit: Make your function handle negative numbers.
 */


var largestProductOfThree = function(array) {
  //hold three largest numbers
  var results = [];

  //sort array
  var newArray = array.sort();

  //pop the number from array three times and push it to results
  for(var i = 0; i < 4; i++){
    var largest = newArray.pop();
    if(largest !== undefined){
    results.push(largest);
    }
  }

  //multiply all elements together and return
  return results.reduce(function(a,b){return a*b;});

  //not working 
};
