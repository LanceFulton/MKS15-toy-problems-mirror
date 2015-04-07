// Example:
// arr: [x,y,z], str: xyyzyzyx
// result: zyx
"use strict";

var smallestSubstring = function(charArray, str) {
  var currentIndices = [0, -1]; // [start, end]
  var currentChars = {};
  var charObj = {};

  var isSubset = function(currentChars) {
    for (var i=0; i<charArray.length; i++) {
      if (!currentChars[charArray[i]]) {
        return false;
      }
    }
    return true;
  };
  var minIndicies = [-1, Number.POSITIVE_INFINITY];
  var candidateMax = function(start, end) {
    if (end-start < minIndicies[1]-minIndicies[0])
      minIndicies=[start, end];
  };
  while (currentIndices[1] < str.length-1 || isSubset(currentChars)) {
    while (currentIndices[1] < str.length-1 && !isSubset(currentChars)) {
      currentIndices[1]++;
      currentChars[str[currentIndices[1]]] = (currentChars[str[currentIndices[1]]] || 0) + 1;
    }
    while (currentIndices[0] <= currentIndices[1] && isSubset(currentChars)) {
      currentChars[str[currentIndices[0]]]--;
      currentIndices[0]++;
    }
    candidateMax(currentIndices[0]-1, currentIndices[1]);
  }
  if (minIndicies[0] === -1)
    return null;
  else return str.substring(minIndicies[0], minIndicies[1]+1);
}

// console.log(smallestSubstring(['x','y','z'], 'xyyzyzyx'));
// console.log(smallestSubstring(['a'], 'a'));
// console.log(smallestSubstring(['a', 'b', 'c', 'd'], 'daac'));
// console.log(smallestSubstring(['a', 'b', 'c', 'd'], 'dddcbaaa'));

