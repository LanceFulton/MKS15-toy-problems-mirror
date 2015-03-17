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
  var letterHolders = []; //hold all letters arrays
  var letters; //holder object for letters of object
  var string; //string being looked at
  var i; //counter for string in arguments
  var j; //counter for letters in string
  
  // iterate over each item of arguments and put letters into an object
  for (i = 0; i < arguments.length; i++) {
    letters = {};
    string = arguments[i].toLowerCase();
    for (j = 0; j < string.length; j++) {
      letters[string[j]] = true;
    }
    letterHolders.push(letters);
  }
  // iterate over letters of first string and add them to new object if they are there in both
  var found; //boolean to check if letter in all strings
  var letter; //
  var result = [];
  
  for (j = 0; j < arguments[0].length; j++) {
    found = true;
    letter = arguments[0][j];
    for (i = 1; i < letterHolders.length; i++) {
      found = found && letterHolders[i][letter];
    }
    if (found) {
      result.push(letter);
      letterHolders[1][j] = false; //avoid repeats of letter
    }
  }
  return result.join('');
};
