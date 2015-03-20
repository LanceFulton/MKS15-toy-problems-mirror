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
  // TODO: Your code here!
  string1 = string1.replace(/ /g, ''); // removes spaces
  var obj = {};
  var results = '';

  for (var i = 0;  i < string2.length; i++) {
    if (!obj[string2[i]]) {
      obj[string2[i]] = true;
    }
  }
  
  for (var j = 0; j < string1.length; j++) {
    if (obj[string1[j]]) {
      results += string1[j];
      delete obj[string1[j]]; // prevents dups
    }
  }

  return results;
};
