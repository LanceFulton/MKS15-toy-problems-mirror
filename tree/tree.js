/* Implement a tree using prototypal instantiation.
Your tree should have methods named "addChild" and "contains".
*/

// EXAMPLE USAGE:
// var tree = treeMaker();
// tree.addChild(1);
// tree.addChild(2);
// tree.contains(2);   // yields 'true'

var treeMaker = function(value){
  //tree code goes here!
  var tree = Object.create(treeMaker.methods);
  tree.root = null;
  return tree;
};

//methods go here!
treeMaker.methods = {};

treeMaker.methods.addChild = function(value){
  var node = {
    children : [],
    value : value
  }

  if (this.root === null){
    this.root = node;
  } else {
    this.root.children.push(node);
  }
};

treeMaker.methods.contains = function(value){
  var isFound = false;

  var walkTree = function(node){
    if(isFound === true || node.value === value){
      isFound = true;
      return;
    } else if (node.children.length > 0) {
      for (var i = 0; i < node.children.length; i++){
        walkTree(node.children[i]);
      }
    }
  }

  walkTree(this.root);
  return isFound;
};
