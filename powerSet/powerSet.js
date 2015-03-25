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
  var results = {};

  var recurse = function(chars, index){
    //add the next character to the previous character
    chars += str[index];
    //set the characters as the key in results object
    results[chars] = 1;

    //increment to the next character in the string
    index++;

    //if at the end of the string
    if(str[index] === undefined){
      //return
      return;
    //if there are more characters in the string
    } else {
      //recurse
      recurse(chars, index);
    }


  }

    //loop through each character in the string
  for(var i = 0; i < str.length; i++){
    //call recursive function on each character
    recurse('', i);
  }

  //return array of keys
  return Object.keys(results);
}
