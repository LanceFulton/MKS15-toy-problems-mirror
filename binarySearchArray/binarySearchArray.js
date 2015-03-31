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
  //I need to find a way to go to the lowest point on the tree
  currentIndex = 0;

  var nextNode = function(node) {
    
    if (node === target) { return '[' + currentIndex + ']'; };//returns the current node!
    while (var i = 0; i < node.children.length){
      if (target === node.children[i]) { //Will move down further on the tree on the left if it is lower than the current node.
        currentIndex++;
        return '[' + currentIndex + ']';
      } else if (target > node.children[i]) {
        currentIndex++;
        nextNode(node.children[i]);
      }
    } 
  }
};

