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
    ANSWER: the time complexity of bubble sort is O(n^2) worst case, which means
    each iteration it examine with O(n), and there's total of n iterations, 
    so O(n*n) worst case.
    avg case: O(n^2)
    best case: O(n) because still need to iterate through loop once
 *
 * Extra credit: Optimization time! During any given pass, if no elements are
 * swapped we can assume the list is sorted and can exit the function early.
 * After this optimization, what is the time complexity of your algorithm?
    ANSWER: it's still O(n^2) worst case. 
    avg case: this can be cut into half the time on avg, but O(1/2n^2) is still O(n^2)
    best case: O(n)
 *
 * Moar credits: Do you need to consider every element every time you iterate
 * through the array? Make it happen, boss. Again: Has the time complexity of
 * your algorithm changed?
   ANSWER: Nop, still O(n^2) worst case: n times to iterate, and each iteration checks i of element. 
   so O(n*i) =O(n*1/2n)
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
  // assign the index of sorted array the index of last element
  var sortedIndex=array.length-1;
  // as long as the index of sorted array is >0, we continue looping through array.
  var swapped=false;
  while (sortedIndex>0){
  // as we iterate through the array once, swap the larger element to sink downward.
    swapped=false; // reset the indicator indicating swapping took place
    for ( var i=0; i<sortedIndex; i++){
      var temp;
      // if the current element is greater than next, perform swapping to sink the larger element down
      if (array[i]>array[i+1]){
        temp=array[i];
        array[i]=array[i+1];
        array[i+1]=temp;
        swapped=true;
      }
      // else, do nothing
    }
  // as we finished each iteration, decrement index of sorted array by 1,
    sortedIndex--;
    // if finished iterating the current array and find no swapping taken place, 
    // then sorting is finished, exiting while loop
    if (!swapped){
      break;
    }
  // else, if swapping took place
  // and repeat the sorting process
  }
  return array;
};


/*
console.log(bubbleSort([2,1,3]));
console.log(bubbleSort([4,3,2,1]));
console.log(bubbleSort([5,3,3, 7, 1, 9]));
*/