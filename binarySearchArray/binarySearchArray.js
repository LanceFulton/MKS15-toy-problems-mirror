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

  var subroutine = function(bot, top){  

  	if(top === bot){return null;}

  	var mid = Math.floor((top + bot)/2 + bot);

	if(target === array[mid]){
	  return mid;
	}else if(array[mid] > target){
	  return subroutine(mid + 1, top - 1);
	}else{
	  return subroutine(0, mid - 1);
	}

	
  }

  return subroutine(0, array.length);

};

console.log(binarySearch([1,2,3,4,5], 1));