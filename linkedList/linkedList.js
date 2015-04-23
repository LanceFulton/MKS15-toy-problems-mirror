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
  this.head = {value: null, next: null};
  this.tail = {value: null, next: null};
};

LinkedList.prototype.addToTail = function(value){
  var newNode = this.makeNode(value);
  if(this.head.value === null && this.tail.value === null) {
    this.head = newNode;
  } else {
    this.tail.next = newNode;
  }
  this.tail = newNode;
};

LinkedList.prototype.removeHead = function(){
  var value = this.head.value;
  var next = this.head.next;
  this.head = next;
  return value;
};

LinkedList.prototype.contains = function(value){
  return (function sub(node){
    return !!node && ((node.value === value) || sub(node.next));
  })(this.head);
};

LinkedList.prototype.makeNode = function(value, next){
  var node = {
    value: value,
    next: next
  };
  return node;
};
