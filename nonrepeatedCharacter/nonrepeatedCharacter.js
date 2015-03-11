/**
 * Given an arbitrary input string, return the first nonrepeated character in
 * the string. For example:
 *
 *   firstNonRepeatedCharacter('ABA'); // => 'B'
 *   firstNonRepeatedCharacter('AACBDB'); // => 'C'
 */

var firstNonRepeatedCharacter = function(string) {
  var previousFound = true;
  var duplicates = [];

  for(var i = 0; i < string.length; i++) {
    if(previousFound) {
      previousFound = false;
      debugger;
      if(duplicates.indexOf(string[i]) < 0) {
        for(var j = i + 1; j < string.length; j++) {
          if(string[i] === string[j]) {
            previousFound = true;
            duplicates.push(string[i]);
            break;
          }
        }
      }
    } else {
      return string[i - 1];
    }
  }

  return '';
};