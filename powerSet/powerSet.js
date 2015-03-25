/*
 * Return an array with the power set of a given string.
 * Definition of power set: The set of all possible subsets including the empty set.
 *
 * Example:
 *
 * powerSet("abc")
 * -> [ '' , 'a', 'b', 'c', 'ab', 'ac', 'bc', 'abc' ]
 *
 * Note: 
 *  1. All characters in a subset should be sorted.
 *  2. Sets of the same characters are considered duplicates regardless of order and count only once, e.g. 'ab' and 'ba' are the same. 
 * 
 * Example 2 :
 * 
 * powerSet("jump")
 * -> ["", "j", "ju", "jm", "jp", "jmu", "jmp", "jpu", "jmpu", "u", "m", "p", "mu", "mp", "pu", "mpu"]
 */

 // create results array

 // add empty set to results array

 // store charcters in object

 // loop through object

 	// for each character, generate sets including just that character and it with all following characters
 	// add each set to results array

 // return results array

var powerSet = function(str){

	// create results array
	var results = [];

	// add empty set to results array
	results.push('');

	// store charcters in object to remove duplicates
	var strObj = {}
	for (var i = 0 ; i < str.length ; i++){
		strObj[str.charAt(i)] = str.charAt(i);
	}

	// convert object to array so we can move through it in order
	var strAry = [];
	for (var key in strObj){
		strAry.push(strObj[key]);
	}

	// sort the array
	strAry.sort();
	console.log(strAry);

	// for each character, generate sets including just that character and it with all following characters
	// add each set to results array
	for (var i = 0 ; i < inputAry.length ; i++){
		recurse(inputAry[i]);;
	}

	var recurse = function(x){
		results.push(x);
		// if there are more letters, generate combinations with other letters and recurse on them
		if (strAry.length > strAry.indexOf(x)+1){
			
		}
	}

	// return results array
	return results;

}















