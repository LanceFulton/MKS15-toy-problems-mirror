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

  var i, 
      count = 1,
      countArr = [],
      run = [],
      results = [],
      search = string.split(''),
      largest;

  var runData = {count: null, run: run};

  for (i = 0; i < search.length; i++) {
    run.push(search[i]);
    if (search[i] === search[i + 1]) {
      run.push(search[i + 1]);
      count++;
    } else {
      runData.count = count;
      runData.run = run;
      run = [];
      results.push(runData);
    }
  }
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
