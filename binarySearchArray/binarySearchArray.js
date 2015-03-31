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

	// recursive function
	// find midpoint, check against target
	// if target is lower, recurse with lower half
	// else, recurse with upper half

	var indexAdd = 0;
	var indexStorage = {};

	// loop through array and store values in indexStorage
	for (var i = 0 ; i < array.length ; i++){
		var value = array[i];
		indexStorage[value] = i;
	}

	var midpoint;
	var match;

	var recurse = function(){

		midpoint = (array.length/2);
		if (midpoint % 2){
			midpoint += .5;
		}

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
	return indexStorage[match];

};



