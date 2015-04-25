/* Implement a tree using prototypal instantiation.
Your tree should have methods named "addChild" and "contains".
*/

// EXAMPLE USAGE:
// var tree = treeMaker();
// tree.addChild(1);
// tree.addChild(2);
// tree.contains(2);   // yields 'true'

var treeMaker = function(){
  var tree = Object.create(treeMaker.methods);
  tree.children = [];
  return tree;
};

//methods go here!
treeMaker.methods = {};

treeMaker.methods.addChild = function(value){
  var child = return treeMaker();
  child.value = value;
  (this.children).push(child);
};

treeMaker.methods.contains = function(val){
  var childFinder = function(array, val){
    for (var i = 0;  i < array.length; i ++){
      if (array[i].value === val){
        return true;
      }
      if (array[i].children.length > 1){
        childFinder(array[i].children, val);
      }
    }
  return false;
  }
  return childFinder(this.children, val);
};



  // return this.children.forEach(function(x){
  //     console.log(x.value);
  //   if (x.value === val){
  //       console.log('true')
  //     return true;
  //   }
  //   if (x.children.length > 1) {
  //     return x.children.contains(val);
  //   }
  //   return false;
  // });
