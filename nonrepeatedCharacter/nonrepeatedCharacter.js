/**
 * Given an arbitrary input string, return the first nonrepeated character in
 * the string. For example:
 *
 *   firstNonRepeatedCharacter('ABA'); // => 'B'
 *   firstNonRepeatedCharacter('AACBDB'); // => 'C'
 */

var firstNonRepeatedCharacter = function(string) {
  var letterCounts = {};
  var chars = [];
  for (var i = 0; i < string.length; i++){
    if (letterCounts[string[i]])
      letterCounts[string[i]] += 1;
    else{
      letterCounts[string[i]] = 1;
      chars.push(string[i]);
    }
  }
  
  for (var i = 0; i < chars.length; i++){
    if (letterCounts[chars[i]] === 1)
      return chars[i];
  }
  
  return null;
};
