/* Write a function that finds the largest possible product of any three numbers
 * from an array.
<<<<<<< HEAD
 *
=======
 * 
>>>>>>> 33f7642681e7ad989bb4969dc7a37f67f8e8c2f4
 * Example:
 * largestProductOfThree([2, 1, 3, 7]) === 42
 *
 * Extra credit: Make your function handle negative numbers.
 */


var largestProductOfThree = function(array) {
<<<<<<< HEAD
  // start on first digit, add the next two, start on second, add the next two, base case when a certain number of items have been cal
  var newArray = array.sort(function(a, b){
    return a-b;
  });
  var arrNum= array.length;
  return (array[arrNum - 1] * array[arrNum-2] * array[arrNum-3]);
=======
  // TODO: everything
>>>>>>> 33f7642681e7ad989bb4969dc7a37f67f8e8c2f4
};
