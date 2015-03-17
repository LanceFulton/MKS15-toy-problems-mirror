/**
 * Write a function `f(a, b)` which takes two strings as arguments and returns a
 * string containing only the unique characters found in both strings, in the
 * order that they appeared in `a`. Remember to skip spaces and characters you
 * have already encountered!
 *
 * Example: commonCharacters('acexivou', 'aegihobu')
 * Returns: 'aeiou'
 *
 * Extra credit: Extend your function to handle more than two input strings.
 */


var addCharactersToCountFromString = function(count, string) {
  for (var i = 0; i<string.length; i++) {
    count[string[i]] = count[string[i]] || 0;
    count[string[i]]++;
  }
};

var commonCharacters = function(string1, string2) {

  charCount = {};
  n = arguments.length

  for (var i = 0; i<n; i++) {
    addCharactersToCountFromString(charCount, arguments[i]);
    /*for (var j = 0; j<arguments[i].length; j++){
      charCount[arguments[i][j]] = charCount[arguments[i][j]] || 0;
      charCount[arguments[i][j]]++;
    }*/
  }

  result = '';

  for (var key in charCount) {
    if (key === ' ') {
      continue;
    }    

    if (charCount[key] >= n) {
      result += key;
    }
  }

  return result;
};
