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
  var binarySearchRecurse = function(low, high) {
    if (low <= high) {
      var med = Math.floor((low + high)/2);
      if (array[med] === target) {
        return med;
      } else {
        if (array[med] < target) {
          return binarySearchRecurse(med+1, high);
        } else {
          return binarySearchRecurse(low, med-1);
        }
      }
    } else return -1;
  }
  return binarySearchRecurse(0, array.length-1);
};

var index = binarySearch([1, 2, 3, 4, 5], 4);
console.log(index); // [3]
