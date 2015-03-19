/* Write a function that finds the largest possible product of any three numbers
 * from an array.
 * 
 * Example:
 * largestProductOfThree([2, 1, 3, 7]) === 42
 *
 * Extra credit: Make your function handle negative numbers.
 */


var largestProductOfThree = function(array) {
  array = array.sort();
  var largestThree = array.slice(array.length-3, array.length);
  console.log(largestThree);
  var result = largestThree[0] * largestThree[1] * largestThree[2];
  return result;
};

//or

var largestProductOfThree = function(array) {
  var result = 1;
  array = array.sort();
  var largestThree = array.slice(array.length-3, array.length);
  for (var i = 0; i < largestThree.length; i++) {
    result *= largestThree[i];
  }
  return result;
};

//Not sure which way is better. I kind of like the first one. It seems like the second one would be more expensive.