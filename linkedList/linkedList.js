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
  this.storage = [];

};

LinkedList.prototype.addToTail = function(element){
  if(this.storage.length==0) { this.head = element; }

  this.storage[this.storage.length] = element;
  console.log("addToTail:  Storage = " + this.storage);
  this.tail = element;
};

LinkedList.prototype.removeHead = function(){
  //console.log("a) this.head = " + this.head);
  if(!this.head) { return; }
  this.storage.shift();
  this.head = this.storage[0];
  //console.log("b) this.head = " + this.head);
};

LinkedList.prototype.contains = function(element){
  // Search this.storage for element
  if(this.storage.indexOf(element)>=0) {
    return true;
  }
  return false;
};

LinkedList.prototype.makeNode = function(node){
  // 

};


var list = new LinkedList();
// list.tail.value;   //yields 'null'
list.addToTail(4);
list.addToTail(5);
console.log("HEAD: " + list.head);   //yields '4';
console.log("Contains5: " + list.contains(5));  //yields 'true';
console.log("Contains6: " + list.contains(6));  //yields 'false';
list.removeHead(); //yields '4'
console.log(list.tail);   //yields '5';

