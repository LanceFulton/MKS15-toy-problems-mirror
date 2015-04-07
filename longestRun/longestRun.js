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
 // SubStr(i,len)   - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/substr
 // Substring(i, k) - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/substring

var longestRun = function (string) {
  var retArr = [];

  var checkRun = function(startCh, i) {
    var runLength = 0;
    for (var k = 0; k < string.length && startCh===string.charAt(i); k++) {
        runLength++;
    }

    return runLength;
  }


  // Big O Log.
  for (var i = 0; i < string.length; i++) {
    var lastMatch = "";
    var currCh = string.charAt(i);
    var currLen = '';
    if( currCh!==lastMatch ) {
      currLen = checkRun(currCh, i);
    }

  };

  return retArr; 
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


var longString = randomString(20)
console.log( longString );
var longRun = longestRun( longString );
console.log( longRun );
