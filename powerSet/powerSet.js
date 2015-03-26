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

  results = [];
  
  strArray = str.split('');

  for (var i = 0; i < strArray.length; i++) {
    //need base case.
    var permutation = strArray[i] + strArray[i+1]; //pretty sure this doesn't work

    if (permutation) {
      results.push(permutation);

    powerSet(str);
    }
  }
  powerSet(str);
  return results;
};

//to prevent sets of the same characters .sort() them before you compare them to what is already in the array.
// a helper function might be a good idea.
