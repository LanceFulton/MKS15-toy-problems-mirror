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
  var output = "";

  for(var i=0; i<string1.length; i++) {
    var ch = string1[i];
    if(string2.indexOf(ch)>=0) { 
      output += ch;
    }
  }

  return output;
};

console.log( commonCharacters('acexivou', 'aegihobu') );
