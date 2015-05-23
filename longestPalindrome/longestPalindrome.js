/**
* Implement a function that finds the longest palindrome in a given string.
* For example, in the string "My dad is a racecar athlete", the longest
* palindrome is "a racecar a". Count whitespaces as valid characters. Other
* palindromes in the above string include "dad", "ete", " dad " (including
* whitespace on each side of dad).
*/

var longestPalindrome = function (string) {

  var longest = '';

  for (var i = 1 ; i < string.length ; i++){
    var drome = {};
    if (string[i-1] === string[i+1]){
      drome.string = string;
      drome.start = i-1;
      drome.end = i+1;
      drome.length = drome.end - drome.start;
      drome = findLength(drome);

    } else if (string[i] === string[i+1]){
      drome.string = string;
      drome.start = i;
      drome.end = i+1;
      drome.length = drome.end - drome.start;
      drome = findLength(drome);
    }
    if (drome.length > longest.length){
      longest = drome;
    }
  }

  var findLength = function(input){
    if (input.string[input.start-1] === input.string[input.end+1]){
      input.start = input[start-1];
      input.end = input[end+1];
      input.length = input.end - input.start;
      findLength(input);
    }
    return input;
  };

  return longest;

};



var longestPalindrome = function (str) {
  for (var i = 0 ; i < str.)

};


