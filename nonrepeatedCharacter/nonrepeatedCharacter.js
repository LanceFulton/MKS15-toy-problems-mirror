/**
 * Given an arbitrary input string, return the first nonrepeated character in
 * the string. For example:
 *
 *   firstNonRepeatedCharacter('ABA'); // => 'B'
 *   firstNonRepeatedCharacter('AACBDB'); // => 'C'
 */

var firstNonRepeatedCharacter = function(string) {
  var firstNonRepeatedCharacter = null;
    // if (firstNonRepeatedCharacter || i >= string.length) {
    //   return firstNonRepeatedCharacter;
    // }
    for(var i = 0; i < string.length; i++) {
      if (string.charAt(i) !== string.charAt(-1) && string.charAt(i) !== string.charAt(i+1) ) {
        firstNonRepeatedCharacter = string.charAt(i);
        break;
      }
    }
//   var patt = /e/;
// patt.test("The best things in life are free!");
  return firstNonRepeatedCharacter;
};
