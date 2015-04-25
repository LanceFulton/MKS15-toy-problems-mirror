/* Implement a tree using prototypal instantiation.
Your tree should have methods named "addChild" and "contains".
*/

// EXAMPLE USAGE:
// var tree = treeMaker();
// tree.addChild(1);
// tree.addChild(2);
// tree.contains(2);   // yields 'true'

var treeMaker = function(value){
  this.tree = null;
  if(value!==null) {
    value.left = null;
    value.right = null;
    this.tree = value;
  }
};

//methods go here!
treeMaker.methods = {};

treeMaker.methods.addChild = function(value){
  value.left = null;
  value.right = null;
  
  var processInsert = function(treeValue, value) {
    while(this.tree!==null && ) {
      if (this.tree.left > value) {
        processInsert(treeValue, value);
      }
    }
  }
  processInsert(value);

  // Loop thru children of parent.


  // Follow children if not null;

};

treeMaker.methods.contains = function(value){

};


var tree = treeMaker();
tree.addChild(1);
tree.addChild(2);
tree.contains(2);   // yields 'true'