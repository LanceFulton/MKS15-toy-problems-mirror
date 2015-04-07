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
  var storage = {};
  var results = [];
  var count = 0;
  var start;
  var end;
  var largest = 0;
  //how does one compare values within a string or array. 

  for (var i = 0; i < string.length; i++) {
    if (string[i] === string[i+1]) {
      count++;
      start = i;
      if (count > largest) {
        largest = count;
      }
    } else {
      end = i;
      count = 0;
    }
  }
  return [start, end];
};

// If you need a random string generator, use this!
// (you wont need this function for your solution but it may help with testing)
var randomString = function (len) {
  var text = "";
  var possible = "abcdefghijklmnopqrstuvwxyz";

  for(var i = 1; i < len; i++) {
    text += possible.charAt(Math.floor(Math.random() * possible.length));
  }

  return text;
};

//____________________________SOLUTION___________________________________________

var longestRun = function(string) {

  var max = [0,0];
  var current = [0,0];

  for (var i = 0 ; i < string.length; i++) {
    if (string[i-1] === string[i]) {
      current[1] = i;
      if (current[1] - current[0] > max[1] - max[0]) {
        max = current;
      }
    } else {
      current = [i,i];
    }
  }
  return max;
};







