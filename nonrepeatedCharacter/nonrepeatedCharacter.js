/**
 * Given an arbitrary input string, return the first nonrepeated character in
 * the string. For example:
 *
 *   firstNonRepeatedCharacter('ABA'); // => 'B'
 *   firstNonRepeatedCharacter('AACBDB'); // => 'C'
 */

var firstNonRepeatedCharacter = function(string) {
  var duplicates = [];

  var compare = function(index) {
    // debugger;
    if( duplicates.indexOf(string[index]) < 0 ) {
      for( var i = index + 1; i < string.length; i++ ) {
        if( string[i] === string[index] ) {
          duplicates.push(string[i]);
          break;
        }
      }
    }

    if( duplicates.indexOf(string[index]) < 0 ) {
      return string[index];
    } else {
      return compare(index + 1);
    }
  };

  return compare(0);
};