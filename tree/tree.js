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
      if (tree.children[i].value === value) { //if this.children[i].contains(value) // returns true or false 
        return true;
      }
    }
  }
  return false;
};


//____________________________SOLUTION________________________________

// Using Array.prototype.some lets me go from something like this:
treeMaker.methods.contains = function(value) {
  if (this.value === value){
    return true;
  }
  for(var i = 0; i < this.children.length; i++){
    var child = this.children[i];
    if (child.contains(value)) {
      return true;
    }
  }
  return false;
};
 
// To something like this
// It's worth thinking about the tradeoffs here
// (if they exist)
// Is this elegance vs. performance?
// Will Array.prototype.some short circuit if the first
// child has the value you're looking for?
treeMaker.methods.contains = function(value){
 return this.value === value || this.children.some(function(child) {
    return child.contains(value);
 });
};