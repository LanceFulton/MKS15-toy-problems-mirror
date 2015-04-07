/**
 * Write a function that, given a string, Finds the longest run of characters
 * and returns an array containing the start and end indices of that run. If
 * there are two runs of equal length, return the first one. For example:
 *
 *   longestRun("abbbcc") // [1, 3]
 *   longestRun("aabbc")  // [0, 1]
 *   longestRun("abcd")   // [0, 0]
 *
 * Try your function with long, random strings to make sure it handles large
 * inputs well.
 */

var longestRun = function (string) {
  var longest = [0, 0];
  var currStart = 0;

  for (var i = 1, len = string.length; i < len; i++) {
    //check if switching to new char or if at last position
    if (string[i] !== string[i - 1]) {
      currStart = i;
    }
    //check to see if longest
    if (i - currStart > longest[1] - longest[0]) {
      longest[0] = currStart;
      longest[1] = i;
    }
  }

  return longest;
};

// If you need a random string generator, use this!
// (you wont need this function for your solution but it may help with testing)
var randomString = function (len) {
  var text = "";
  var possible = "abcdefghijklmnopqrstuvwxyz";

  for(var i = 0; i < len; i++) {
    text += possible.charAt(Math.floor(Math.random() * possible.length));
  }

  return text;
};
