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

  //take the first character
  //store index
  //check next item in array
  //if next character is the same, increment lengthCounter and repeat
  //if next char is different
  //check if lengthCounter is longer than longest count
    //if it is store new longest count and store starting and ending indexes
  //repeat with next character
  var startIndex = 0;
  var longestCount = 0, currentCount = 0;
  var results = [0, 0];

  var checkChar = function(char, currentIndex){
    if(currentIndex === string.length){
      return;
    }

    if(char === string[currentIndex]){
      currentCount++;
    } else {
      if (currentCount > longestCount){
        longestCount = currentCount;
        results[0] = startIndex;
        results[1] = currentIndex - 1;
      }
      startIndex = currentIndex;
      char = string[currentIndex];
      currentCount = 1;
    }

    checkChar(char, currentIndex + 1);
  }

  checkChar(string[startIndex], 0);
  return results;
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
