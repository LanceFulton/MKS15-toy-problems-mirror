/*jshint expr:true*/

/*
 * Bubble sort is the most basic sorting algorithm in all of Computer
 * Sciencedom. It works by starting at the first element of an array and
 * comparing it to the second element; if the first element is greater than the
 * second element, it swaps the two. It then compares the second to the third,
 * and the third to the fourth, and so on; in this way, the largest values
 * "bubble" to the end of the array. Once it gets to the end of the array, it
 * starts over and repeats the process until the array is sorted numerically.
 *
 * Implement a function that takes an array and sorts it using this technique.
 * Don't use JavaScript's built-in sorting function (Array.prototype.sort).
 *
 * QUERY: What's the time complexity of your algorithm? If you don't already
 * know, try to intuit this without consulting the Googles.
 *
 * Extra credit: Optimization time! During any given pass, if no elements are
 * swapped we can assume the list is sorted and can exit the function early.
 * After this optimization, what is the time complexity of your algorithm?
 *
 * Moar credits: Do you need to consider every element every time you iterate
 * through the array? Make it happen, boss. Again: Has the time complexity of
 * your algorithm changed?
*/

/*
 * Example usage:
 * bubbleSort([2, 1, 3]); // yields [1, 2, 3]
 *
*/

// Introduce i into the global scope so we can test function efficiency
var i;

// Feel free to add helper functions if needed.


var bubbleSort = function(array) {

  var compare = function(index) {
    var sorted = false;
    var value;
    i = index;
    for( var j = index; j < array.length - 1; j++ ) {
      if(array[j] > array[j + 1]) {
        value = array[j];
        array[j] = array[j + 1];
        array[j + 1] = value;
        sorted = true;
      }
    }

    if( !sorted ) {
      return;
    } else if( index < array.length ) {
      compare(index + 1);
    }
  };

  //  for i in array
  // compare array[index] to array[index+1]
  // if greater
    // set value to array[index]
    // set array[index] to array[index+1]
    // set array[index+1] to value

  compare(0);
  return array;
  // save array[0] to value
  // for every j in array, 
  // compare value to array[j]
  // if value is greater than array[j], 
    // set array[i] to array[j]
    // set array[j] to value
    // set i to j
};
