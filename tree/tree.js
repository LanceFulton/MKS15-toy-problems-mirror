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
  var newTree={};
  newTree.value= value;
  newTree.children=[];
  newTree.addChild=treeMaker.methods.addChild;
  newTree.caontains=treeMaker.methods.contains;


  return newTree;
};

//methods go here!
treeMaker.methods = {};

treeMaker.methods.addChild = function(value){
  newTree.children.push(value);


};

treeMaker.methods.contains = function(value){
  for (var i = 0; i < newTree.children.length; i++) {
    if (newTree.children[i].value === value) {
      return true;
    }
  }
  return false;
};


var tree = treeMaker(0);
tree.addChild(1);
tree.addChild(2);
tree.contains(2);   // yields 'true'