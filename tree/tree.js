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
  tree.value = value;
  tree.children = [];
  return tree;
};

//methods go here!
treeMaker.methods = {};

treeMaker.methods.addChild = function(value){
  var tree = new treeMaker(value);
  this.children.push(tree);
};

treeMaker.methods.contains = function(value){
  var found = false;

  var recurse = function(tree, value) {
    if( tree.value === value ) {
      found = true;
      return;
    } else if( tree.children.length > 0 ) {
      for( var i = 0; i < tree.children.length; i++ ) {
        recurse(tree.children[i], value);
      }
    }
  };

  recurse(this, value);
  return found;
};
