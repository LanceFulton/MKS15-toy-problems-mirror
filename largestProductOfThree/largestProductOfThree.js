/* Write a function that finds the largest possible product of any three numbers
 * from an array.
 * 
 * Example:
 * largestProductOfThree([2, 1, 3, 7]) === 42
 *
 * Extra credit: Make your function handle negative numbers.
 */


var largestProductOfThree = function(array) {
  
	// sort the array

	function sortPair(a,b){
		return a - b;
	}

	var sortedArray = array.sort(sortPair);

	// multiply largest three numbers (last 3 in sortedArray)

	var multLargest = function(array){
		var a = array[array.length-1];
		var b = array[array.length-2];
		var c = array[array.length-3];

		return a*b*c;
	}

	return multLargest(sortedArray);

};
