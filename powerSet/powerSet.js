/*
 * Return an array with the power set of a given string.
 * Definition of power set: The set of all possible subsets including the empty set.
 *
 * Example:
 *
 * powerSet("abc")
 * -> [ '' , 'a', 'b', 'c', 'ab', 'ac', 'bc', 'abc' ]
 *
 * Note: 
 *  1. All characters in a subset should be sorted.
 *  2. Sets of the same characters are considered duplicates regardless of order and count only once, e.g. 'ab' and 'ba' are the same. 
 * 
 * Example 2 :
 * 
 * powerSet("jump")
 * -> ["", "j", "ju", "jm", "jp", "jmu", "jmp", "jpu", "jmpu", "u", "m", "p", "mu", "mp", "pu", "mpu"]
 */

var powerSet = function(str){
  var result = [''];
  strSet = {};
  for (var i = 0; i<str.length; i++) {
    strSet[str[i]] = true;
  }
  
  var recursivePower = function(arr) {
    if (arr.length === 0) {
      return;
    }

    var next = arr[0];
    var l = result.length
    for (var i = 0; i< l; i++) {
      result = result.concat([result[i] + next] );
    }

    recursivePower(arr.slice(1));
  }

  recursivePower(Object.keys(strSet).sort());
  return result;

}
