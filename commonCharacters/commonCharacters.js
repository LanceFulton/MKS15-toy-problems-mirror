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

// finished implementation with extra credit
var commonCharacters = function(string1, string2) {
  // TODO: Your code here!
  var map={};
  for (var i=0; i<arguments.length; i++){
    // get rid of white space and then arraylize
    var str_arr=arguments[i].split(' ').join('').split('');
    if (i === 0) { // first time
      for (var j=0; j<arguments[0].length; j++) {
        if (!map[str_arr[j]]) { // initialize the map
        map[str_arr[j]]=true;
        }
      }
    }
    else { // if not fist time
      for (var key in map){
        if (str_arr.indexOf(key) === -1) { // if not unique
          // remove it from map
          delete map[key];
        }
      }
    }  
  }
  var common_arr=[];
  for (var key in map){
    common_arr.push(key);
  }
  return common_arr.sort().join('');
};

/*
console.log(commonCharacters('abc', 'aef', 'aasa'));
console.log(commonCharacters('acexivou', 'aegihobu'));
console.log(commonCharacters('a cexivou', 'a egihobu'));
*/