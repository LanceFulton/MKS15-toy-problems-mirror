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
  // Your code here.
  var swapCount = 0;  //Counter that will increment whenever a value is swapped
  var i = array.length;  //variable that will decrement each iteration

  //recurisve function that accepts two values as arguments
  var sortOnce = function(index){
  //base case when the next value is outside the bounds of the array
    if (index === i){
      return;
    }
  //Set the two numbers to be compared based on the index argument
    var num1 = array[index];
    var num2 = array[index + 1];

  //compare those two values and swap them if the first is larger than the second
    if (num2 < num1){
      array[index] = num2;
      array[index + 1] = num1;
      swapCount++;
    } 

  //recurse with the next index
    sortOnce(index + 1);
  }

  //Iterate through array until it's iterated array.length times
  while(i > 0){
    swapCount = 0;  //reset the number of swaps on each iteration
    sortOnce(0);
    i--;  //Each time through, we don't need to consider the last element, it will already be the largest
    if (swapCount === 0){  //if there were no swaps during an iteration, the list is sorted
      break;
    }
  }
  return array;
};














