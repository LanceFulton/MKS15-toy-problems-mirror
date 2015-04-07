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

  // iterate through string
    // start run at current character
      // store start index
      // end run if next letter is different
      // store end index
      // calculate run length
      // compare length to record length
        // if new length is greater, set record length equal to new length

  // iterate through string

  var max = [0,0];
  var current = [0,0];

  for (var i = 0 ; i < string.length ; i++){

    if (string[i-1] === string[i]){
      current[1] = i;
      if (current[1] - current[0] > max[1] - max[0]){
        max = current;
      }
    } else {
      current = [i, i];
    }

  }
  return max;
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
