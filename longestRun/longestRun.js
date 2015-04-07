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
  var map={};
  var strArr=string.split('');
  var startIndex=0, endIndex=0, currentChar=strArr[0];
  for (var i=1; i<strArr.length; i++) {
    if (strArr[i] === strArr[i-1]) {
      endIndex++;
    }
    else {
      
      if (map[endIndex-startIndex+1] === undefined) {
     
        map[endIndex-startIndex+1]=[startIndex, endIndex];
      }
      startIndex=i;
      endIndex=startIndex;
    }
  }
  if (map[endIndex-startIndex+1] === undefined) {
    map[endIndex-startIndex+1]=[startIndex,endIndex];
  }
  
  var maxKey=0;
  for (var key in map) {
    if (key>maxKey) {
      maxKey=key;
    }
  }
  return map[maxKey];
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

console.log(longestRun("abbbcc"));
console.log(longestRun("aabbc"));
console.log(longestRun("abcd"));