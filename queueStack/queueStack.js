/**
 * Write a stack using your preferred instantiation pattern. Once you're done,
 * implement a queue using two stacks.
 */

/**
  * Stack Class
  */

var Stack = function(storage) {
  this.storage = [];
};
  // this.lowerIdx = 0; - if using objects vs. arrays

  // add an item to the top of the stack
Stack.prototype.push = function(val){
  return this.storage.push(val);
};

// remove an item from the top of the stack
Stack.prototype.pop = function(){
  if (this.storage.length !== 0){
    return this.storage.pop();
  } else {
    return null
  }
};

// return the number of items in the stack
Stack.prototype.size = function(){
  return this.storage.length;
};

/**
  * Queue Class
  */
var Queue = function(inbox, outbox) {
  // Use two `stack` instances to implement your `queue` Class
  this.inbox = new Stack();
  this.outbox = new Stack();
};

// called to add an item to the `queue`
Queue.prototype.enqueue = function(val){
  return this.inbox.push(val);
};

// called to remove an item from the `queue`
Queue.prototype.dequeue = function(){
  if (this.outbox.size() === 0){ // if outbox has no elements from the reversed inbox
    while (this.inbox.size() !== 0){
      this.outbox.push(this.inbox.pop());
    }
  }
  return this.outbox.pop();
  // TODO: implement `dequeue`
};

// should return the number of items in the queue
Queue.prototype.size = function(){
  return (this.outbox.size() + this.inbox.size());
  // TODO: implement `size`
};
