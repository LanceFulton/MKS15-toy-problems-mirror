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
  this.list = {}
  this.list.head = null;
  this.list.tail = null;
};


LinkedList.prototype.addToTail = function(value){
  var newNode = LinkedList.prototype.makeNode(value);
  if(this.list.head === null){
    this.list.head = newNode
    this.list.tail = newNode
  } 
  else {
    this.list.tail = newNode //need to fix this
    this.list.tail.next = newNode
    console.log("list: ", this.list)
  }
};

LinkedList.prototype.removeHead = function(){
  if(this.list.head === null){
    return null;
  }
  else{
    var result = this.list.head.value;
    this.list.head = list.head.next;
    return result;
  }
};

LinkedList.prototype.contains = function(target){ 
  var currentNode = this.list.head;
  console.log("current: ", currentNode)
  while(currentNode !== null){
    if(currentNode.value === target){
      return true;
    }
    else{
      currentNode = currentNode.next;
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