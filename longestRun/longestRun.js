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
  // TOD: Your code here!
  var lastChar = -1; // Initialize to impossible to match
  var currentRun = [0, -1]; // [start, end]
  var maxRun = currentRun;
  for (var i=0; i<string.length; i++) {
    if (string[i] === lastChar) {
      currentRun[1]++;
    } else {
      currentRun = [i, i]
    }
    if (currentRun[1]-currentRun[0] > maxRun[1]-maxRun[0]) {
        maxRun = currentRun;
    }
    lastChar = string[i];
  }
  return maxRun;
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


// for (var i=0; i<10; i++) {
//   var testString = randomString(10000);
//   console.log(testString);
//   console.log(longestRun(testString));
// }

// console.log(longestRun("abbbcc")); // [1, 3]
// console.log(longestRun("aabbc"));  // [0, 1]
// console.log(longestRun("abcd"));   // [0, 0]
