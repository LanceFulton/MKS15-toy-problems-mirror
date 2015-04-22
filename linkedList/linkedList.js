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


var node = function(value) {
  this.value = value;
  this.next = null; 
}

var LinkedList = function(){
  //fill me in
  var startNode = new node();
  this.head = startNode;
  this.tail = startNode;
};

//write methods here!

LinkedList.prototype.addToTail = function(value){
  var newTail = new node(value);

    if (!this.head || this.head.value === undefined) {
      this.head = newTail;
    }

    if (this.tail) {
      this.tail.next = newTail;
    }

    this.tail = newTail;
};

LinkedList.prototype.removeHead = function(){
  if (this.head === null){
      return null;
    }

    var currentHead = this.head;
    this.head = this.head.next;

    return currentHead.value;
};

LinkedList.prototype.contains = function(target){
  var node = this.head;

    while (node) {
      if (node.value === target) {
        return true;
      }

      node = node.next;
    }

    return false;
};

LinkedList.prototype.makeNode = function(){
};


 var list = new LinkedList();
 console.log(list.tail.value);   //yields 'null'
 list.addToTail(4);
 list.addToTail(5);
 console.log(list.head.value);   //yields '4';
 console.log(list.contains(5));  //yields 'true';
 console.log(list.contains(6));  //yields 'false';
 console.log(list.removeHead()); //yields '4'
 console.log(list.tail.value);  // 5
