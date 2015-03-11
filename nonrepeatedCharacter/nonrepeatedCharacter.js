/**
 * Given an arbitrary input string, return the first nonrepeated character in
 * the string. For example:
 *
 *   firstNonRepeatedCharacter('ABA'); // => 'B'
 *   firstNonRepeatedCharacter('AACBDB'); // => 'C'
 */

var firstNonRepeatedCharacter = function(string) {
  var remaining = string.slice();
  while (remaining.length !== 0) {
    var isRepeat = false;
    for (var i=remaining.length-1; i>0; i--) {
      if (remaining[i] === remaining[0]) {
        isRepeat = true;
        remaining = remaining.slice(0,i) + remaining.slice(i+1);
      }
    }
    if (!isRepeat) {
      return remaining[0];
    } else {
      remaining = remaining.slice(1);
    }
  }
  return '';
};
