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
  var args = arguments;
  var argIndex = 2;

  var compare = function(str1, str2) {
    var common = '';

    for( var i = 0; i < str1.length; i++ ) {
      for( var j = 0; j < str2.length; j++ ) {
        if( str1[i] !== ' ' && common.indexOf(str1[i]) === -1 && str1[i] === str2[j] ) {
          common+= str1[i];
          continue;
        }
      }
    }

    if( argIndex < args.length ) {
      argIndex++;
      return compare(common, args[argIndex - 1]);
    } else {
      return common;
    }
  };

  return compare(args[0], args[1]);
};