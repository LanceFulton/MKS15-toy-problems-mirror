/* Implement a tree using prototypal instantiation.
Your tree should have methods named "addChild" and "contains".
*/

// EXAMPLE USAGE:
// var tree = treeMaker();
// tree.addChild(1);
// tree.addChild(2);
// tree.contains(2);   // yields 'true'

var treeMaker = function() {
  var newTree = Object.create(treeMaker.methods);
  newTree.children = {};
  return newTree;
};

treeMaker.methods = {};

treeMaker.methods.addChild = function(value) {
  this.children[value] = true;
};

treeMaker.methods.contains = function(value) {
  for (var key in this.children) {
    if (value.toString() === key) {
      return true;
    }
  }
  return false;
};
