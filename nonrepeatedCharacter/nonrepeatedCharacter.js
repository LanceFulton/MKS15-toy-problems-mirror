/**
 * Given an arbitrary input string, return the first nonrepeated character in
 * the string. For example:
 *
 *   firstNonRepeatedCharacter('ABA'); // => 'B'
 *   firstNonRepeatedCharacter('AACBDB'); // => 'C'
 */

var firstNonRepeatedCharacter = function(string) {
  // TODO: your solution here
  var result = "";

  var recurse = function(checkChar, index) {
  //accepts a character and loops through entire array checking
  //if that character repeats
    var repeated = false;
    //base case, see if the character has repeated
    
    for (var i = 0; i < string.length; i++){
      //loop through entire string and check if the character is repeated
      //make sure it's not checking against itself also
      if (i !== index && checkChar === string[i]){
        //set repeated to true so this character doesn't get set to result
        //break out of for loop as soon as it finds a repeat
        repeated = true;
        break;
      }
    }
    
    //recurse through function again with next letter
    //check that we are still within the bounds of the string
    if (index + 1 < string.length) {
      recurse(string[index + 1], index + 1);	
    }
    //if repeated is false for this recurse call, it went through the 
    //entire string without finding a repeat so set result to that character
    if (repeated === false) {
      result = checkChar;
    }

  }

  recurse(string[0], 0);
  return result;
};
