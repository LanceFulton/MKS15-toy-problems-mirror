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
  this.tail = {
    value : null,
    next : null
  };
  this.head = {
    value : null,
    next : null
  };
};

//write methods here!

LinkedList.prototype.addToTail = function(value){
  // create node with value
  var node = this.makeNode(value);
  if (this.tail){
    this.tail.next = node;
  }
  this.tail = node;
  // if list is empty,
  if (this.head === null){
    this.head = this.null;
  }
};

LinkedList.prototype.removeHead = function(){
  if (this.head){
    var result = this.head;
    this.head = result.next
    return result.value;
  }
  return null;
};

LinkedList.prototype.contains = function(value){
  var current = this.head;
  while(current) {
    if(current.value === target) {
      return true;
    } else {
      current = current.next;
    }
  }
  return false;
};

LinkedList.prototype.makeNode = function(value){
  var node = {};

  node.value = value;
  node.next = null;

  return node;

};
