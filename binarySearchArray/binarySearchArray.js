/*
 * Given a sorted array, find the index of an element
 * using a binary search algorithm.
 *
 * Example usage:
 *[1,2,3,4,5,6,7,8,9,10]
 * var index = binarySearch([1, 2, 3, 4, 5], 4);
 * console.log(index); // [3]
 */

var binarySearch = function (array, target) {
  var midIndex;
  var mid;
  var newArr = [];
  var minArr = 0;
  var maxArr = array.length -1;
  var binField = [minArr , maxArr];
  var recurse = function(binField) {
    midIndex = Math.floor((binarySearchField[1] - binarySearchField[0])/2);
    mid = binField[midIndex]
    if ( target === mid) {
      return newArr.push(mid);
    } else if ( ???? ) {
      return undefined;
    }
    if ( binField[mid] > target ) {
      minArr = mid++;
      binField = [minArr, maxArr]
      recurse(binField)
    } else {
      maxArr = mid;
      binField = [minArr, mid];
      recurse(binField)
    }
  };
  recurse(binarySearchField)
};[0]

