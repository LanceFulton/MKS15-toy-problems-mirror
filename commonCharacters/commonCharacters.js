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


var commonCharacters = function(string1, string2) {
  var hash = {};
  var results = [];
  for (var i=1; i<arguments.length; i++) {
    for (var j=0; j<arguments[i].length; j++) {
      if (!hash[arguments[i][j]]) {
        if (i===1) {
          hash[arguments[i][j]] = [1];
        }
      }
      else if (hash[arguments[i][j]][0]===i-1) {
        hash[arguments[i][j]][0]=i;
      }
    }
  }
  for (var i=0; i<string1.length; i++) {
    if (string1[i] !== ' ' && Array.isArray(hash[string1[i]]) && hash[string1[i]][0] === arguments.length-1) {
      results.push(string1[i]);
      hash[string1[i][0]] = undefined;
    }
  }
  return results.join('');
};
