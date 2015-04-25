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
  var list = {};

  this.tail = null;
  this.head = null;
};

//write methods here!

LinkedList.prototype.addToTail = function(target) {
  if (this.head.value === null) {
    this.head.value = target;
  }
  this.tail.value = target;
};

LinkedList.prototype.removeHead = function() {

  var temp = this.head.value;
  this.head.value = null;
  return temp;

};

LinkedList.prototype.contains = function(value) {
};

LinkedList.prototype.makeNode = function() {

};
