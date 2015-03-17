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

  //if there is a commonCharacter it will be saved to a an object with a prop 
  //common characters and an array of common characters. Ultimately this array will be 
  //joined together to create one string.

var commonCharacters = function(string1, string2) {
  var collection = {};
  var getComChars = function (endloop, index) {
    if (endloop === string1.length) {
      return;
    };
    for (var i = 0; i < string1.length; i++) {
      if( string1[i] === string2[index] && collection[string1[i]] === undefined ) {
        collection[string1[i]] = true;
      }
    };
    getComChars(endloop+1, index+1);
  }
  getComChars(0,0);
  return Object.keys(collection).join();
};
