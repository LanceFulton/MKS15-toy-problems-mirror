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
  this.tail = null;
  this.head = null;
  this.storage = {};
  //fill me in!
};

//write methods here!

LinkedList.prototype.addToTail = function(value){
  var newTail = this.makeNode(value);

  if (!this.head) {
    this.head = newTail;
  }

  if (this.tail) {
    this.tail.next = newTail;
  }

  this.tail = newTail;
};

LinkedList.prototype.removeHead = function(){
  var currentHead = this.head;

  this.head = currentHead.next;

  currentHead = null;
};

LinkedList.prototype.contains = function(value){
  var currentNode = this.head;

  while(currentNode) {
    if (currentNode.value === value) {
      return true;
    }
    currentNode = currentNode.next;
  }
  return false;
};

LinkedList.prototype.makeNode = function(){
  var newNode = {
    value: this.value,
    next: null
  };
  return newNode;
};
