/**
 * Write a stack using your preferred instantiation pattern. Once you're done,
 * implement a queue using two stacks.
 */

/**
  * Stack Class
  */
var Stack = function() {
  this.storage = [];
  this.stackSize = 0;

  // add an item to the top of the stack
  this.push = function(value){
    this.storage[this.stackSize] = value;
    this.stackSize++;
  };

  // remove an item from the top of the stack
  this.pop = function(){
    // check there is at least one item in stack
    if( this.storage.length > 0 ) {
      this.stackSize--;
      var result = this.storage[this.stackSize];
      this.storage.pop();
      return result;
    }
  };

  // return the number of items in the stack
  this.size = function(){
    return this.stackSize;
  };
};

/**
  * Queue Class
  */
var Queue = function() {
  // Use two `stack` instances to implement your `queue` Class
  this.inbox = new Stack();
  this.outbox = new Stack();

  // called to add an item to the `queue`
  this.enqueue = function(value){
    // TODO: implement `enqueue`
    this.inbox.push(value);
  };

  // called to remove an item from the `queue`
  this.dequeue = function(){
    // TODO: implement `dequeue`
    var result = this.inbox[this.outbox.size()];
    this.outbox.push(1);
    return result;
  };

  // should return the number of items in the queue
  this.size = function(){
    // TODO: implement `size`
  };
};
