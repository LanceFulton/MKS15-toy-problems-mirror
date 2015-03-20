/* Write a function that finds the largest possible product of any three numbers
 * from an array.
 * 
 * Example:
 * largestProductOfThree([2, 1, 3, 7]) === 42
 *
 * Extra credit: Make your function handle negative numbers.
 */


var largestProductOfThree = function(array) {
<<<<<<< HEAD
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

var largestProductOfThree = function(array) {
  array = array.sort(function(a,b) {
    return a-b;
  });
  var largestThree = array.slice(array.length-3, array.length);
  var result1 = largestThree[0] * largestThree[1] * largestThree[2];
  var result2 = array[0] * array[1] * array[array.length-1];
  if (result1 > result2) {
    return result1;
  } else {
    return result2;
  }
};




=======
  // TODO: everything
};
>>>>>>> 33f7642681e7ad989bb4969dc7a37f67f8e8c2f4
