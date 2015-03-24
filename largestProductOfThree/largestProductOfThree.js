/* Write a function that finds the largest possible product of any three numbers
 * from an array.
 *
 * Example:
 * largestProductOfThree([2, 1, 3, 7]) === 42
 *
 * Extra credit: Make your function handle negative numbers.
 */


var largestProductOfThree = function(array) {
  var largest = 0;

  var recurse = function(current, counter, i) {
    if(counter === 3) {
      if(largest < current) {
        largest = current;
      }
      return;
    }

    for( ; i < array.length; i++ ) {
      recurse(current * array[i], counter + 1, i + 1);
    }
  }

  recurse(1, 0, 0);

  return largest;
};
