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

function powerSet(chars) {
  var result = [];
  //getting edge case
  result.push('');
  
  var f = function(prefix, chars) {
      //for loop on string
    for (var i = 0; i < chars.length; i++) {
        //push character and prefix
      result.push(prefix + chars[i]);
      f(prefix + chars[i], chars.slice(i + 1));
    }
  };
  f('', chars);
  console.log(result.length);
  return result;
}

  // var results =[];
  //   results.push('');
  //   for(var i=0; i<str.length; i++){
  //       results.push(str[i]);
  //       for (var j = i+1; j<str.length; j++){
  //               results.push(str[i]+str[j]);     
  //       }
  //   }
  //   //edge cases
  //   results.push(str);
  //   console.log(results);