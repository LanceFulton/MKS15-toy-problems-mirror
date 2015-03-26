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
  var powerSetObj = {};
  var addToSet = function(powerSetObj, combo){
    if (powerSetObj[combo] !== true){
      powerSetObj[combo] = true;
    }
  }
  for (var i = 0; i<str.length-1; i++){
    var combo;
    for (var j = 0; j<str.length-1;j++){
      combo = str.substring(i, j);
      combo = combo.toLowerCase();
      combo = combo.split("");
      combo = combo.sort();
      combo = combo.join("");
      addToSet(powerSetObj, combo);
    }
  }
  return powerSetObj.keys();
};
  // var characters = str.slice().split('');
  // var powerSetObj = {'' : true};
