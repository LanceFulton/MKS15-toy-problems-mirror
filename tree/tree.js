/* Implement a tree using prototypal instantiation.
Your tree should have methods named "addChild" and "contains".
*/

// EXAMPLE USAGE:
// var tree = treeMaker();
// tree.addChild(1);
// tree.addChild(2);
// tree.contains(2);   // yields 'true'

var treeMaker = function(value){
  var tree = Object.create(methods);
  tree.value = value;
  tree.children = [];
  return tree;
};

treeMaker.methods = {};

treeMaker.methods.addChild = function(value){
  var newTree = this.treeMaker(value);
  this.tree.children.push(newTree);

};

treeMaker.methods.contains = function(value){
  if (tree.value === value) {
    return true;
  } else if (tree.children.length > 0) {
    for (var i = 0; i < tree.children.length; i++) {
      if (tree.children[i].value === value) {
        return true;
      }
    }
  }
  return false;
};
