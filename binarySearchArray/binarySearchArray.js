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
  var start = 0;
  var end = array.length - 1;
  var middle;

  if ( target < array[start] || target > array[end] ) {
    return -1;
  }

  while ( (array[ middle = Math.floor((start + end) / 2) ]) !== target ) {
    if ( target < array[middle] ) {
      end = middle;
    } else if ( target > array[middle] ) {
      start = middle;
    }
  }

  return middle;
};
