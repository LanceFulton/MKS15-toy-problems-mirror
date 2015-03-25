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
  console.log("---> " + str);
  var pSet = [];
  var word = "";

  // Store all combinations of "str" in pSetObj (excluding flipped-order duplicates)
  // "", Letter1, Letter2, Letter3, (skip Letter1Letter1), Letter1Letter2, Letter1Letter3

  var collector = function(out, pos) {
    if(pos>str.length - 1) return pSet;
    word = "";
    for (var i = pos; i<str.length; i++) {
      word += str[i];
      pSet.push(word);
      for (var k = i; k<str.length; k++) {
        collector(pSet, k);
      }
    }

    return pSet
  }

  return collector(pSet, 0, 1);

}

console.log( powerSet("abc") );
// powerSet("jump");