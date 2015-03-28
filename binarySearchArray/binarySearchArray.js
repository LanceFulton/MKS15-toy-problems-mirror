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
      var newArray = array.slice(midpoint, array.length + 1);
      indextracker += Math.floor(array.length/2);
     // console.log("ARRAY LENGTH: ", indextracker);
      recursive(newArray, target);
    }

    else if (target < array[midpoint]) { // if target is lower than midpoint
      var newArray = array.slice(0, midpoint);
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

var index = binarySearch([1,2,3,4,5,6,7,8,9,10], 1);
console.log(index); // 0

var index = binarySearch([1,2,3,4,5,6,7,8,9,10], 2);
console.log(index); // 1

var index = binarySearch([1,2,3,4,5,6,7,8,9,10], 3);
console.log(index); // 2

var index = binarySearch([1,2,3,4,5,6,7,8,9,10], 4);
console.log(index); // 3

var index = binarySearch([1,2,3,4,5,6,7,8,9,10], 5);
console.log(index); // 4

var index = binarySearch([1,2,3,4,5,6,7,8,9,10], 6);
console.log(index); // 5

var index = binarySearch([1,2,3,4,5,6,7,8,9,10], 7);
console.log(index); // 6

var index = binarySearch([1,2,3,4,5,6,7,8,9,10], 8);
console.log(index); // 7

var index = binarySearch([1,2,3,4,5,6,7,8,9,10], 9);
console.log(index); // 8

var index = binarySearch([1,2,3,4,5,6,7,8,9,10], 10);
console.log(index); // 9
