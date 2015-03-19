/* Write a function that finds the largest possible product of any three numbers
 * from an array.
 * 
 * Example:
 * largestProductOfThree([2, 1, 3, 7]) === 42
 *
 * Extra credit: Make your function handle negative numbers.
 */

//using sort and getting last 3 numbers
var largestProductOfThree = function(array) {
  array=array.sort();
  return array[array.length-1] * array[array.length-2] * array[array.length-3];
};

//covering negative numbers
