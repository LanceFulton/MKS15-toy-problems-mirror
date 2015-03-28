var binarySearch = function (array, target) {

  var indextracker = array.length;
  var found = false;

  var recursive = function (array, target) {

    var midpoint = Math.floor(array.length/2);

    if (target === array[midpoint]) {  // if target is found
      indextracker -= Math.floor(array.length/2+1); // ceiling or floor
      found = true;
    }

    else if (array.length === 1) {  // if array length is 1
      return;
    }

    else if (array[midpoint] < target) { // if target is higher than midpoint
      var newArray = array.slice(midpoint, array.length+1)
      indextracker += -Math.ceil(array.length/2);
      recursive(newArray, target);
    }

    else if (target < array[midpoint]) { // if target is lower than midpoint
      var newArray = array.slice(0, midpoint);
     // console.log('newARRAY: ', newArray);
      indextracker -= Math.ceil(array.length/2-1);
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

var index = binarySearch([1,2,3,4,5,6,7,8,9,10], 2);
console.log(index); // 1

var index = binarySearch([1,2,3,4,5,6,7,8,9,10], 9);
console.log(index); // 8

