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
  var mid = Math.floor(array.length / 2);

  var halve = function(array, target, midpoint) {
    if( target === array[midpoint] ) { return midpoint; }
    else if( target < array[midpoint] ) {
      midpoint = Math.floor(midpoint / 2);
    } else if( target > array[midpoint] ) {
      midpoint = Math.floor(midpoint + midpoint / 2);
    }
    return halve(array, target, midpoint);
  };

  if( target === array[0] ) { return 0; }
  else if( target === array[array.length - 1] ) { return array.length - 1; }
  else {  return halve(array, target, mid); }
};
