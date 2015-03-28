/*
 * Given a sorted array, find the index of an element
 * using a binary search algorithm.
 *
 * Example usage:
 *
 * var index = binarySearch([1, 2, 3, 4, 5], 4);
 * console.log(index); // [3]
 */

var binarySearch = function (array, target) {
  var first = 0;
  var last = array.length - 1;
  indexFound = false;

  while( (first <= last) && (indexFound === false) ){
    var midpoint = (first + last)/2;
    if(array[midpoint] === target){
      indexFound = midpoint;
    }
    else{
      if(array[midpoint] > target){
        last = midpoint - 1;
      } else{
        first = midpoint + 1;
      }
    }
  return indexFound;
  }
};

