/*
 * Given a sorted array, find the index of an element
 * using a binary search algorithm.
 *
 * Example usage:
 *
 * var index = binarySearch([1, 2, 3, 4, 5], 4);
 * console.log(index); // [3]
 */

//It has come to my attention that this might be cheating. 
var binarySearch = function (array, target) {
  var index = array.indexOf(target);
  return index;
};


var binarySearch = function(array, target) {
  var midPointIndex = Math.floor((array.length-1) / 2 );

  if (target === array[midPointIndex]) {
    return midPointIndex;
  }

  if (target > array[midPointIndex])
  for (var i = midPointIndex + 1 ; i < array.length; i++) {
    if (array[i] === target)
      return i;
  }

  if (target < array[midPointIndex])
  for (var j = midPointIndex - 1 ; j < array.length; j--) {
    if (array[j] === target)
      return j;
  }
};


//___________________________SOLUTION_______________________________

var binarySearch = function(array,target) {

  var sub = function(low, high) {

    if (high == low) {return null;} //doesn't account for an array with 1 element. 
    var mid = Math.floor((high-low) /2) + low;
    if (array[mid] === target) {
      return mid;
    } else if (array[mid] > target) {
      return sub(low, mid);
    } else {
      return sub(mid, high);
    }
  };

  return sub(0, array.length-1);
};
