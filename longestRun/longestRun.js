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
  var characters = string.split("");
  var characterCounter = 1;
  var tempCounter = 1;
  var startIndex = 0;
  var bestStartIndex = 0;
  var bestEndIndex = 0;
  //at start of each new character, i = startIndex
  for (var i = 1; i<characters.length; i++){
    if (characters[i] === characters[startIndex]){
      tempCounter++;
    } else if (tempCounter > characterCounter) {
      characterCounter = tempCounter;
      bestStartIndex = startIndex;
      bestEndIndex = i-1;
      tempCounter = 1;
      startIndex = i;
    } else {
      tempCounter = 1;
      startIndex = i;
    }
  }

  var indices = [];
  indices.push(bestStartIndex, bestEndIndex);

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
