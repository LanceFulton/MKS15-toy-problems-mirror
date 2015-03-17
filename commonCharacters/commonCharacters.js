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

// Increment the count for each character found in string
var addCharactersToCountFromString = function(count, string) {
  var subCount = {}
  for (var i = 0; i<string.length; i++) {
    subCount[string[i]] = true;
  }
  for (var key in subCount){
    if (subCount[key]){
      count[key] = count[key] || 0;
      count[key]++;  
    }
  }
};

// Create a string of all chars that appear in 
// count at least n times
var stringOfCommonCharsFromCount = function(count, n) {
  string = '';
  for (var key in count) {
    if (key === ' ') {
      continue;
    }    
    if (count[key] >= n) {
      string += key;
    }
  }
  return string;
}

var commonCharacters = function(string1, string2) {

  charCount = {};
  n = arguments.length

  // Add characters in each string to charCount
  for (var i = 0; i<n; i++) {
    addCharactersToCountFromString(charCount, arguments[i]);
  }

  return stringOfCommonCharsFromCount(charCount, n);
};
