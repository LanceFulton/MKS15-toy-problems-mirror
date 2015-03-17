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
  var results = [];

  //if there is only one letter in each string compare the letters
  if( (string1.length === 1) && (string2.length === 1) ){
    if(string1[0] === string2[0]){
      results.push(string1.slice(0, 1));
    }
  }

  for(var i = 0; i < string1.length; i++){
    if(string2.indexOf(string1[i]) > -1){
      results.push(string1[i]);
    }
  }
  
  return results;
};
