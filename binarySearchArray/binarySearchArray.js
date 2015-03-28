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

	var recurse = function(){

		console.log('RECURSE');

		var midpoint = (array.length/2);
		console.log('MIDPOINT: ', midpoint);

		indexAdd += midpoint-1;
		console.log('ORIGINAL INDEX: ', midpoint + indexAdd);

		if (array[midpoint] === target){
			console.log('MATCH');
			return midpoint + indexAdd;
		} else if (target < array[midpoint]){
			array.splice(midpoint, array.length-midpoint);
		} else {
			array.splice(0, array.length-midpoint);
		}
	}

	recurse(array, target);

};


// var binarySearch = function (array, target) {

// 	// recursive function
// 	// find midpoint, check against target
// 	// if target is lower, recurse with lower half
// 	// else, recurse with upper half

// 	// find midpoint
// 	console.log('RECURSE');

// 	var midpoint = (array.length-1)/2;
// 	if (midpoint%1){
// 		midpoint += .5;
// 	}
// 	console.log('midpoint index: ', midpoint);
// 	console.log('midpoint value: ', array[midpoint]);
// 	console.log('target: ', target);

// 	// check midpoint against target
// 	if (array[midpoint] === target){
// 		console.log('MATCH');
// 		console.log('MIDPOINT ', midpoint);
// 		return midpoint;
// 	} else if (target < array[midpoint]){
// 		array.splice(midpoint, array.length-midpoint);
// 		console.log('less than');
// 		console.log('array: ', array);
// 	} else {
// 		array.splice(0, array.length-midpoint);
// 		console.log('greater than');
// 		console.log('array: ', array);
// 	}
// 	binarySearch(array, target);

// };

