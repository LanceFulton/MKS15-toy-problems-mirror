/*
 * Implement a linked list using the pseudoclassical instantiation pattern.
 * 
 * Your linked list should have methods called "addToTail", "removeHead", and "contains."
 *
 */

// EXAMPLE USAGE:
var list = new LinkedList();
list.tail.value;   //yields 'null'
list.addToTail(4);
list.addToTail(5);
list.head.value;   //yields '4';
list.contains(5);  //yields 'true';
list.contains(6);  //yields 'false';
list.removeHead(); //yields '4'
list.tail.value;   //yields '5';


var LinkedList = function() {
  this.tail = {
    value: null,
    next: null
  };

  this.head = {
    value: null,
    next: null
  };

};

//write methods here!

LinkedList.prototype.addToTail = function(input) {
  var newNode = this.makeNode(input, this.tail);
  this.tail = newNode;
  if ( this.head.value === null ) {
    this.head = newNode;
  };
};

LinkedList.prototype.removeHead = function() {
  var node = this.tail;
  var headFound = true;
  var newHead;
  while (headFound) {
    if ( node || node.next === this.head ) {
      newHead = node;
      this.head = newHead;
      newHead.next = null;
      headFound = false;
    } else {
      node = node.next;
    }
  }
  return node;
};

LinkedList.prototype.contains = function(compareValue) {
    var doesContain = false;
    var recurse = function (compareNode) {
      if ( compareNode.value === compareValue) {
        doesContain = true;
        return;
      } else if (compareNode.next === null) {
        doesContain = false;
        return;
      } else {
        recurse(compareNode.next);
      }
    };

    recurse(this.tail);
    return doesContain;
};

LinkedList.prototype.makeNode = function(input, prevTail) {
  return {
    value : input,
    next : prevTail
  };
};
