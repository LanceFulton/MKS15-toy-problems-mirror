/*
 * Implement a linked list using the pseudoclassical instantiation pattern.
 *
 * Your linked list should have methods called "addToTail", "removeHead", and "contains."
 *
 */

// EXAMPLE USAGE:
// var list = new LinkedList();
// list.tail.value;   //yields 'null'
// list.addToTail(4);
// list.addToTail(5);
// list.head.value;   //yields '4';
// list.contains(5);  //yields 'true';
// list.contains(6);  //yields 'false';
// list.removeHead(); //yields '4'
// list.tail.value;   //yields '5';


var LinkedList = function(){
  this.storage = {};
  this.storage[this.head];
  this.storage[this.tail];
};

//write methods here!

LinkedList.prototype.addToTail = function(val){
  var node = {}
  if (!this.storage[this.head]) {
    this.storage[this.head] = node;
  } else if (!!this.tail) {
    this.storage[this.tail.next] = node;
  }
  this.storage[this.tail] = node;
  return this.tail;
};

LinkedList.prototype.removeHead = function(){
  if (!this.storage[this.head]){
    return null;
  } else { // account for edge case that involves a head, but no tail. return head, make new head undefined.
    var nextHead = this.storage[this.head.next];
    var removedHead = this.storage[this.head];
    delete this.storage[this.head]
    this.storage[this.head] = nextHead;
    return removedHead.value;
  }

};

LinkedList.prototype.contains = function(target){
  var nodeFinder = function(node){
    if (node.value === target) {
      return true;
    } else if (node.next === null) {
      return false;
    } else {
      return nodeFinder(node.next)
    }
  }
  return nodeFinder(this.storage[this.head])
};

// LinkedList.prototype.makeNode = function(){
// };
