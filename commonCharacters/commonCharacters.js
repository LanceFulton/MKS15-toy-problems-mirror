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


var commonCharacters = function(string1) {
  var result = [];
  var allChars = {};

  //loop through each argument
  for(var j = 1; j < arguments.length; j++){
  	var uniqChars = {};
  	var string = arguments[j];
  	//loop through the string and check for unique characters
	  for(var i=0; i<string.length; i++){
	  	var currChar = string[i];
	  	if(uniqChars[currChar] === undefined){
	      uniqChars[currChar] = true;
	  	}else if(uniqChars[currChar] === true || currChar !== " "){
	      uniqChars[currChar] = false;
	  	}
	  }
	  //copy unique characters into all Characters object
	  for(var key in uniqChars){
	  	allChars[key] = uniqChars[key];
	  }
  }

  //check characters from string against allChars object
  for(var i=0; i<string1.length; i++){
  	var currChar = string1[i];
  	if(allChars[currChar] === true){
      result.push(currChar);
  	}
  }

  return result.join("");
};
