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

var longestRun = function(string) {
  var results = [];
  var begin = 0;
  var end = 0;
  var currentStreak = 0;
  var currentBegin = 0;
  var longestStreak = 0;

  for (var i = 0; i < string.length - 1; i++) {
    if (string[i] === string[i+1]) {
      currentStreak++;
      if (currentStreak > longestStreak) {
        end = i + 1;
        begin = currentBegin;
        longestStreak = currentStreak;
      }
    }
    else {
      currentStreak = 0;
      currentBegin = i + 1;
    }
  }
  return results = [begin, end];
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
