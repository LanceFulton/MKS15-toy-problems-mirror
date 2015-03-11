/**
 * Given an arbitrary input string, return the first nonrepeated character in
 * the string. For example:
 *
 *   firstNonRepeatedCharacter('ABA'); // => 'B'
 *   firstNonRepeatedCharacter('AACBDB'); // => 'C'
 */

var firstNonRepeatedCharacter = function(string) {
  // for each character in the string
  for (var i = 0 ; i < string.length ; i++){
  	var repeated = false;
  	// search every other character in the string
  	for (var j = 0 ; j < string.length ; j++){
  		// exclude the original character
  		if (i !== j){
  			// determine if the characters match
  			if ( string.charAt(i) === string.charAt(j) ){
  				repeated = true;
  			}
  		}
  	}
  	// if the character is not repeated, return the character
  	if (!repeated) {
  		return string.charAt(i);
  	}
  }
};
