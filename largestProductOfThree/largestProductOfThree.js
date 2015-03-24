/* Write a function that finds the largest possible product of any three numbers
 * from an array.
 * 
 * Example:
 * largestProductOfThree([2, 1, 3, 7]) === 42
 *
 * Extra credit: Make your function handle negative numbers.
 */


var largestProductOfThree = function(array) {

  array = array.sort(function(a,b) {
    return b - a;
  });
  
  return array[0] * array[1] * array[2];

};


var largestProduct = function(array) {
  array = array.slice().sort(function (a,b) { // .slice() creates copy and preserves order of original array
    return a - b;
  });
  
  var n = array.length;
  var lastProduct = array[n-1] * array[n-2] * array[n-3];
  var firstProduct = array[n-1] * array[0] * array[1];

  return Math.max(firstProduct, lastProduct);
};

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice
// .sort() without .slice() changes the original array: http://stackoverflow.com/questions/24074968/does-sort-function-change-original-array
/* Supplementary: arrays are passed by reference

var arr = [1,2,3,4,5];

var swap = function(array) {
//    var array = array.slice(); // makes new Array
    var store = array[0];
    var store2 = array[array.length -1];
    array[0] = store2;
    array[array.length - 1] = store;
    console.log('array here: ', array);
    console.log('original array: ', arr);
    return array;
}

var arr2 = swap(arr);

if(arr === arr2) {
    console.log("Arrays are passed by reference")
} else {
    console.log("Look, a new array copy!")
}

*/
