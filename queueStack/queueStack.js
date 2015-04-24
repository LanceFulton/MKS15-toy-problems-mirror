/**
 * Write a stack using your preferred instantiation pattern. Once you're done,
 * implement a queue using two stacks.
 */

/**
  * Stack Class
  */

var Stack = function() {
  this.storage = {};
  this.count = 0;
}

Stack.prototype.push = function (value) {
  this.storage[this.count] = value;
  this.count++;
}

Stack.prototype.pop = function() {
  var result = this.storage[this.count - 1];
  delete this.storage[this.count - 1];
  this.count--;
  return result;
}

Stack.prototype.size = function() {
  return this.count;
}

/**
  * Queue Class
  */
var Queue = function() {
  // Use two `stack` instances to implement your `queue` Class
  var inbox = new Stack();
  var outbox = new Stack();

  // called to add an item to the `queue`
  this.enqueue = function(){
    // TODO: implement `enqueue`
  };

  // called to remove an item from the `queue`
  this.dequeue = function(){
    // TODO: implement `dequeue`
  };

  // should return the number of items in the queue
  this.size = function(){
    // TODO: implement `size`
  };
};
