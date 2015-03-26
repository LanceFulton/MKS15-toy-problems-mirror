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
  var sortedStr = Array.slice(str.split('')).sort().join('');
  var strLen = sortedStr.length;
  var results = {};
  for (var i=0; i<Math.pow(2,strLen); i++) {
    var subset = [];
    for (var j=0; j<strLen; j++) {
      if ((1 << j) & i) {
        subset.push(sortedStr[j]);
      }
    }
    results[subset.join('')] = true;
  }
  return Object.keys(results);
};
