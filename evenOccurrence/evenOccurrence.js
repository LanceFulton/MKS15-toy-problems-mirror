/*
 * Find the first item that occurs an even number of times in an array.
 * Remember to handle multiple even-occurrence items and return the first one. 
 * Return null if there are no even-occurrence items.
*/

/*
 * example usage:
 * var onlyEven = evenOccurrence([1, 7, 2, 4, 5, 6, 8, 9, 6, 4]);
 * console.log(onlyEven); //  4
*/

var evenOccurrence = function(arr) {
  var storage = {};
  var evens = [];
  // store the number of occurences of each number
  for (var i = 0 ; i < arr.length ; i++){
    if (storage[arr[i]] === undefined){
      storage[arr[i]] = {};
      storage[arr[i]].value = arr[i];
      storage[arr[i]].quantity = 1;
    } else {
      storage[arr[i]].quantity++;
    }
  }
  // record which numbers have an even quantity
  for (var key in storage){
    if (storage[key].quantity % 2 === 0){
      evens.push(storage[key].value)
    }
  }
  // loop through even array and return the first number with even quantity
  for (var i = 0 ; i < evens.length ; i++){
    for (var key in storage){
      if (evens[i] === storage[key].value){
        return evens[i];
      }
    }
  }
};
