/**
 * Given an arbitrary input string, return the first nonrepeated character in
 * the string. For example:
 *
 *   firstNonRepeatedCharacter('ABA'); // => 'B'
 *   firstNonRepeatedCharacter('AACBDB'); // => 'C'
 */

var firstNonRepeatedCharacter = function(string) {
  // TODO: your solution here
  var repeatCount = {};

  for(var i = 0;i < string.length; i++){
    var current = string[i];
    if(repeatCount[current]){
      repeatCount[current] = -1;
    }
    else {
      repeatCount[current] = 1
    }
  }
  for(j = 0; j < string.length; j++){
    var currentLetter = string.charAt(j);
    if(repeatCount[currentLetter] === 1){
      return currentLetter;
    } 
  }
  return "all letters repeated";
};

firstNonRepeatedCharacter("aabbccddkkssjjrrllssmmeeuussywii");