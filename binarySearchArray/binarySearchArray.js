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
  if (Array.isArray(array) != true) {
    return console.log('error');
  }

  var arrayCopy = array.slice();
  var counter = Math.round((array.length-1)/2);
  var nextArray;


  var search = function(array, target, counter){

    var midPointIndex = Math.round((array.length-1)/2);
    var indexRight = array[midPointIndex + 1];
    var indexLeft = array[midPointIndex - 1];

    if (array[midPointIndex] > target){
      nextArray = array.slice(0, midPointIndex-1);
      counter -= Math.round((nextArray.length-1)/2);
      return search(nextArray, target, counter);
    } else if (array[midPointIndex] < target){
      nextArray = array.slice(midPointIndex+1, array.length);
      counter += Math.round((nextArray.length-1)/2);
      return search(nextArray, target, counter);
    } else {
      return counter;
    }

  };
  return search(arrayCopy, target, counter);

};

