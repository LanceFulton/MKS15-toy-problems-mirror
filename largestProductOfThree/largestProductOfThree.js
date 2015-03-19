/* Write a function that finds the largest possible product of any three numbers
 * from an array.
 * 
 * Example:
 * largestProductOfThree([2, 1, 3, 7]) === 42
 *
 * Extra credit: Make your function handle negative numbers.
 */

var largestProductOfThree = function(array) {

  var array = array.sort(function(a,b){return Math.abs(b)-Math.abs(a)});
  return array[0] * array[1] * array[2];

};
