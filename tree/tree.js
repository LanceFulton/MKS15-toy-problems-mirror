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
  tree.children = [];
  return tree;

};

treeMaker.methods = {};

// How do we determine where children go in a tree?
treeMaker.methods.addChild = function(value){
  this.children.push(treeMaker(value));
};


treeMaker.methods.contains = function(value){
  var result = false;
  (function sub(tree){
    if(tree.value === value){result = true;}
    for(var i = 0; i < tree.children.length; i++){
      sub(tree.children[i]);
    }
  })(this);
  return result;
};
