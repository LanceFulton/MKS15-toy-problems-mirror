/* Write a function that finds the largest possible product of any three numbers
 * from an array.
 * 
 * Example:
 * largestProductOfThree([2, 1, 3, 7]) === 42
 *
 * Extra credit: Make your function handle negative numbers.
 */

//for each index of array I will multiply every 'other two items' item of the array with every combination.
//it will also.
//try sorting and getting the product of the last three numbers.
var largestProductOfThree = function(array) {
  var sortedArray = array.sort();
  var index = sortedArray.length - 1;
  return sortedArray[index] * sortedArray[index -1] * sortedArray[index -2];
};
