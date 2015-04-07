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
  var runs = {};
  var enter = 0;
  var exit = 0;
  var char = string[0] || '';
  var max = -Infinity;

  var newRun = function(){
      if (!runs[exit - enter + 1]) {
        runs[exit - enter + 1] = [enter, exit];
      }
      if (exit - enter + 1 > max) {
        max = exit - enter + 1;
      }
  }

  for (var i = 0; i<string.length; i++) {

    if (string[i] !== char) {
      char = string[i];
      exit = i - 1;
      newRun()
      enter = i;
    } else if (i === string.length - 1) {
      exit = i;
      newRun();
    }
  }
  return runs[max];
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
