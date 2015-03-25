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


//2^3 power for 'abc'
//2^4 power for 'jump'
//2^n n = str.length;

var powerSet = function(str){
  var powerSet = [];
  var obj = {};

  var iterateString = function (???) {
    for (var i = 0; i < str.length; i++) {
      var newString = (obj[str[i] + str[i+1]).sort();
      if ( obj[newString] ) === undefined ) {
        powerSet.push(newString);
        obj[newString] = true;

      }

    };
  };

  iterateString(???);
  return powerSet;
}
