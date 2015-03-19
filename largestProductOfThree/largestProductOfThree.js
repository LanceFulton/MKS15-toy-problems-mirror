/* Write a function that finds the largest possible product of any three numbers
 * from an array.
 * 
 * Example:
 * largestProductOfThree([2, 1, 3, 7]) === 42
 *
 * Extra credit: Make your function handle negative numbers.
 */


var largestProductOfThree = function(array) {
  if (array.length < 3)
    return null;
  var maxElements = [null, null, null];
  var minElements = [null, null];
  for (var i=0; i<array.length; i++) {
    if (array[i] > maxElements[0] || maxElements[0] === null) {
      maxElements[2] = maxElements[1];
      maxElements[1] = maxElements[0];
      maxElements[0] = array[i];
    } else if (array[i] > maxElements[1] || maxElements[1] === null) {
      maxElements[2] = maxElements[1];
      maxElements[1] = array[i];
    } else if (array[i] > maxElements[2] || maxElements[2] === null) {
      maxElements[2] = array[i];
    }

    if (array[i] < minElements[0] || minElements[0] === null) {
      minElements[1] = minElements[0];
      minElements[0] = array[i];
    } else if (array[i] < minElements[1] || minElements[1] === null) {
      minElements[1] = array[i];
    }
  }
  return Math.max(maxElements[0]*maxElements[1]*maxElements[2], maxElements[0]*minElements[0]*minElements[1]);
};
