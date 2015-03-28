/*
 * Given a sorted array, find the index of an element
 * using a binary search algorithm.
 *
 * Example usage:
 *
 * var index = binarySearch([1, 2, 3, 4, 5], 4);
 * console.log(index); // [3]
 */


var binarySearch = function (array, target) {

  var indextracker = 0;
  var found = false;

  var recursive = function (array, target) {

    var midpoint = Math.floor(array.length/2);

    if (target === array[midpoint]) {  // if target is found
      indextracker += Math.floor(array.length/2);
      found = true;
    }

    else if (array.length === 1) {  // if array length is 1
      return;
    }

    else if (array[midpoint] < target) { // if target is higher than midpoint


    // recursive (newArray, target)
    }

    else if (target < array[midpoint]) { // if target is lower than midpoint
      var newArray = array.slice(midpoint);
      indextracker += Math.floor(array.length/2);
      recursive(newArray, target);
    }

  };

  recursive (array, target);

  return found ? indextracker : null;

};


var index = binarySearch([1, 2, 3, 4, 5], 3);
console.log(index); // 2


var index = binarySearch([1, 2, 3], 2);
console.log(index); // 1

var index = binarySearch([1], 1);
console.log(index); // 0

var index = binarySearch([0], 1);
console.log(index); // null

var index = binarySearch([1, 3], 2);
console.log(index); // null

var index = binarySearch([1, 3], 1);
console.log(index); // 0
