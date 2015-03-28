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
  var recursiveBinarySearch = function(start, end) {
    if (start >= end) {
      return array[start] === target ? start : -1;
    } else {
      var middle = Math.floor((start + end)/2);
      return array[middle] ===  target ? middle : 
                array[middle] > target ? recursiveBinarySearch(start, middle-1) : 
                array[middle] < target ? recursiveBinarySearch(middle+1, end) : null;
    }
  };
  return recursiveBinarySearch(0, array.length);
};

