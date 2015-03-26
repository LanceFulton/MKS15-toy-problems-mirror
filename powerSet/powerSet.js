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

var powerSet = function(str){ // use recursive functionality
  var results = [""];

  var recursive = function (str) {
//     if (str.length <== 3) {
//       results.push(str[i]);
//     }

    for (var i = 0; i < str.length; i++) {
      results.push(str[i]);
      results.push(str[i].concat(recursive(str.slice(1))));
    }
  };

  recursive(str);
  return results;
};
