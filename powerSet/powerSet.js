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

var powerSet = function(str) {
  var results = {};
  var current = [];
  var strArr = str.split('');

  //for each letter
    //add a letter, save the result
    //if there are letters after that
      //recurse on itself
  var recursiveBuild = function(strArr) {
    if (str.length === 1) {
      var result = current.concat(str).sort().join('');
      results[result] = true;
      return;
    }

    for (var i = 0, len = strArr.length; i < len; i++) {
      current.push(strArr[i]);
      var result = current.slice().sort().join('');
      results[result] = true;
      if (i !== len - 1) {
        recursiveBuild(strArr.slice(i + 1));
      }
      current.pop();
    }
  };
  recursiveBuild(strArr);
  return Object.keys(results);
}
