/*
 * Given a sorted array, find the index of an element
 * using a binary search algorithm.
 *
 * Example usage:
 *
 * var index = binarySearch([1, 2, 3, 4, 5], 4);
 * console.log(index); // [3]
 [1,2,3,4,5]
 3

 [4,5]

 [4]
 */

var binarySearch = function (array, target) {
	var result = 0;

  var subroutine = function(arrayLength, index, target){  
	  
	  var middle = Math.floor((arrayLength+1)/2);

	  if(index === target){

	  	return index + result;

	  }else if(target > index){
      result = result + (arrayLength/4) * 3;

	  	return binarySearch(index + (arrayLength, target);

	  }else if(target < index){
      result = result + (arrayLength/4);

	  	return binarySearch(index,  target);

	  }
  }

  return subroutine(array.length, Math.floor(array.length/2), target);

};

console.log(binarySearch([1,2,3,4,5], 4));