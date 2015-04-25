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
  //tree is an object
  var newTree = {};
  //setting the newTree's value to the argument
  newTree.value = value;
  //creating an array of children for the tree
  newTree.children = [];
  //returning the new tree
  return newTree;
};

//methods go here!
treeMaker.methods = {};

treeMaker.methods.addChild = function(value){
  //Make each child a tree object of its own
  var newChild = treeMaker(value);
  //Pushes the new child object into the children array
  this.children.push(newChild); 
};


treeMaker.methods.contains = function(value){
  //start by going through just the children
  var hasChildren = false;
  var recurseChildren = function() {
    for (var i = 0; i < this.children.length; i++) {
      if (this.children[i] === value) {
        hasChildren = true;
        return;
      } else {
        //recurse
        recurseChildren(this.children[i]);
      }
    }
  }
  recurseChildren(this.children);
  
  return hasChildren;
};
