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
   
   var recurse = function(array,target, start, end){
       console.log(start, end);
    var delta = Math.round((end-start)/2); //rounds it up
    var idx = start+delta;
  console.log(array[idx]);
    if (array[idx]<target) {
        return recurse(array,target, idx+1, end);
        
    } else if(array[idx]>target){
        return (recurse(array,target, start, idx-1));
    } else {
        return idx;
    }
   };
   return recurse(array, target, 0, array.length-1);

};