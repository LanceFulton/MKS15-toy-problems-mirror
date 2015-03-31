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

	var indexStorage = {};

	// loop through array and store values in indexStorage
	for (var i = 0 ; i < array.length ; i++){
		var value = array[i];
		indexStorage[value] = i;
	}

	var midpoint;
	var match;

	var recurse = function(){

		// find midpoint
		midpoint = (array.length/2);
		if (midpoint % 2){
			midpoint += .5;
		}
		// check midpoint against target
		if (array[midpoint] === target){
			match = array[midpoint];
		} else if (target < array[midpoint]){
			array.splice(midpoint, array.length-midpoint);
			recurse(array);
		} else {
			array.splice(0, array.length-midpoint);
			recurse(array);
		}
	}

	recurse(array, target);

	if (match){
		return indexStorage[match];
	} else {
		return null;
	}

};


var binarySearch = function (array, target){
	var sub = function(low, high){
		if (high === low) {
			return null;
		}
		var mid = Math.floor((high - low) / 2) + low;
		if (array[mid] === target){
			return mid;
		} else if (array[mid] > target){
			return sub(low, mid);
		} else {
			return sub(mid, high)
		}
	};

	return sub(0, array.length - 1);
}






















