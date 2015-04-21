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

//write methods here!

LinkedList.prototype.addToTail = function(val) {
  var node = new this.makeNode(val);
  if (this.tail === null) {
    //adding to the tail when there is no items in the list
    this.head = node;
  } else {
    this.tail.next - newNode;
  }
  this.tail = node;
};

LinkedList.prototype.removeHead = function() {
  //remove the head of the list and change the reference to the next item, return the value of the head
  var value;
  if (this.head !== this.tail) {
    value = this.head.value;
    this.head = this.head.next;
  } else if (this.head === this.tail) {
    if (this.head) {
      value = this.head.value;
    } else {
      value = null;
    }
    //set both to null if they are equal ie. there is only one item in the linkedlists
    this.head = null;
    this.tail = null;
  }

  return value;
};

LinkedList.prototype.contains = function(val){
  var search = this.head;

  while (search !== null && search.value !== val) {
    //iterate through all of the nodes until the value is found or the end is reached
    search = search.next;
  }

  return search !== null;
};

LinkedList.prototype.makeNode = function(val) {
  //create a node that has a value and a reference to the next node in the list
  this.value = val;
  this.next = null;
};
