/*
 * Implement a linked list using the pseudoclassical instantiation pattern.
 * 
 * Your linked list should have methods called "addToTail", "removeHead", and "contains."
 *
 */

// EXAMPLE USAGE:

// list.addToTail(5);
// list.head.value;   //yields '4';
// list.contains(5);  //yields 'true';
// list.contains(6);  //yields 'false';
// list.removeHead(); //yields '4'
// list.tail.value;   //yields '5';


var Node = function(value) {
  this.pointsTo = null;
  this.value = value
}

var LinkedList = function(){
  this.tail = new Node(null);
  this.head = this.tail;
};

//write methods here!

LinkedList.prototype.addToTail = function(value){

  if (this.tail.value === null) {
    this.tail.value = value;
  } else { 
    this.tail.pointsTo = new Node(value);
    this.tail = this.tail.pointsTo;
  }

};

LinkedList.prototype.removeHead = function(){
  var old_head = this.head;
  var value = this.head.value;
  this.head = this.head.pointsTo;
  delete old_head;
  return value;
};

LinkedList.prototype.contains = function(value){
  var node = this.head;
  while (node.pointsTo !== null) {
    if (node.value === value) {
      return true;
    }
    node = node.pointsTo;
  }
  return node.valule === value;
};

LinkedList.prototype.makeNode = function(value){
  return new Node(value);
};
