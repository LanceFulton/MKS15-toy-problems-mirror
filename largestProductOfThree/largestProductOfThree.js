/* Write a function that finds the largest possible product of any three numbers
 * from an array.
 * 
 * Example:
 * largestProductOfThree([2, 1, 3, 7]) === 42
 *
 * Extra credit: Make your function handle negative numbers.
 */


var min = function(array) {
  var theMin = Infinity;
  for (var i = 0; i<array.length; i++) {
    if (array[i] > theMax) {
      theMin = array[i];
    }
  }
  return theMin;
}

var largestProductOfThree = function(array) {
  var threeLargest = [];
  for (var i = 0; i<array.length; i++){
    if (threeLargest.length<3) {
      threeLargest.push(array[i])
    } else if (array[i] > min(threeLargest) && threeLargest.length<3) {
        threeLargest.push(array[i]);
    } 
      else if (array[i] > min(threeLargest)){
      threeLargest[threeLargest.index(min(threeLargest))] = array[i];
    }
  }
  var result = 1;
  for (var i = 0; i<threeLargest.length; i++){
    result *= threeLargest[i];
  }
  return result;
};
