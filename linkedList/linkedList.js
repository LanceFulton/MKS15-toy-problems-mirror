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
  //fill me in!
  this.head = this.makeNode(null);
  this.tail = this.makeNode(null);
};

//write methods here!

LinkedList.prototype.addToTail = function(value){
  var newNode = this.makeNode(value);

  if(this.head.value === null){
    this.head = newNode;
  } else if (this.head.next === null){
    this.head.next = newNode;
  }

  if(this.tail){
    this.tail.next = newNode;
  }
  this.tail = newNode;
};

LinkedList.prototype.removeHead = function(){
  this.head = this.head.next;
};

LinkedList.prototype.contains = function(value){
  var isEqual = false;

  var checkAllNodes = function(node){
    if(isEqual === true || node.value === value){
      isEqual = true;
      return;
    } else if (node.next){
      checkAllNodes(node.next);
    }
  }

  checkAllNodes(this.head);

  return isEqual;
};

LinkedList.prototype.makeNode = function(value){
  var node = {
    next: null,
    value: value
  };
  return node;
};
