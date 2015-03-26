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
  //I want to split the string initially into an array
  //I also want to create a new array to store our results in
  //The results array should start with an empty string in the zero index
  //I finally want to return the array
  var results = [''];
  var letters = str.split('');
  
  for (var i = 0; i < letters.length; i++){  //----------This will iterate through each letter once until we reach our result.
    results.push(letters[i]);
    var removeCurrent = letters.splice(1, letters.length);
    for (var j = 0; j < removeCurrent.length; j++){
      results.push(letters[i]+removeCurrent[j]);
    }
  }
  return results;
}
