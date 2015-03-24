/* Write a function that finds the largest possible product of any three numbers
 * from an array.
 * 
 * Example:
 * largestProductOfThree([2, 1, 3, 7]) === 42
 *
 * Extra credit: Make your function handle negative numbers.
 */


var largestProductOfThree = function(array) {
  var largestNums = [0, 0, 0];
  var negNums = [0, 0, 0]; // two neg numbers can have a greater total
  
  // iterate through array
  for (var i = 0; i < array.length; i++) {
    // compare it to the three largest numbers
    for (var j = 0; j < largestNums.length; j++) {
      if (array[i] > largestNums[j]) {
        largestNums.splice(j, 0, array[i]);
        largestNums = largestNums.slice(0,3);
        break;
      } else if (array[i] < negNums[j]) {
        negNums.splice(j, 0, array[i]);
        negNums = negNums.slice(0,3);
        break;
      }
    }
  }
  // compare all positive vs 1positive and 2negatives
  return Math.max(largestNums.reduce(function(a,b){ return a * b; }),
                  largestNums[0] * negNums[0] * negNums[1]);
};
