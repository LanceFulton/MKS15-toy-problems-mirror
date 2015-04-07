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

  //store middle index
  var middleIndex = Math.floor((array.length) / 2);

  //check if middle value equals target
  if(array[middleIndex] === target){
    //return that index
    return middleIndex;
    //check if target is greater than the middle value
  } else if (target > array[middleIndex]){
    //call binarySearch again with right half of array and multiply the returned index by 2 to obtain original array's index
    return binarySearch(array.slice(middleIndex), target) * 2 + 1;
  } else {
    //call binarySearch again with left half of array
    return binarySearch(array.slice(0, middleIndex), target) + 1;
  }



  // var result;

  // var checkTarget = function(sampleArray, midIndex){
  //   var middle = Math.floor(sampleArray.length / 2);
  //   if(sampleArray[middle] === target){
  //     result = midIndex;
  //   } else if (target > sampleArray[middle]){
  //     checkTarget(sampleArray.slice(middle), );
  //   } else {
  //     checkTarget(sampleArray.slice(0, middle));
  //   }
  // }

  // checkTarget(array, array.length / 2);

  // return result;
};

