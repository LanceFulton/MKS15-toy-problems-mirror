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


// 1) Get all unique letters
// str = 'mississippi'

var powerSet = function(str) {

  str = str || ''; // edge case

  var letter = {}; // tracks all unique values

  for (var i = 0; i < str.length; i++) {
    letters[str[i]] = true;
  }

  str = Object.keys(letters).join('');

// 2) Recursively find all solutions
// Loop through the children and splice out one letter

  var solutions = {};

  var recurse = function(strSet) {
    for (var i = 0; i < strSet.length; i++) {
      var subSet = strSet.substr(0, i) + strSet.substr(i + 1, str.length);
      // check if we have visted this combo...
      if (!solutions[subSet]) {
        solutions[subSet] = true;
        recurse(subSet);
      }
    }
  }

  recurse(str);

};
