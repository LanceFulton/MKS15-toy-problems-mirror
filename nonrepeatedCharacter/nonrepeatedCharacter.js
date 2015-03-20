/**
 * Given an arbitrary input string, return the first nonrepeated character in
 * the string. For example:
 *
 *   firstNonRepeatedCharacter('ABA'); // => 'B'
 *   firstNonRepeatedCharacter('AACBDB'); // => 'C'
 */

var firstNonRepeatedCharacter = function(string) {
  var tally = {};
  
  for (var i = 0; i < string.length ; i++) {
    (!tally[string[i]]) ? (tally[string[i]] = 1) : tally[string[i]]++;
  }  
  
  for (var i = 0; i < string.length; i++) { 
    if (tally[string[i]] === 1) {
      return string[i];
    }
  }  
};
