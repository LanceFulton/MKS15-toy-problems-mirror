/* Implement a tree using prototypal instantiation.
Your tree should have methods named "addChild" and "contains".
*/

// EXAMPLE USAGE:
// var tree = treeMaker();
// tree.addChild(1);
// tree.addChild(2);
// tree.contains(2);   // yields 'true'

var treeMaker = function(value){
  var tree = Object.create(treeMaker.methods);

  tree.value = value;
  tree.left = null;
  tree.right = null;
  
  return tree;
};


treeMaker.methods = {};

treeMaker.methods.addChild = function(value){
  var newNode = {
    value: value,
    left: null,
    right: null
  };
  var recurse = function(node) {
    if ( node.value < value ) {
      if ( node.left === null ) {
        node.left = newNode;
      } else {
        recurse(node.left);
      }
    } else {
      if ( node.right === null ) {
        node.right = newNode;
      } else {
        recurse(node.right);
      }
    }
  };
  recurse(tree.root);
};

treeMaker.methods.contains = function(){

};
