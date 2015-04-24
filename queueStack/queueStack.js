/**
 * Write a stack using your preferred instantiation pattern. Once you're done,
 * implement a queue using two stacks.
 */

/**
  * Stack Class
  */
var Stack = function() {

  this.storage = [];

  // add an item to the top of the stack
  this.push = function(input){
    this.storage.push(input);
  };

  // remove an item from the top of the stack
  this.pop = function(){
    return this.storage.pop();
  };

  // return the number of items in the stack
  this.size = function(){
    return this.storage.length;
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
  this.enqueue = function(input){
    this.inbox.storage.push(input);
    for (var i = this.outbox.storage.length ; i > 0 ; i--){
      this.outbox.storage[i] = this.outbox.storage[i-1];
    }
    this.outbox.storage[0] = input;
  };

  // called to remove an item from the `queue`
  this.dequeue = function(){
    for (var i = 0 ; i < this.inbox.storage.length-1 ; i++){
      this.inbox.storage[i] = this.inbox.storage[i+1];
      this.inbox.storage.pop();
    }
    return this.outbox.storage.pop();
  };

  // should return the number of items in the queue
  this.size = function(){
    return this.inbox.storage.length;
  };
};
