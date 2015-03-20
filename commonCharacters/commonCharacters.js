/**
 * Write a function `f(a, b)` which takes two strings as arguments and returns a
 * string containing only the unique characters found in both strings, in the
 * order that they appeared in `a`. Remember to skip spaces and characters you
 * have already encountered!
 *
 * Example: commonCharacters('acexivou', 'aegihobu')
 * Returns: 'aeiou'
 *
 * Extra credit: Extend your function to handle more than two input strings.
 */


var commonCharacters = function(string1, string2) {

	var resultString = "";

	// remove duplicates from each array and store results as objects
	var removeDuplicates = function(string){
		var result = {};
		for (var i = 0 ; i < string.length ; i++){
			if (string.charAt(i) !== " " && !result[string.charAt(i)]){
				result[string.charAt(i)] = 1;
			}
		}
		return result;
	};

	obj1 = removeDuplicates(string1);
	obj2 = removeDuplicates(string2);

	// loop through second object and compare to first object
	for (var key in obj2){
		// if character exists in first object, add to string
		if (obj1[key]){
			resultString = resultString + key;
		}
	}

	return resultString;

};


/*-----MKS Solution-----*/

var commonCharacters = function (str1, str2) {
	return intersection(str1, str2);
}

var intersection = function (set1, set2) {

}

var objectify = function (str) {

}


/*

• used Object.keys
• used regex





