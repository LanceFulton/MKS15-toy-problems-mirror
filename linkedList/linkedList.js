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
  this.head = this.tail = this.makeNode(null);
};

LinkedList.prototype.addToTail = function(val){
  var newNode = this.makeNode(val);
  if (!this.head.value) {
    this.head = this.tail = newNode;
  } else {
    this.tail.next = newNode;
    this.tail = newNode;
  }
};

LinkedList.prototype.removeHead = function(){
  if (this.head.value) {
    var oldHead = this.head;
    this.head = this.head.next;
    return oldHead.value;
  }
};

LinkedList.prototype.contains = function(val){
  var containsRecurse = function(node) {
    if (!node) {
      return false;
    } else {
      return node.value === val || containsRecurse(node.next);
    }
  };
  return containsRecurse(this.head);
};

LinkedList.prototype.makeNode = function(val){
  return {value: val, next: null};
};

// var list = new LinkedList();
// console.log(list.tail.value);   //yields 'null'
// list.addToTail(4);
// list.addToTail(5);
// console.log(list.head.value);   //yields '4';
// console.log(list.contains(5));  //yields 'true';
// console.log(list.contains(6));  //yields 'false';
// console.log(list.removeHead()); //yields '4'
// console.log(list.tail.value);   //yields '5';
