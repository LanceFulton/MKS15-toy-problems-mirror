/**
 * Given an arbitrary input string, return the first nonrepeated character in
 * the string. For example:
 *
 *   firstNonRepeatedCharacter('ABA'); // => 'B'
 *   firstNonRepeatedCharacter('AACBDB'); // => 'C'
 */

var firstNonRepeatedCharacter = function(string) {

  var charCount = {};

  for (var i = 0; i<string.length; i++) {
    var char = string[i];
    charCount[char] =  (charCount[char] || 0) + 1;
  }

  for (var i = 0; i<string.length; i++) {
    if (charCount[string[i]] === 1) {
      return string[i];
    }
  }
};
