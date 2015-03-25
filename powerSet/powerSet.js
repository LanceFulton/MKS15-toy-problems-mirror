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
	var result = [];

  var subroutine = function(subStr){

    result.push(subStr);

    for(var i = 0; i < subStr.length; i++){ 
      subroutine(subStr.substring(1));
    }
  }

  subroutine(str);
  return result;
}


console.log(powerSet('abc'));


//  abc

//  a, ab, abc, ac
//  b, bc,
//  c

//  jump

//  j, ju, jum, jump, jup, jm, jmp, jp
//  u, um, ump, 
//  m, mp
//  p

//like a binary tree?