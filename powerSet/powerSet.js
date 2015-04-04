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


//includes empty strings
//not actually a permutations problem no repeated characters 

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

//___________________________________SOLUTION___________________________________________________________


var powerSet = function() {

var results = [];
var letters = {};

str = str || '';

for (var i = 0; i < str.length; i++) {
  letters[str[i]] = true;
}

str = Object.keys(letters).join(''); //putting it back into a string

var solutions = {};

var recurse = function(strSet) {
  for (var i = 0; i < strSet.length; i++) {
    var subSet = strSet.substr(0,1) + strSet.substr(i +1, strSet.length);
    if (!solutions[subSet]) {
      solutions[subSet] = true;
      recurse(subset);
    }
  }
};
recurse(str);
return Object.keys(solutions);
};

//function calls may be out of scope. 




