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
  var retVal = 0;
  var args = Array.prototype.slice.call(arguments);
  var len = array.length;

  var beg = 0;

  var bSearch = function (array, beg, end) {
    console.log("Array: " + array + " beg: " + beg + " end: " + end);
    // Given the halfway point, decide which half of the array the value is in.
    var midPt = Math.floor( end - beg );

    if(target<array[midPt]) {
      return bSearch(array, 0, midPt);
    } else if (target>array[midPt]) {
      return bSearch(array, midPt, len);
    } else if(target===array[midPt]) {
      console.log("FOUND! at " + midPt);
    }

    return midPt;  

  }


  bSearch(args[0], 0, len-1);

  return retVal;
};

var index = binarySearch([1, 2, 3, 4, 5], 4);
console.log(index); // [3


/* A SOLUTION
var binarySearch = function(array, target) {
  if (high === low) { return null; }
  var sub = function(low, high) {
    var mid = Math.floor((high - low) / 2) + low;
    if (array[mid] === target) {
      return mid;
    }
  };

  return sub(0, array.length - 1);
}

Time Complexity:  Logorythmic! (VERY fast array search) - o(log(n))

 */