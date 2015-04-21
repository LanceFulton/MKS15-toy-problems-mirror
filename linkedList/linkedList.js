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
  this.head = null;
  this.tail = null;
};

LinkedList.prototype.addToTail = function(value){
  if(this.tail === null){
    this.head = this.makeNode(value, null);
    this.tail = this.makeNode(value, null);
  } else if(this.head.next === null){
    this.head.next = this.makeNode(value, null);
    this.tail = this.makeNode(value, null);
  } else{
    this.tail.next = this.makeNode(value,null);
    this.tail = this.makeNode(value, null);
  }
};

LinkedList.prototype.removeHead = function(){
  var value = this.head.value;
  this.head = this.head.next;
  return value;
};

LinkedList.prototype.contains = function(value){

};

LinkedList.prototype.makeNode = function(value, next){
  var node = {
    value: value,
    next: next
  };
  return node;
};


var list = new LinkedList();
list.addToTail(4);
console.log(list);
list.addToTail(6);
console.log(list);
list.addToTail(6);
console.log(list);
console.log(list.removeHead());