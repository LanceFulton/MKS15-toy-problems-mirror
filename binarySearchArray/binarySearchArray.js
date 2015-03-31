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
  var minIndex=0;
  var maxIndex=array.length-1;
  var midIndex;
  while (minIndex<=maxIndex){
    midIndex=Math.round((minIndex+maxIndex)/2);
    if (array[midIndex]=== target){
      return midIndex;
    }
    else if (array[midIndex]< target) {
      minIndex=midIndex;
      midIndex=Math.round((midIndex+maxIndex)/2);
      maxIndex--;
      if (minIndex>maxIndex){
        break;
      }
    }
    else {
      maxIndex=midIndex;
      midIndex=Math.round((minIndex+midIndex)/2);
      minIndex++;
      if (minIndex>maxIndex){
        break;
      }
    }
  }
  return -1;
};


