/* Implement a tree using prototypal instantiation.
Your tree should have methods named "addChild" and "contains".
*/

// EXAMPLE USAGE:
// var tree = treeMaker();
// tree.addChild(1);
// tree.addChild(2);
// tree.contains(2);   // yields 'true'

var treeMaker = function(value){
  var result = Object.create(treeMaker.methods);
  result.children = [];
  result.value = value;
  return result;
};

//methods go here!
treeMaker.methods = {};

treeMaker.methods.addChild = function(value){
  var newTree = treeMaker(value);
  this.children.push(newTree);
};

treeMaker.methods.contains = function(value){
  if (this.value === value){
    return true;
  }
  for (var i = 0 ; i < this.children.length ; i++){
      if ( this.children[i].contains(value) ){
        return true;
      }
  }
  return false;
};
