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
  this.head.prev = this.tail;
};

//write methods here!

LinkedList.prototype.addToTail = function(value){
  var newTail = this.makeNode(value);
  if( !this.head.value ) {
    this.head = newTail;
    this.tail = newTail;
  } else {
    this.tail.prev = newTail;
    this.tail = newTail;
  }
};

LinkedList.prototype.removeHead = function(){
  var oldHead = this.head;
  this.head = this.head.prev;
  return oldHead.value;
};

LinkedList.prototype.contains = function(value){
  var node = this.head;
  do {
    if( node.value === value ) {
      return true;
    } else if( node.prev ){
      node = node.prev;
    } else {
      return false;
    }
  } while( node );
};

LinkedList.prototype.makeNode = function(value){
  return {
    value: value,
    prev: null
  };
};
