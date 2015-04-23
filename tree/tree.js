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

  var newTree = {};
  newTree.value = value;
  newTree.children = [];
  return newTree;

};

//methods go here!
treeMaker.methods = {};

treeMaker.methods.addChild = function(value){
  var child = treeMaker(value);
  child.value = value;
  this.children.push(child);
};

treeMaker.methods.contains = function(target){
  var result = false;

  var childFinder = function(node){ 
    if(node.value === target){
      return result = true;
    }
    for(var i = 0; i < node.children.length; i++){
      childFinder(node.children[i]);
    }
  }
  childFinder(this);
  return result;

};
