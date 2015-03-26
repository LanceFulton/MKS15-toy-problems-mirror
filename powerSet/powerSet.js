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
  var arr = str.split('').sort();
  var results = {'': true};
  var pSet = [];

  var recurse = function(chars, index) {
    for( var i = index; i < arr.length; i++ ) {
      var subset = chars + arr[i];

      results[subset] = true;

      // if(subset.length <= arr.length) {
      //   results[subset] = true;
      //   if( i + 1 < arr.length ) {
      //     recurse(subset, index + 1);
      //   }
      // }
    }
  };

  recurse('', 0);

  for(var key in results) {
    pSet.push(key);
  }

  return pSet.sort();
};


// solution
/*var powerSet = function(str) {
  str = str || '';
  var letters = {};
  var solutions = {};

  for( var i = 0; i < str.length; i++ ) {
    letters[str[i]] = true;
  }

  str = Object.keys(letters).sort().join('');

  var recurse = function(strSet) {
    for( var i = 0; i < strSet.length; i++ ) {
      var subSet = strSet.substr(0, i) + strSet.substr(i + 1, strSet.length);
      // check if we have visited this combo
      if( !solutions[subSet] ) {
        solutions[subSet] = true;
        recurse(subSet);
      }
    }
  };

  recurse(str);
  var arr = Object.keys(solutions);
  return arr.sort();
};*/

