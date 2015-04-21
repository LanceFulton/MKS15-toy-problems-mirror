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
  this.storage = {};
  this.head;
  this.tail;
  this.idx;
};

//write methods here!

LinkedList.prototype.addToTail = function(val){
  this.node = {};
  this.idx += 1;
  this.node['value'] = val;
  this.node['idx'] = this.idx;
  this.node['next'];

  if (!this.head) {
    this.head = this.node;
    this.tail = this.node;
  } else {
    this.tail['next'] = this.idx;
    this.storage['idx'] = this.node;
  }
};

LinkedList.prototype.removeHead = function(){
  if (!this.head){
    return null;
  } else { // account for edge case that involves a head, but no tail. return head, make new head undefined.
    var nextIdx = this.head['next'];
    var nextHead = this.storage[nextIdx];
    var removedHead = this.storage[this.head];
    delete this.storage[this.head]
    this.head = nextHead;
    return removedHead.value;
  }

};

LinkedList.prototype.contains = function(){

};

// LinkedList.prototype.makeNode = function(){
// };
